import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowDown, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  Fish, 
  Flame, 
  Layers, 
  Wine, 
  ChevronRight 
} from 'lucide-react';
import { BRAND } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
  onSelectPillar: (tab: 'comidas' | 'bebidas', category: string) => void;
}

const CULINARY_PILLARS = [
  {
    id: 'paellas-mariscos',
    tab: 'comidas' as const,
    category: 'paellas-mariscos',
    badge: 'Especialidad del Chef',
    title: 'Marisquería & Paellas',
    description: 'Arroz marinero azafranado con frutos del mar, pulpo a la gallega y mariscos frescos.',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=75&fm=webp',
    icon: Fish,
    cta: 'Ver Paellas & Mariscos',
    count: '35 Platos',
  },
  {
    id: 'cortes-fuertes',
    tab: 'comidas' as const,
    category: 'cortes-fuertes',
    badge: 'Brasas Vivas',
    title: 'Cortes al Carbón & Parrillas',
    description: 'Solomo de cuerito, lomito tierno, chuletas y parrillas completas para compartir.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=75&fm=webp',
    icon: Flame,
    cta: 'Ver Cortes & Parrillas',
    count: '17 Cortes',
  },
  {
    id: 'grill-shawarmas',
    tab: 'comidas' as const,
    category: 'grill-shawarmas',
    badge: 'Receta de Autor',
    title: 'Shawarmas & Cocina al Grill',
    description: 'Pan pita artesanal horneado, especias libanesas, salsa de ajo y hamburguesas al carbón.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=75&fm=webp',
    icon: Layers,
    cta: 'Ver Shawarmas & Grill',
    count: '21 Opciones',
  },
  {
    id: 'cocteles',
    tab: 'bebidas' as const,
    category: 'all',
    badge: 'Hasta las 3:00 AM',
    title: 'Coctelería & Lounge Nocturno',
    description: 'Daiquiris de fruta natural, whiskies premium, rones añejos y servicio de botellas VIP.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=75&fm=webp',
    icon: Wine,
    cta: 'Explorar Bar & Coctelería',
    count: '103 Bebidas',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onSelectPillar }) => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax scroll linking with Framer Motion & Lenis
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yHeroBg = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const yCulinaryBg = useTransform(scrollYProgress, [0, 1], ['-6%', '12%']);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.45], [1, 0.9]);

  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    'Hola Santorini Venezuela, deseo consultar disponibilidad y reservar una mesa / hacer un pedido.'
  )}`;

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* =========================================================================
          BACKGROUND CON PARALLAX (MOTION): Ambiance Culinario & Nocturno
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: yHeroBg }} className="relative w-full h-[125%] -top-[10%]">
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
            className="w-full h-full object-cover object-center brightness-75 scale-105"
          />
          {/* Capas de gradiente para legibilidad tipográfica impecable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/85 to-[#060c18]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c18]/92 via-[#060c18]/65 to-transparent" />
        </motion.div>

        {/* Resplandores atmosféricos Azul Egeo y Oro Cálido */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0077b6]/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[120px]" />
      </div>

      {/* =========================================================================
          CONTENIDO SUPERIOR DEL HERO: Título, Propuesta de Valor & Botones
         ========================================================================= */}
      <motion.div 
        style={{ opacity: opacityHeroText }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs text-[#90e0ef] uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,119,182,0.25)]">
            <img 
              src="./logo.png" 
              alt="Tío Santorini Logo" 
              className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(0,119,182,0.8)]" 
            />
            <span>Tío Santorini • San Diego, Carabobo</span>
          </div>

          {/* Headline Principal con Tipografía de Lujo */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            TÍO SANTORINI
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-slate-300 font-sans tracking-wide mt-2">
              Restaurant & Night Lounge
            </span>
          </h1>

          {/* Copy Culinario */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
            Una experiencia culinaria que embelesa tus sentidos. Paellas de mariscos, cortes al carbón, pastas artesanales, shawarmas al grill y coctelería de autor abierta hasta las 3:00 AM.
          </p>

          {/* Botones de Acción (Píldoras Lujosas) */}
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

          {/* Píldoras de Atributos de Confianza */}
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
      </motion.div>

      {/* =========================================================================
          TRANSICIÓN GASTRONÓMICA: "LOS PILARES DE NUESTRA COCINA" (FRAME MOTION)
          Elimina el vacío entre el Hero y Nuestra Carta con comida real de fondo
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-white/10">
        {/* Fondo Culinario con Parallax Secundario */}
        <div className="absolute inset-x-0 -top-12 -bottom-16 z-0 overflow-hidden pointer-events-none rounded-3xl opacity-30">
          <motion.div style={{ y: yCulinaryBg }} className="w-full h-[120%] relative">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=75&fm=webp"
              alt="Ambiente Culinario"
              className="w-full h-full object-cover filter blur-[2px] brightness-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-[#060c18]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060c18] via-[#060c18]/60 to-[#060c18]" />
          </motion.div>
        </div>

        {/* Encabezado del Showcase */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-[#90e0ef] mb-3 shadow-[0_0_15px_rgba(0,119,182,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-[#48cae4]" />
            <span>Experiencia Gastronómica • Pasión por el Fuego y el Mar</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Los Pilares de Nuestra Cocina
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 max-w-xl mx-auto">
            Explora las especialidades de la casa con fotografías reales y acceso directo a cada sección de la carta.
          </p>
        </div>

        {/* Grid de 4 Pilares con Tarjetas Interactivas Framer Motion */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CULINARY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => onSelectPillar(pillar.tab, pillar.category)}
                className="group relative rounded-2xl overflow-hidden bg-[#0c1424]/85 backdrop-blur-xl border border-white/10 hover:border-[#0077b6]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(0,119,182,0.3)] flex flex-col cursor-pointer"
              >
                {/* Fotografía 16:10 Nítida con Zoom Suave */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover brightness-90 group-hover:scale-108 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1424] via-[#0c1424]/30 to-transparent" />
                  
                  {/* Badge de Autor Top Left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#d4af37]/25 backdrop-blur-md border border-[#d4af37]/50 text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                    {pillar.badge}
                  </div>

                  {/* Conteo de Ítems Top Right */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-200">
                    {pillar.count}
                  </div>
                </div>

                {/* Cuerpo Editorial de la Tarjeta */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 text-[#48cae4]">
                      <Icon className="w-4 h-4 text-[#90e0ef] shrink-0" />
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#90e0ef] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-4 line-clamp-2">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Botón de Entrada Rápida con Efecto Cristal */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#90e0ef] group-hover:text-white transition-colors">
                    <span>{pillar.cta}</span>
                    <div className="w-6 h-6 rounded-full bg-white/[0.08] group-hover:bg-[#0077b6] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-[0_2px_8px_rgba(0,119,182,0.4)]">
                      <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
