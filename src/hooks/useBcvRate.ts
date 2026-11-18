import { useState, useEffect, useCallback, useRef } from 'react';

export interface BcvRateState {
  rate: number | null;
  updatedAt: string | null;
  source: string;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const CACHE_KEY = 'santorini_bcv_rate_v1';
const REFRESH_INTERVAL_MS = 15 * 60 * 1000; // 15 minutes
const MIN_FOCUS_REFETCH_MS = 5 * 60 * 1000; // 5 minutes

interface CachedRate {
  rate: number;
  updatedAt: string;
  source: string;
  savedAt: number;
}

function readCache(): CachedRate | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedRate;
    if (typeof parsed.rate === 'number' && Number.isFinite(parsed.rate) && parsed.rate > 0) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeCache(entry: CachedRate) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // Ignore storage quota errors in private browsing
  }
}

async function fetchWithTimeout(url: string, timeoutMs = 6000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchLiveBcvRate(): Promise<{ rate: number; updatedAt: string; source: string }> {
  // Primary: DolarApi Venezuela Official BCV Rate
  try {
    const res = await fetchWithTimeout('https://ve.dolarapi.com/v1/dolares/oficial');
    const data = (await res.json()) as {
      promedio?: number;
      fechaActualizacion?: string;
    };
    if (typeof data.promedio === 'number' && Number.isFinite(data.promedio) && data.promedio > 0) {
      return {
        rate: data.promedio,
        updatedAt: data.fechaActualizacion || new Date().toISOString(),
        source: 'BCV Oficial (DolarApi)',
      };
    }
  } catch {
    // Fall through to secondary endpoint
  }

  // Secondary fallback: Open Exchange Rates USD -> VES
  const res = await fetchWithTimeout('https://open.er-api.com/v6/latest/USD');
  const data = (await res.json()) as {
    rates?: { VES?: number };
    time_last_update_utc?: string;
  };
  const ves = data.rates?.VES;
  if (typeof ves === 'number' && Number.isFinite(ves) && ves > 0) {
    return {
      rate: ves,
      updatedAt: data.time_last_update_utc
        ? new Date(data.time_last_update_utc).toISOString()
        : new Date().toISOString(),
      source: 'BCV Referencial',
    };
  }

  throw new Error('No se pudo obtener una tasa válida USD/VES');
}

export function formatVes(usdAmount: number, rate: number | null): string | null {
  if (rate === null || !Number.isFinite(rate) || rate <= 0) return null;
  const totalVes = usdAmount * rate;
  return `Bs. ${totalVes.toLocaleString('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatRateDisplay(rate: number | null): string {
  if (rate === null || !Number.isFinite(rate) || rate <= 0) return '—';
  return `Bs. ${rate.toLocaleString('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function useBcvRate(): BcvRateState {
  const initialCache = readCache();
  const [rate, setRate] = useState<number | null>(initialCache?.rate ?? null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(initialCache?.updatedAt ?? null);
  const [source, setSource] = useState<string>(initialCache?.source ?? 'BCV Oficial');
  const [isLoading, setIsLoading] = useState<boolean>(initialCache === null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const lastFetchTimeRef = useRef<number>(initialCache?.savedAt ?? 0);

  const fetchRate = useCallback(async (showSpinner: boolean) => {
    if (showSpinner) setIsRefreshing(true);
    setError(null);
    try {
      const result = await fetchLiveBcvRate();
      const now = Date.now();
      setRate(result.rate);
      setUpdatedAt(result.updatedAt);
      setSource(result.source);
      lastFetchTimeRef.current = now;
      writeCache({ ...result, savedAt: now });
    } catch {
      setError('Sin conexión con BCV; mostrando última tasa guardada.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  const refresh = useCallback(async () => {
    await fetchRate(true);
  }, [fetchRate]);

  useEffect(() => {
    let active = true;
    const runSilent = async () => {
      try {
        const result = await fetchLiveBcvRate();
        if (!active) return;
        const now = Date.now();
        setRate(result.rate);
        setUpdatedAt(result.updatedAt);
        setSource(result.source);
        lastFetchTimeRef.current = now;
        writeCache({ ...result, savedAt: now });
      } catch {
        if (active) setError('Sin conexión con BCV; mostrando última tasa guardada.');
      } finally {
        if (active) setIsLoading(false);
      }
    };

    void runSilent();

    const interval = setInterval(() => {
      void runSilent();
    }, REFRESH_INTERVAL_MS);

    const handleVisibility = () => {
      if (
        document.visibilityState === 'visible' &&
        Date.now() - lastFetchTimeRef.current > MIN_FOCUS_REFETCH_MS
      ) {
        void runSilent();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      active = false;
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return {
    rate,
    updatedAt,
    source,
    isLoading,
    isRefreshing,
    error,
    refresh,
  };
}
