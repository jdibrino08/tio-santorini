import React from 'react';
import { Wine, Sparkles, Clock, Music, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { BRAND } from '../data/menuData';

interface LoungeExperienceProps {
  onExploreDrinks: () => void;
}

export const LoungeExperience: React.FC<LoungeExperienceProps> = ({ onExploreDrinks }) => {
  const vipWhatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hola Santorini Lounge, deseo consultar disponibilidad para reserva de mesa / servicio VIP para esta noche.'
  )}`;

  return (
    <section id="lounge" className="py-24 relative overflow-hidden bg-[#050912] w-full max-w-full">
      {/* Background Lighting (GPU-friendly radial gradients) */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,119,182,0.18)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(2,62,138,0.22)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-[#90e0ef] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#48cae4]" />
              <span>Experiencia Nocturna • Abierto hasta las 3:00 AM</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Lounge & Coctelería de Autor
              <span className="block text-xl sm:text-2xl font-light text-slate-300 font-sans mt-2">
                Elegancia líquida y servicios exclusivos en San Diego
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Cuando cae el sol, Santorini se transforma en el punto de encuentro predilecto de Carabobo. Disfruta de una atmósfera sofisticada en terraza, música envolvente, coctelería clásica y de autor, además de servicios de botellas premium con atención personalizada a la mesa.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#48cae4]">
                  <Wine className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Servicios de Botella</span>
                </div>
                <p className="text-xs text-slate-400">
                  Buchanan's 18, Old Parr, Santa Teresa 1796, Cacique 500 y Carúpano 21 servidos con hielera y acompañantes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#48cae4]">
                  <Music className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Ambiente & Terraza</span>
                </div>
                <p className="text-xs text-slate-400">
                  Espacio al aire libre con confort climático, iluminación cálida y ambiente chill-out hasta la madrugada.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#48cae4]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Horario Extendido</span>
                </div>
                <p className="text-xs text-slate-400">
                  De Lunes a Domingo desde las 11:00 AM hasta las 3:00 AM ininterrumpidamente.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#48cae4]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Seguridad & Confort</span>
                </div>
                <p className="text-xs text-slate-400">
                  Estacionamiento y vigilancia privada para una velada sin preocupaciones.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreDrinks}
                className="px-6 py-3 rounded-full bg-[#0077b6] hover:bg-[#0096c7] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(0,119,182,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Ver Lista de Cócteles & Botellas</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={vipWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs sm:text-sm font-medium tracking-wide transition-all"
              >
                Reservar Mesa VIP
              </a>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
                alt="Coctelería de autor y ambiente lounge en Santorini"
                className="w-full h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-black/30" />

              {/* Floating Glass Pill on the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#48cae4]" />
                    103 Opciones en Barra
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Cócteles clásicos, tropicales, vinos, rones y whiskies premium
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Abierto Hoy
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">Hasta las 3:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
