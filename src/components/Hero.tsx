import React from 'react';
import { ArrowDown, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BRAND } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hola Santorini Venezuela, deseo consultar disponibilidad y reservar una mesa / hacer un pedido.'
  )}`;

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 overflow-hidden">
      {/* Background Image with Cinematic Aegean Ambience */}
      <div className="absolute inset-0 z-0">
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
          className="w-full h-full object-cover object-center brightness-75 scale-100 transition-transform duration-1000"
        />
        {/* Cinematic gradient overlays for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/85 to-[#060c18]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c18]/90 via-[#060c18]/60 to-transparent" />
        {/* Aegean Blue & Gold ambient glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0077b6]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content Container (Editorial Bottom-Left Composition) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs text-[#90e0ef] uppercase tracking-widest mb-4">
            <img src="./logo.png" alt="Tío Santorini Logo" className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(0,119,182,0.8)]" />
            <span>Tío Santorini • San Diego, Carabobo</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            TÍO SANTORINI
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-slate-300 font-sans tracking-wide mt-2">
              Restaurant & Night Lounge
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
            Una experiencia culinaria que embelesa tus sentidos. Paellas de mariscos, cortes al carbón, pastas artesanales, shawarmas al grill y coctelería de autor abierta hasta las 3:00 AM.
          </p>

          {/* Call to Actions (Apple & Nike standard pills) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={onExploreMenu}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white text-[#060c18] hover:bg-slate-100 font-semibold text-xs sm:text-sm tracking-wide shadow-[0_4px_25px_rgba(255,255,255,0.25)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <span>Ver Menú Completo</span>
              <ArrowDown className="w-4 h-4 text-[#060c18]" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 text-white font-medium text-xs sm:text-sm tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Directo: (0424) 4463511</span>
            </a>
          </div>

          {/* Trust Attributes Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#48cae4]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400">Horario Continuo</p>
                <p className="text-xs font-semibold text-white">11:00 AM – 3:00 AM</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#48cae4]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400">Ubicación</p>
                <p className="text-xs font-semibold text-white">San Diego, Carabobo</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#48cae4]">
                <span className="text-xs font-bold font-mono">191</span>
              </div>
              <div>
                <p className="text-[11px] text-slate-400">Variedad Exclusiva</p>
                <p className="text-xs font-semibold text-white">88 Platos • 103 Bebidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
