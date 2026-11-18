import React, { useState, useEffect, useMemo } from 'react';
import { X, Check, Sparkles, Plus, Minus, Flame, SlidersHorizontal, Ban, Utensils } from 'lucide-react';
import type { MenuItem } from '../data/menuData';
import { formatVes } from '../hooks/useBcvRate';
import { getMenuItemImage } from '../data/foodImages';

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onConfirm: (
    item: MenuItem,
    selectedOptions: string[],
    notes: string,
    quantity: number,
    isEditingExisting: boolean
  ) => void;
  bcvRate: number | null;
  initialOptions?: string[];
  initialNotes?: string;
  initialQuantity?: number;
  isEditingExisting?: boolean;
}

const COOKING_TERMS = [
  'Término Medio',
  '3/4 (Recomendado)',
  'Bien Cocido',
  'Sellado / Azul',
];

function shouldShowCookingTerm(item: MenuItem): boolean {
  if (item.section !== 'comidas') return false;
  const text = `${item.name} ${item.description || ''}`.toLowerCase();
  const hasBeefOrGrill =
    /lomito|solomo|punta trasera|churrasco|hamburguesa|clásica|callejera|sweet onion|pepito|trío de carnes|parrilla mixta|parrilla mar y tierra|carpaccio de lomito/i.test(
      text
    );
  const isNonBeefOnly =
    /róbalo|robalo|pollo a la suiza|parrilla de pollo|parrilla de mariscos|punta de cerdo|lechón|lechon|salmon|salmón|cesar|césar/i.test(
      item.name.toLowerCase()
    );
  return hasBeefOrGrill && !isNonBeefOnly;
}

function getSmartRemovalChips(item: MenuItem): string[] {
  if (item.section !== 'comidas') return [];
  const text = `${item.name} ${item.description || ''}`.toLowerCase();
  const detected: string[] = [];

  const rules: [RegExp, string][] = [
    [/cebolla/i, 'Sin cebolla'],
    [/tomate/i, 'Sin tomate'],
    [/ajo/i, 'Sin ajo'],
    [/queso|mozzarella|parmesano|kraft|pecorino/i, 'Sin queso'],
    [/tocineta/i, 'Sin tocineta'],
    [/pepinillo/i, 'Sin pepinillo'],
    [/maíz|maiz/i, 'Sin maíz'],
    [/aguacate/i, 'Sin aguacate'],
    [/pimentón|pimenton/i, 'Sin pimentón'],
    [/aceituna/i, 'Sin aceitunas'],
    [/jamón|jamon/i, 'Sin jamón'],
    [/huevo/i, 'Sin huevo'],
    [/lechuga/i, 'Sin lechuga'],
    [/alcaparra/i, 'Sin alcaparras'],
    [/piña/i, 'Sin piña'],
    [/papitas/i, 'Sin papitas'],
    [/vegetales/i, 'Sin vegetales'],
    [/tabule/i, 'Sin tabule'],
  ];

  for (const [regex, label] of rules) {
    if (regex.test(text) && !detected.includes(label)) {
      detected.push(label);
    }
  }

  // Ensure useful universal kitchen adjustments are always available
  const fallbacks = ['Sin cebolla', 'Sin ajo', 'Poco sal', 'Sin picante'];
  for (const fb of fallbacks) {
    if (detected.length >= 6) break;
    if (!detected.includes(fb)) detected.push(fb);
  }

  return detected.slice(0, 6);
}

