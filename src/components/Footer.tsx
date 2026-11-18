import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Wine, Utensils } from 'lucide-react';
import { BRAND } from '../data/menuData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040810] border-t border-white/[0.08] text-slate-400 text-xs pt-16 pb-12 relative overflow-hidden w-full max-w-full">
      {/* Decorative Aegean Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[550px] h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(0,119,182,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="./logo.png"
                alt="Tío Santorini Logo"
                className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(0,119,182,0.5)]"
              />
              <span className="font-display text-xl font-bold text-white tracking-widest">
                TÍO SANTORINI
              </span>
            </div>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Una experiencia culinaria que embelesa tus sentidos. Paellas de mariscos, carnes a la brasa, pizzas artesanales, shawarmas al grill y coctelería de autor en San Diego, Carabobo.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram de Santorini"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-[#48cae4] transition-colors"
                aria-label="Llamar por teléfono"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Carta Gastronómica
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Utensils className="w-3 h-3 text-[#48cae4]" />
                  <span>Paellas & Pescados (1-35)</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Utensils className="w-3 h-3 text-[#48cae4]" />
                  <span>Cortes & Parrillas para 6 (36-52)</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Utensils className="w-3 h-3 text-[#48cae4]" />
                  <span>Pizzas & Shawarmas al Grill (53-73)</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Utensils className="w-3 h-3 text-[#48cae4]" />
                  <span>Burgers, Pepitos & Promos (74-88)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Bar & Night Lounge */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Bar & Lounge Nocturno
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Wine className="w-3 h-3 text-[#48cae4]" />
                  <span>Cócteles de Autor & Daiquiris (1-28)</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Wine className="w-3 h-3 text-[#48cae4]" />
                  <span>Whiskies & Rones Venezolanos (29-44)</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Wine className="w-3 h-3 text-[#48cae4]" />
                  <span>Servicios de Botella VIP (54-75)</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Wine className="w-3 h-3 text-[#48cae4]" />
                  <span>Smoothies, Jugos & Cafetería (85-103)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-4">
              Información & Horario
            </h4>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#48cae4] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Lunes a Domingo</p>
                <p className="text-slate-400">11:00 AM – 3:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#48cae4] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{BRAND.phoneDisplay}</p>
                <p className="text-slate-400">WhatsApp para pedidos & reservas</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#48cae4] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">San Diego, Carabobo</p>
                <p className="text-slate-400">Venezuela</p>
              </div>
            </div>
          </div>
        </div>

        {/* Taglines Marquee Line */}
        <div className="py-4 border-y border-white/[0.06] text-[11px] text-slate-400 tracking-wider uppercase text-center flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span>Para Degustar</span>
          <span>•</span>
          <span>Experimenta el Sabor</span>
          <span>•</span>
          <span>Especialidad de la Casa</span>
          <span>•</span>
          <span>Para Compartir</span>
          <span>•</span>
          <span>Al Grill</span>
          <span>•</span>
          <span>Cocteles de Autor</span>
          <span>•</span>
          <span>Servicios Premium</span>
        </div>

        {/* Bottom credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {CURRENT_YEAR} Tío Santorini Venezuela. Todos los derechos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
