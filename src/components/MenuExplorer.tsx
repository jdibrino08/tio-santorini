import React, { useState, useMemo, useRef } from 'react';
import { 
  Search, 
  Utensils, 
  Wine, 
  Plus, 
  Minus, 
  Check, 
  Sparkles, 
  Flame, 
  Fish, 
  Pizza, 
  Users, 
  Tag, 
  Layers, 
  Soup, 
  GlassWater, 
  Beer, 
  Coffee, 
  Award,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { COMIDAS, BEBIDAS, FOOD_SECTIONS, DRINK_SECTIONS } from '../data/menuData';
import type { MenuItem } from '../data/menuData';
import type { BcvRateState } from '../hooks/useBcvRate';
import { formatVes } from '../hooks/useBcvRate';
import { GlassText } from './GlassText';
import { getMenuItemImage } from '../data/foodImages';

interface MenuExplorerProps {
  activeTab: 'comidas' | 'bebidas';
  setActiveTab: (tab: 'comidas' | 'bebidas') => void;
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
  cart: { [itemId: string]: number };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onOpenCart: () => void;
  onOpenCustomizer: (item: MenuItem, isEditingExisting?: boolean) => void;
  bcv: BcvRateState;
}

const SIGNATURE_FOOD_IDS = ['c-21', 'c-38', 'c-26', 'c-49', 'c-61', 'c-66'];
const SIGNATURE_DRINK_IDS = ['b-1', 'b-6', 'b-22', 'b-25', 'b-60', 'b-70'];

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Soup: <Soup className="w-3.5 h-3.5" />,
  Fish: <Fish className="w-3.5 h-3.5" />,
  Utensils: <Utensils className="w-3.5 h-3.5" />,
  Flame: <Flame className="w-3.5 h-3.5" />,
  Users: <Users className="w-3.5 h-3.5" />,
  Pizza: <Pizza className="w-3.5 h-3.5" />,
  Layers: <Layers className="w-3.5 h-3.5" />,
  Tag: <Tag className="w-3.5 h-3.5" />,
  Wine: <Wine className="w-3.5 h-3.5" />,
  GlassWater: <GlassWater className="w-3.5 h-3.5" />,
  Award: <Award className="w-3.5 h-3.5" />,
  Beer: <Beer className="w-3.5 h-3.5" />,
  Coffee: <Coffee className="w-3.5 h-3.5" />,
};

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  activeTab,
  setActiveTab,
  selectedCategory: controlledCategory,
  setSelectedCategory: setControlledCategory,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenCart,
  onOpenCustomizer,
  bcv,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const selectedCategory = controlledCategory ?? internalCategory;
  const setSelectedCategory = setControlledCategory ?? setInternalCategory;
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentItems = activeTab === 'comidas' ? COMIDAS : BEBIDAS;
  const currentSections = activeTab === 'comidas' ? FOOD_SECTIONS : DRINK_SECTIONS;

  // Signature items for the top "Los Imperdibles del Tío" carousel
  const signatureItems = useMemo(() => {
    const ids = activeTab === 'comidas' ? SIGNATURE_FOOD_IDS : SIGNATURE_DRINK_IDS;
    return ids
      .map((id) => currentItems.find((item) => item.id === id))
      .filter((item): item is MenuItem => Boolean(item));
  }, [activeTab, currentItems]);

  // Filter items
  const filteredItems = useMemo(() => {
    return currentItems.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.itemNumber.toString() === searchQuery.trim() ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [currentItems, searchQuery, selectedCategory]);

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const isEditableItem = (item: MenuItem) => item.section === 'comidas' || Boolean(item.options);

  const handleItemAddClick = (item: MenuItem) => {
    if (isEditableItem(item)) {
      onOpenCustomizer(item, false);
    } else {
      onAddToCart(item);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === 'left' ? -340 : 340;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="menu-section" className="pt-6 sm:pt-12 pb-16 sm:pb-24 relative bg-[#060c18] overflow-hidden w-full max-w-full">
      {/* Decorative smooth liquid glass glow (Zero GPU blur overhead) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-[radial-gradient(ellipse_at_top,rgba(0,119,182,0.15)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[850px] h-[350px] bg-[radial-gradient(circle,rgba(0,119,182,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Mode Switcher */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#90e0ef] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#48cae4]" />
            <span>191 Opciones • Precios Transparentes en USD y Tasa BCV</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase font-display">
            <GlassText variant="crystal">NUESTRA CARTA</GlassText>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Gastronomía mediterránea, mariscos frescos, cortes al carbón y coctelería hasta las 3:00 AM.
          </p>

          {/* Big Macro Tabs (100% responsivo y sin saltos de línea en celular) */}
          <div className="mt-6 sm:mt-8 inline-flex max-w-full p-1 sm:p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => {
                setActiveTab('comidas');
                setSelectedCategory('all');
              }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'comidas'
                  ? 'bg-gradient-to-r from-white to-slate-200 text-[#060c18] shadow-[0_4px_20px_rgba(255,255,255,0.2)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                <span className="hidden sm:inline">Carta Gastronómica</span>
                <span className="sm:hidden">Comidas</span> (88)
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('bebidas');
                setSelectedCategory('all');
              }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bebidas'
                  ? 'btn-glass-aegean text-white shadow-[0_4px_20px_rgba(0,119,182,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#90e0ef] shrink-0" />
              <span>
                <span className="hidden sm:inline">Bar & Coctelería</span>
                <span className="sm:hidden">Bar & Tragos</span> (103)
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================================
            MEJORA #2: CARRUSEL SUPERIOR "LOS IMPERDIBLES DEL TÍO" (PLATOS INSIGNIA)
           ===================================================================== */}
        {searchQuery === '' && selectedCategory === 'all' && signatureItems.length > 0 && (
          <div className="mb-12">
            {/* Carousel Header */}
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-amber-300/90 mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {activeTab === 'comidas' ? 'Selección del Chef • Los Más Pedidos' : 'Selección de Barra • Favoritos Nocturnos'}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeTab === 'comidas' ? 'Los Imperdibles del Tío' : 'Insignias de la Barra'}
                </h3>
              </div>

              {/* Desktop Carousel Arrows */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Desplazar recomendados a la izquierda"
                  className="w-9 h-9 rounded-full glass-pill hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Desplazar recomendados a la derecha"
                  className="w-9 h-9 rounded-full glass-pill hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Scroll Rail */}
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {signatureItems.map((item) => {
                const countInCart = cart[item.id] || 0;
                const vesPrice = formatVes(item.price, bcv.rate);
                const photoUrl = item.image || getMenuItemImage(item.itemNumber, item.section, item.category);

                return (
                  <div
                    key={`sig-${item.id}`}
                    className={`group w-[285px] sm:w-[325px] shrink-0 snap-start rounded-3xl overflow-hidden flex flex-col bg-[#081020] border transition-all duration-300 ${
                      countInCart > 0
                        ? 'border-[#48cae4]/70 shadow-[0_0_28px_rgba(0,180,216,0.3)] ring-1 ring-[#48cae4]/40'
                        : 'border-amber-400/25 hover:border-amber-300/55 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(212,175,55,0.16)]'
                    }`}
                  >
                    {/* Top Half: 100% Crisp Unblurred Signature Photography */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#050a14]">
                      <img
                        src={photoUrl}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 split-photo-fade pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full badge-signature-gold flex items-center gap-1 tracking-wide uppercase">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          <span>{activeTab === 'comidas' ? 'Insignia' : 'Top Barra'}</span>
                        </span>

                        <div className="text-right px-2.5 py-1 rounded-xl glass-pill-photo">
                          <div className="font-mono font-extrabold text-sm sm:text-base text-white leading-tight">
                            ${item.price.toFixed(2)}
                          </div>
                          <div className="min-h-[14px]">
                            {vesPrice && (
                              <div className="font-mono text-[10px] text-emerald-400 font-bold">
                                {vesPrice}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Subtle Number Badge anchored bottom-left of image */}
                      <span className="absolute bottom-2.5 left-3.5 font-mono text-[11px] font-bold px-2 py-0.5 rounded-md glass-pill-photo text-[#90e0ef]">
                        #{item.itemNumber}
                      </span>
                    </div>

                    {/* Bottom Half: Clean Editorial Details & Liquid Glass Action */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#081020]">
                      <div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug line-clamp-1">
                          {item.name}
                        </h4>
                        {item.description && (
                          <p className="text-xs text-slate-300/90 font-light mt-1.5 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.08]">
                        {countInCart > 0 ? (
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 glass-pill rounded-full p-1 border border-[#48cae4]/40">
                              <button
                                onClick={() => onRemoveFromCart(item.id)}
                                aria-label={`Disminuir cantidad de ${item.name}`}
                                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-xs font-bold text-white px-2">
                                {countInCart}
                              </span>
                              <button
                                onClick={() => onAddToCart(item)}
                                aria-label={`Aumentar cantidad de ${item.name}`}
                                className="w-7 h-7 rounded-full btn-glass-aegean flex items-center justify-center cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5 text-white" />
                              </button>
                            </div>
                            {isEditableItem(item) ? (
                              <button
                                type="button"
                                onClick={() => onOpenCustomizer(item, true)}
                                className="text-xs font-semibold text-[#90e0ef] hover:text-white px-3 py-1.5 rounded-xl btn-glass-active flex items-center gap-1.5 cursor-pointer"
                              >
                                <SlidersHorizontal className="w-3 h-3 text-[#48cae4]" />
                                <span>Editar</span>
                              </button>
                            ) : (
                              <span className="text-xs font-bold text-[#90e0ef] flex items-center gap-1">
                                <Check className="w-3.5 h-3.5 text-[#48cae4]" />
                                ${(item.price * countInCart).toFixed(2)}
                              </span>
                            )}
                          </div>
                        ) : (
                          <button
                            onClick={() => handleItemAddClick(item)}
                            className="w-full py-2.5 px-4 rounded-2xl btn-glass-aegean text-xs font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                          >
                            {isEditableItem(item) ? (
                              <SlidersHorizontal className="w-3.5 h-3.5 text-[#90e0ef]" />
                            ) : (
                              <Plus className="w-3.5 h-3.5 text-[#90e0ef]" />
                            )}
                            <span>{isEditableItem(item) ? 'Personalizar & Pedir' : 'Agregar al Pedido'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Control Bar: Search + Category Pills + View Switcher */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={activeTab === 'comidas' ? "Buscar por plato, número (#21) o ingredientes..." : "Buscar por cóctel, whisky, ron o jugo..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0077b6] focus:bg-white/[0.08] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* View Mode Toggle & Active Item Count */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-xs text-slate-400 font-mono">
                {filteredItems.length} opciones encontradas
              </span>

              {/* View Switcher: Grid vs Compact List */}
              <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white/15 text-white shadow-sm'
                      : 'hover:text-white'
                  }`}
                  title="Vista Cuadrícula"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tarjetas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('compact')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    viewMode === 'compact'
                      ? 'bg-white/15 text-white shadow-sm'
                      : 'hover:text-white'
                  }`}
                  title="Vista Carta Compacta (Lista de Restaurante)"
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Carta Compacta</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Chips Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'btn-glass-aegean text-white font-semibold'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              Todos ({currentItems.length})
            </button>

            {currentSections.map((sec) => {
              const count = currentItems.filter((i) => i.category === sec.id).length;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedCategory(sec.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === sec.id
                      ? 'btn-glass-aegean text-white font-semibold'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {ICON_MAP[sec.icon] || <Sparkles className="w-3.5 h-3.5" />}
                  <span>{sec.label}</span>
                  <span className="text-[10px] opacity-75 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Banner if specific category selected */}
        {selectedCategory !== 'all' && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#0077b6]/20 via-[#0077b6]/10 to-transparent border border-[#0077b6]/30 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#48cae4] font-semibold">
                Categoría
              </p>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {currentSections.find((s) => s.id === selectedCategory)?.label}
              </h3>
              <p className="text-xs text-slate-300/90 italic mt-0.5">
                {currentSections.find((s) => s.id === selectedCategory)?.motto}
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs text-[#90e0ef] hover:underline cursor-pointer"
            >
              Ver todas
            </button>
          </div>
        )}

        {/* Floating Quick Action when items in cart */}
        {totalCartCount > 0 && (
          <div className="mb-6 flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            <span className="text-xs text-slate-300">
              Tienes <strong>{totalCartCount}</strong> ítems en tu pedido
            </span>
            <button
              onClick={onOpenCart}
              className="text-xs text-[#48cae4] hover:text-[#90e0ef] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Ver carrito y ordenar por WhatsApp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* RENDERING MODE 1: COMPACT LIST WITH CRISP SQUARE PHOTO THUMBNAIL */}
        {viewMode === 'compact' ? (
          <div className="space-y-3">
            {filteredItems.map((item) => {
              const countInCart = cart[item.id] || 0;
              const vesPrice = formatVes(item.price, bcv.rate);
              const photoUrl = item.image || getMenuItemImage(item.itemNumber, item.section, item.category);

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-2xl p-3 sm:p-3.5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 border ${
                    countInCart > 0
                      ? 'bg-[#0077b6]/15 border-[#48cae4]/60 shadow-[0_0_20px_rgba(0,119,182,0.22)]'
                      : 'bg-[#081020] hover:bg-[#0b162c] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {/* Left: Crisp Unblurred Thumbnail + Details */}
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#050a14]">
                      <img
                        src={photoUrl}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded bg-white/[0.08] text-[#90e0ef] border border-white/10">
                          #{item.itemNumber}
                        </span>
                        <h4 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-[#48cae4] transition-colors">
                          {item.name}
                        </h4>
                        {item.highlight && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full badge-signature-gold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                            Destacado
                          </span>
                        )}
                        {item.options && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full btn-glass-active text-[#90e0ef] flex items-center gap-1">
                            <SlidersHorizontal className="w-2.5 h-2.5" />
                            Personalizable
                          </span>
                        )}
                      </div>

                      {item.description && (
                        <p className="text-xs text-slate-300/85 font-light mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Prices & Action */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                    <div className="text-left sm:text-right">
                      <div className="font-mono font-bold text-base sm:text-lg text-white">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="min-h-[14px]">
                        {vesPrice && (
                          <div className="font-mono text-[10px] text-emerald-400 font-semibold">
                            {vesPrice}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    {countInCart > 0 ? (
                      <div className="flex items-center gap-2">
                        {isEditableItem(item) && (
                          <button
                            type="button"
                            onClick={() => onOpenCustomizer(item, true)}
                            aria-label={`Editar opciones de ${item.name}`}
                            className="px-2.5 py-1.5 rounded-full btn-glass-active text-[11px] font-semibold text-[#90e0ef] hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            <SlidersHorizontal className="w-3 h-3" />
                            <span>Editar</span>
                          </button>
                        )}
                        <div className="flex items-center gap-1.5 glass-pill rounded-full p-1 border border-[#48cae4]/30">
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            aria-label={`Disminuir cantidad de ${item.name}`}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold text-white px-1.5">
                            {countInCart}
                          </span>
                          <button
                            onClick={() => onAddToCart(item)}
                            aria-label={`Aumentar cantidad de ${item.name}`}
                            className="w-8 h-8 rounded-full btn-glass-aegean text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleItemAddClick(item)}
                        className="py-2 px-4 rounded-xl btn-glass-aegean active:scale-95 text-white text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        {isEditableItem(item) ? (
                          <SlidersHorizontal className="w-3.5 h-3.5 text-[#90e0ef]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-[#90e0ef]" />
                        )}
                        <span>{isEditableItem(item) ? 'Personalizar' : 'Agregar'}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* =====================================================================
             MEJORA #1: TARJETAS FORMATO SPLIT (FOTO NÍTIDA ARRIBA + DATOS ABAJO)
             ===================================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const countInCart = cart[item.id] || 0;
              const vesPrice = formatVes(item.price, bcv.rate);
              const photoUrl = item.image || getMenuItemImage(item.itemNumber, item.section, item.category);

              return (
                <div
                  key={item.id}
                  className={`group rounded-3xl overflow-hidden flex flex-col bg-[#081020] border transition-all duration-300 ${
                    countInCart > 0
                      ? 'border-[#48cae4]/70 shadow-[0_0_30px_rgba(0,180,216,0.28)] ring-1 ring-[#48cae4]/40'
                      : 'border-white/[0.12] hover:border-[#48cae4]/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,119,182,0.2)]'
                  }`}
                >
                  {/* TOP HALF: 100% Crisp, Unblurred, Mouthwatering Food Photo */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#050a14]">
                    <img
                      src={photoUrl}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Seamless bottom-only melt into card body */}
                    <div className="absolute inset-0 split-photo-fade pointer-events-none" />

                    {/* Top-Left: Number & Highlight Badges */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg glass-pill-photo text-[#90e0ef]">
                        #{item.itemNumber}
                      </span>
                      {item.highlight && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full badge-signature-gold flex items-center gap-1 tracking-wide">
                          <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                          Destacado
                        </span>
                      )}
                    </div>

                    {/* Top-Right: Frosted Dual Price Badge (USD + BCV) */}
                    <div className="absolute top-3.5 right-3.5 text-right px-3 py-1.5 rounded-xl glass-pill-photo">
                      <div className="font-mono font-extrabold text-base sm:text-lg text-white leading-tight">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="min-h-[14px]">
                        {vesPrice && (
                          <div className="font-mono text-[10px] text-emerald-400 font-bold">
                            {vesPrice}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM HALF: Clean Editorial Details & Liquid Glass Action */}
                  <div className="p-5 flex-1 flex flex-col justify-between bg-[#081020]">
                    <div>
                      {/* Dish Title */}
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#48cae4] transition-colors leading-snug">
                        {item.name}
                      </h4>

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs text-slate-300/90 font-light mt-2 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      )}

                      {/* Options & Tags */}
                      {(item.options || (item.tags && item.tags.length > 0)) && (
                        <div className="flex flex-wrap gap-1.5 mt-3.5">
                          {item.options && (
                            <span className="text-[10px] px-2.5 py-1 rounded-full btn-glass-active text-[#90e0ef] flex items-center gap-1 font-semibold">
                              <SlidersHorizontal className="w-2.5 h-2.5" />
                              Personalizable
                            </span>
                          )}
                          {item.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Liquid Glass CTA or Stepper */}
                    <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                      {countInCart > 0 ? (
                        <div className="flex items-center gap-2.5 w-full justify-between">
                          <div className="flex items-center gap-1.5 glass-pill rounded-full p-1 border border-[#48cae4]/40 shadow-md">
                            <button
                              onClick={() => onRemoveFromCart(item.id)}
                              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                              aria-label={`Disminuir cantidad de ${item.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono text-xs font-bold text-white px-2">
                              {countInCart}
                            </span>
                            <button
                              onClick={() => onAddToCart(item)}
                              className="w-8 h-8 rounded-full btn-glass-aegean flex items-center justify-center cursor-pointer"
                              aria-label={`Aumentar cantidad de ${item.name}`}
                            >
                              <Plus className="w-3.5 h-3.5 text-white" />
                            </button>
                          </div>

                          {isEditableItem(item) ? (
                            <button
                              type="button"
                              onClick={() => onOpenCustomizer(item, true)}
                              className="flex items-center gap-1.5 text-xs text-[#90e0ef] hover:text-white font-bold px-3 py-2 rounded-xl btn-glass-active transition-all cursor-pointer"
                            >
                              <SlidersHorizontal className="w-3.5 h-3.5 text-[#48cae4]" />
                              <span>Editar (${(item.price * countInCart).toFixed(2)})</span>
                            </button>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs text-[#90e0ef] font-bold px-3 py-1.5 rounded-xl btn-glass-active">
                              <Check className="w-3.5 h-3.5 text-[#48cae4]" />
                              <span>En pedido (${(item.price * countInCart).toFixed(2)})</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleItemAddClick(item)}
                          className="w-full py-3 px-4 rounded-2xl btn-glass-aegean text-xs font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                        >
                          {isEditableItem(item) ? (
                            <SlidersHorizontal className="w-3.5 h-3.5 text-[#90e0ef]" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 text-[#90e0ef]" />
                          )}
                          <span>{isEditableItem(item) ? 'Personalizar & Agregar' : 'Agregar al Pedido'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl glass-panel max-w-md mx-auto my-12">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No encontramos resultados</h4>
            <p className="text-xs text-slate-400 mb-4">
              No hay coincidencias para "{searchQuery}". Intenta con otro término o explora las categorías.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2 rounded-full bg-white/[0.1] text-white text-xs font-medium hover:bg-white/[0.2] transition-colors cursor-pointer"
            >
              Reiniciar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
