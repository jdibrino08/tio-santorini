import React from 'react';
import { 
  ArrowDown, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ChevronDown
} from 'lucide-react';
import { BRAND } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hola Santorini Venezuela, deseo consultar disponibilidad y reservar una mesa / hacer un pedido.'
  )}`;

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-36 pb-8 sm:pb-12 overflow-hidden w-full max-w-full"
    >
      {/* =========================================================================
          BACKGROUND ESTABLE Y ULTRALIGERO (CERO LAG, 120FPS NATIVO EN MÓVIL)
          Eliminado el recalculado por JS en scroll para evitar tirones y zooms
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full transform-gpu">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1280&q=75"
            srcSet="
              https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=640&q=75 640w,
              https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1080&q=75 1080w,
              https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=75 1920w
            "
            sizes="100vw"
            alt="Santorini Restaurant & Lounge Ambiance"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center brightness-75 will-change-transform"
          />
          {/* Capas de gradientes sedosos para transición suave sin saltos de render */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/80 to-[#060c18]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c18]/92 via-[#060c18]/65 to-transparent" />
        </div>

        {/* Resplandores con gradiente radial nativo (Cero consumo de GPU vs blur pesado) */}
        <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,119,182,0.22)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 left-10 w-60 sm:w-80 h-60 sm:h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
      </div>

      {/* =========================================================================
          CONTENIDO PRINCIPAL DEL HERO (100% ESTABLE, SIN OPACIDADES DINÁMICAS)
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-[#90e0ef] uppercase tracking-widest mb-3 sm:mb-4 shadow-[0_0_20px_rgba(0,119,182,0.25)]">
            <img 
              src="./logo.png" 
              alt="Tío Santorini Logo" 
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain drop-shadow-[0_0_8px_rgba(0,119,182,0.8)]" 
            />
            <span>Tío Santorini • San Diego, Carabobo</span>
          </div>

          {/* Headline Principal con Tipografía de Lujo */}
          <h1 className="font-display text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08] mb-3 sm:mb-4">
            TÍO SANTORINI
            <span className="block text-xl sm:text-3xl lg:text-4xl font-light text-slate-300 font-sans tracking-wide mt-1 sm:mt-2">
              Restaurant & Night Lounge
            </span>
          </h1>

          {/* Copy Culinario */}
          <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Una experiencia culinaria que embelesa tus sentidos. Paellas de mariscos, cortes al carbón, pastas artesanales, shawarmas al grill y coctelería de autor abierta hasta las 3:00 AM.
          </p>

          {/* Botones de Acción (Adaptados para pulgares en móvil) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={onExploreMenu}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white text-[#060c18] hover:bg-slate-100 font-semibold text-xs sm:text-sm tracking-wide shadow-[0_4px_25px_rgba(255,255,255,0.25)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver Menú Completo</span>
              <ArrowDown className="w-4 h-4 text-[#060c18]" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 text-white font-medium text-xs sm:text-sm tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>WhatsApp Directo: (0424) 4463511</span>
            </a>
          </div>

          {/* Píldoras de Atributos de Confianza (Grid 2 cols móvil / 3 cols desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#48cae4] shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] text-slate-400">Horario Continuo</p>
                <p className="text-[11px] sm:text-xs font-semibold text-white truncate">11:00 AM – 3:00 AM</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#48cae4] shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] text-slate-400">Ubicación</p>
                <p className="text-[11px] sm:text-xs font-semibold text-white truncate">San Diego, Carabobo</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#48cae4] shrink-0">
                <span className="text-[11px] sm:text-xs font-bold font-mono">191</span>
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] text-slate-400">Variedad Exclusiva</p>
                <p className="text-[11px] sm:text-xs font-semibold text-white">88 Platos • 103 Bebidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TRANSICIÓN SEDOSA Y CONTINUA (SMOOTH TRANSITION VEIL):
          Une el Hero con Nuestra Carta de forma orgánica, sin cortes bruscos ni bloqueos de scroll
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-10">
        {/* Píldora de Conexión Sedosa con Efecto Cristal Líquido */}
        <div className="flex items-center justify-center">
          <button
            onClick={onExploreMenu}
            className="group inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-[#0077b6]/50 transition-all duration-300 shadow-[0_4px_25px_rgba(0,119,182,0.18)] cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse shrink-0" />
            <span className="text-xs text-slate-200 font-medium">
              Explorar Nuestra Carta Gastronómica & Coctelería
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-[11px] text-amber-300 font-mono hidden sm:inline font-semibold">
              191 Opciones en USD y BCV
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#48cae4] group-hover:translate-y-0.5 transition-transform shrink-0" />
          </button>
        </div>

        {/* Gradiente de Luz Líquida que funde el fondo con la siguiente sección */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mt-6 sm:mt-8" />
      </div>
    </section>
  );
};
