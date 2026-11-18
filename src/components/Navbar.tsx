import React, { useState, useEffect } from 'react';
import { Phone, Clock, ShoppingBag, Menu, X, Wine } from 'lucide-react';
import { BRAND } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeTab: 'comidas' | 'bebidas';
  setActiveTab: (tab: 'comidas' | 'bebidas') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeTab,
  setActiveTab
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060c18]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="./logo.png"
            alt="Tío Santorini Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(0,119,182,0.6)] group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-base lg:text-lg font-bold tracking-wider text-white group-hover:text-[#48cae4] transition-colors whitespace-nowrap">
                TÍO SANTORINI
              </span>
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#0077b6]/20 text-[#90e0ef] border border-[#0077b6]/40 hidden 2xl:inline-block whitespace-nowrap">
                Venezuela
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider hidden sm:block whitespace-nowrap">
              RESTAURANT & LOUNGE • SAN DIEGO
            </p>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => {
              setActiveTab('comidas');
              document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'comidas'
                ? 'bg-white/10 text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            Carta Gastronómica
          </button>

          <button
            onClick={() => {
              setActiveTab('bebidas');
              document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'bebidas'
                ? 'bg-[#0077b6]/30 text-[#90e0ef] border border-[#0077b6]/60 shadow-[0_0_15px_rgba(0,119,182,0.3)]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Wine className="w-3.5 h-3.5 text-[#48cae4] shrink-0" />
            <span>Coctelería & Bar</span>
          </button>

          <a
            href="#lounge"
            className="px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            Lounge Nocturno
          </a>

          <a
            href="#contacto"
            className="px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            Contacto
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick Schedule badge */}
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
            <span>11:00 AM – 3:00 AM</span>
          </div>

          {/* Quick Call */}
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs text-white whitespace-nowrap transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#48cae4] shrink-0" />
            <span>{BRAND.phoneDisplay}</span>
          </a>

          {/* Cart Trigger in Aegean Liquid Glass */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de pedido"
            className="relative flex items-center gap-2 px-4 py-2 rounded-full btn-glass-aegean text-white text-xs font-semibold whitespace-nowrap transition-all transform hover:scale-105 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#90e0ef] shrink-0" />
            <span className="hidden sm:inline">Mi Pedido</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-[#023e8a] font-bold text-[11px] flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="p-2 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white border border-white/10 lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#060c18]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col gap-2 mt-2 animate-fadeIn">
          <button
            onClick={() => {
              setActiveTab('comidas');
              setMobileMenuOpen(false);
              document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
              activeTab === 'comidas' ? 'bg-[#0077b6]/30 text-white' : 'text-slate-300'
            }`}
          >
            Carta Gastronómica (88 Platos)
          </button>
          <button
            onClick={() => {
              setActiveTab('bebidas');
              setMobileMenuOpen(false);
              document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between ${
              activeTab === 'bebidas' ? 'bg-[#0077b6]/30 text-white' : 'text-slate-300'
            }`}
          >
            <span>Coctelería & Bar (103 Bebidas)</span>
            <Wine className="w-4 h-4 text-[#48cae4]" />
          </button>
          <a
            href="#lounge"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
          >
            Lounge Nocturno & Botellas
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
          >
            Ubicación & Contacto
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.06] text-white text-xs font-medium"
            >
              <Phone className="w-4 h-4 text-[#48cae4]" />
              Llamar al {BRAND.phoneDisplay}
            </a>
            <div className="flex items-center justify-center gap-2 py-2 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#00b4d8]" />
              <span>Lunes a Domingo • 11:00 AM – 3:00 AM</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