function getSmartPreferenceChips(item: MenuItem): string[] {
  if (item.section !== 'comidas') return [];
  switch (item.category) {
    case 'cortes-fuertes':
    case 'parrillas':
      return ['Salsa aparte', 'Bien dorado', 'Extra pico de gallo', 'Extra queso'];
    case 'paellas-mariscos':
      return ['Extra limón', 'Aceite de oliva aparte', 'Bien caliente', 'Salsa aparte'];
    case 'pastas':
      return ['Extra parmesano', 'Salsa aparte', 'Pasta al dente', 'Extra salsa'];
    case 'pizzas':
      return ['Masa bien crocante', 'Extra queso', 'Cortar en 8', 'Salsa aparte'];
    case 'grill-shawarmas':
      return ['Extra salsa de ajo', 'Extra hummus', 'Pan bien tostado', 'Salsas aparte'];
    case 'burgers-promos':
      return ['Salsas aparte', 'Extra salsa de ajo', 'Pan bien tostado', 'Extra tocineta'];
    case 'ensaladas-sopas':
      return ['Aderezo aparte', 'Extra limón', 'Extra parmesano', 'Bien caliente'];
    default:
      return ['Salsa aparte', 'Bien crocante', 'Extra limón', 'Extra queso'];
  }
}

export const ItemCustomizerModal: React.FC<ItemCustomizerModalProps> = ({
  item,
  onClose,
  onConfirm,
  bcvRate,
  initialOptions = [],
  initialNotes = '',
  initialQuantity = 1,
  isEditingExisting = false,
}) => {
  const showCookingTerm = useMemo(() => (item ? shouldShowCookingTerm(item) : false), [item]);
  const removalChips = useMemo(() => (item ? getSmartRemovalChips(item) : []), [item]);
  const preferenceChips = useMemo(() => (item ? getSmartPreferenceChips(item) : []), [item]);

  // Pre-partition initialOptions back into their respective groups when editing
  const [selectedPrimary, setSelectedPrimary] = useState<string[]>(() => {
    if (!item?.options) return [];
    return initialOptions.filter((opt) => item.options!.choices.includes(opt));
  });

  const [cookingTerm, setCookingTerm] = useState<string>(() => {
    const found = initialOptions.find((opt) => opt.startsWith('Término: '));
    return found ? found.replace('Término: ', '') : '';
  });

  const [selectedMods, setSelectedMods] = useState<string[]>(() => {
    const primarySet = new Set(item?.options?.choices || []);
    return initialOptions.filter((opt) => !primarySet.has(opt) && !opt.startsWith('Término: '));
  });

  const [notes, setNotes] = useState(initialNotes);
  const [quantity, setQuantity] = useState(Math.max(1, initialQuantity));

  // Close on Escape key press
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const photoUrl = item.image || getMenuItemImage(item.itemNumber, item.section, item.category);
  const totalUsd = item.price * quantity;
  const totalVes = formatVes(totalUsd, bcvRate);

  const togglePrimaryChoice = (choice: string) => {
    if (!item.options) return;
    const { maxSelect } = item.options;
    if (selectedPrimary.includes(choice)) {
      setSelectedPrimary(selectedPrimary.filter((c) => c !== choice));
    } else {
      if (selectedPrimary.length < maxSelect) {
        setSelectedPrimary([...selectedPrimary, choice]);
      } else if (maxSelect === 1) {
        setSelectedPrimary([choice]);
      }
    }
  };

  const toggleModChip = (chip: string) => {
    if (selectedMods.includes(chip)) {
      setSelectedMods(selectedMods.filter((c) => c !== chip));
    } else {
      setSelectedMods([...selectedMods, chip]);
    }
  };

  const handleConfirm = () => {
    const combinedOptions: string[] = [
      ...selectedPrimary,
      ...(cookingTerm ? [`Término: ${cookingTerm}`] : []),
      ...selectedMods,
    ];
    onConfirm(item, combinedOptions, notes.trim(), quantity, isEditingExisting);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="customizer-modal-title"
        data-lenis-prevent
        className="relative z-10 w-full max-w-lg max-h-[92dvh] flex flex-col bg-[#081020] border border-white/15 rounded-3xl shadow-2xl overflow-hidden animate-scaleUp"
      >
        {/* Top Photo Banner Header (Fixed) */}
        <div className="relative h-36 sm:h-44 w-full shrink-0 overflow-hidden bg-[#050a14]">
          <img
            src={photoUrl}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 split-photo-fade pointer-events-none" />

          {/* Top Left Tag */}
          <div className="absolute top-3.5 left-4 flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg glass-pill-photo text-[#90e0ef]">
              #{item.itemNumber}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full glass-pill-photo text-slate-200 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-[#48cae4]" />
              {isEditingExisting ? 'Editar Plato' : 'Personalizar'}
            </span>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar personalizador"
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full glass-pill-photo text-slate-200 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Bottom-left Title overlay on fade */}
          <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between gap-3">
            <h3
              id="customizer-modal-title"
              className="font-display text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              {item.name}
            </h3>
            <span className="font-mono text-base sm:text-lg font-extrabold text-white shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div
          data-lenis-prevent
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-4 space-y-5"
        >
          {item.description && (
            <p className="text-xs text-slate-300/90 font-light leading-relaxed">
              {item.description}
            </p>
          )}

          {/* 1. Dish-Specific Options (Contornos / Proteínas / Frutas) */}
          {item.options && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#48cae4]" />
                  <span>{item.options.title}</span>
                </label>
                <span className="text-[11px] text-[#90e0ef] font-mono">
                  {selectedPrimary.length} / {item.options.maxSelect}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {item.options.choices.map((choice) => {
                  const isSelected = selectedPrimary.includes(choice);
                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => togglePrimaryChoice(choice)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0077b6]/30 border-[#48cae4] text-white shadow-[0_0_15px_rgba(0,119,182,0.3)]'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]'
                      }`}
                    >
                      <span className="truncate">{choice}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#48cae4] bg-[#48cae4] text-[#060c18]'
                            : 'border-white/25'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Término de Cocción (Automatically shown for meats / grills / burgers) */}
          {showCookingTerm && (
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Término de cocción (opcional)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {COOKING_TERMS.map((term) => {
                  const isSelected = cookingTerm === term;
                  return (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setCookingTerm(isSelected ? '' : term)}
                      className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-400/70 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]'
                      }`}
                    >
                      <span>{term}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-300 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. Quitar Ingredientes ("Sin...") */}
          {removalChips.length > 0 && (
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Ban className="w-3.5 h-3.5 text-rose-400" />
                <span>Quitar ingredientes</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {removalChips.map((chip) => {
                  const isSelected = selectedMods.includes(chip);
                  return (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => toggleModChip(chip)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-rose-500/20 border-rose-400/70 text-rose-200'
                          : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-rose-300" />}
                      <span>{chip}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. Preferencias / Extras de Cocina */}
          {preferenceChips.length > 0 && (
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#48cae4]" />
                <span>Preferencias de preparación</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {preferenceChips.map((chip) => {
                  const isSelected = selectedMods.includes(chip);
                  return (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => toggleModChip(chip)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0077b6]/30 border-[#48cae4] text-[#90e0ef]'
                          : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-[#48cae4]" />}
                      <span>{chip}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. Notas libres para cocina */}
          <div className="space-y-1.5">
            <label htmlFor="kitchen-notes-input" className="block text-xs font-semibold text-white">
              Notas adicionales para cocina (opcional)
            </label>
            <textarea
              id="kitchen-notes-input"
              rows={2}
              placeholder="Ej. Alergia a frutos secos, cortar a la mitad, salsa bien caliente..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#48cae4] resize-none"
            />
          </div>
        </div>

        {/* Sticky Footer: Quantity + Confirm Liquid Glass Button */}
        <div className="shrink-0 p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center gap-1 glass-pill rounded-full p-1 border border-white/15 shrink-0">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Disminuir cantidad"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-sm font-bold text-white w-7 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Aumentar cantidad"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Confirm CTA */}
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 rounded-full btn-glass-aegean text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-between gap-2 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#90e0ef]" />
              <span>{isEditingExisting ? 'Guardar Cambios' : 'Agregar'}</span>
            </span>
            <span className="font-mono text-right leading-tight">
              <span className="block">${totalUsd.toFixed(2)}</span>
              {totalVes && (
                <span className="block text-[10px] text-emerald-300 font-semibold">
                  {totalVes}
                </span>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
