export interface MenuItem {
  id: string;
  itemNumber: number;
  name: string;
  category: string;
  section: 'comidas' | 'bebidas';
  description?: string;
  price: number;
  highlight?: boolean;
  tags?: string[];
  image?: string;
  options?: {
    type: 'contornos' | 'proteinas' | 'frutas';
    title: string;
    maxSelect: number;
    choices: string[];
  };
}

export const CONTORNOS_CHOICES = [
  'Papas Fritas',
  'Papas al Vapor',
  'Puré de Papas',
  'Vegetales Salteados',
  'Ensalada Mixta',
  'Ensalada César',
];

export const PROTEINAS_CHOICES = [
  'Pollo',
  'Pernil',
  'Carne de Res',
  'Falafel (Vegetariano)',
];

export const FRUTAS_CHOICES = [
  'Fresa Natural',
  'Parchita (Maracuyá)',
];

export interface BrandConfig {
  name: string;
  tagline: string;
  location: string;
  addressFull: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappNumber: string;
  instagram: string;
  instagramUrl: string;
  schedule: string;
  scheduleDays: string;
  scheduleHours: string;
}

export const BRAND: BrandConfig = {
  name: "Tío Santorini",
  tagline: "Experiencia Culinaria & Coctelería de Autor",
  location: "San Diego, Carabobo, Venezuela",
  addressFull: "San Diego, Estado Carabobo, Venezuela",
  phoneRaw: "04244463511",
  phoneDisplay: "(0424) 4463511",
  whatsappNumber: "584244463511",
  instagram: "@Santorini_venezuela",
  instagramUrl: "https://instagram.com/Santorini_venezuela",
  schedule: "Lunes a Domingo • 11:00 AM – 3:00 AM",
  scheduleDays: "Lunes a Domingo",
  scheduleHours: "11:00 AM / 3:00 AM",
};

export const FOOD_SECTIONS = [
  { id: 'entradas', label: 'Entradas & Tapas', icon: 'Sparkles', motto: 'PARA DEGUSTAR — Una experiencia culinaria que embelesa tus sentidos' },
  { id: 'ensaladas-sopas', label: 'Ensaladas & Cremas', icon: 'Soup', motto: 'Frescura y tradición marina en cada cucharada' },
  { id: 'paellas-mariscos', label: 'Paellas & Mariscos', icon: 'Fish', motto: 'EXPERIMENTA EL SABOR — Hecho con amor y solo para ti' },
  { id: 'pastas', label: 'Pastas de la Casa', icon: 'Utensils', motto: 'Auténticas recetas artesanales' },
  { id: 'cortes-fuertes', label: 'Cortes & Especialidades', icon: 'Flame', motto: 'ESPECIALIDAD DE LA CASA — Una buena comida se perfecciona con amor' },
  { id: 'parrillas', label: 'Parrillas para Compartir', icon: 'Users', motto: 'PARA COMPARTIR — Todo sabe mejor en buena compañía' },
  { id: 'pizzas', label: 'Pizzas Artesanales', icon: 'Pizza', motto: 'Horno y masa fresca con ingredientes premium' },
  { id: 'grill-shawarmas', label: 'Al Grill & Shawarmas', icon: 'Layers', motto: 'AL GRILL — Un viaje gastronómico sin salir de la mesa' },
  { id: 'burgers-promos', label: 'Burgers, Pepitos & Promos', icon: 'Tag', motto: 'Promociones irresistibles y combos completos' },
];

export const DRINK_SECTIONS = [
  { id: 'cocteles', label: 'Cócteles de Autor', icon: 'Wine', motto: 'COCTELES — Un buen cóctel no solo se bebe, se descubre sorbo a sorbo' },
  { id: 'whisky-ron', label: 'Tragos de Whisky & Ron', icon: 'GlassWater', motto: 'Elegancia destilada para los sentidos' },
  { id: 'vinos-licores', label: 'Copas de Vino & Digestivos', icon: 'Sparkles', motto: 'Selección de uvas y digestivos europeos' },
  { id: 'servicios-botellas', label: 'Servicios de Botella', icon: 'Award', motto: 'SERVICIOS PARA COMPARTIR — Un sorbo de magia destilada' },
  { id: 'shots-cervezas', label: 'Shots, Micheladas & Descorche', icon: 'Beer', motto: 'El mejor ambiente para brindar' },
  { id: 'sin-alcohol', label: 'Jugos, Smoothies & Cafés', icon: 'Coffee', motto: 'El buen sabor no necesita grados de alcohol para destacar' },
];

export const COMIDAS: MenuItem[] = [
  // Entradas
  {
    id: 'c-1',
    itemNumber: 1,
    name: "Buschetas Mixtas",
    category: "entradas",
    section: "comidas",
    description: "Pan rústico tostado con selección de tomates marinados, albahaca fresca, queso y toques de autor.",
    price: 20.00,
    tags: ["Entrada", "Tapas"],
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'c-2',
    itemNumber: 2,
    name: "Queso a la Plancha",
    category: "entradas",
    section: "comidas",
    description: "Corte grueso de queso blanco llanero dorado a la plancha con corteza crujiente.",
    price: 21.00,
    tags: ["Favorito", "Tradición"]
  },
  {
    id: 'c-3',
    itemNumber: 3,
    name: "Arepitas Rellenas",
    category: "entradas",
    section: "comidas",
    description: "Cesta de arepitas doradas y crocantes rellenas de guisos especiales de la casa.",
    price: 21.00,
    tags: ["Para picar"]
  },
  {
    id: 'c-4',
    itemNumber: 4,
    name: "Arepitas con Natilla",
    category: "entradas",
    section: "comidas",
    description: "Arepitas calientes acompañadas de natilla criolla fresca y cremosa.",
    price: 21.00,
    tags: ["Clásico criollo"]
  },
  {
    id: 'c-5',
    itemNumber: 5,
    name: "Dedos de Mozzarella",
    category: "entradas",
    section: "comidas",
    description: "Bastones de queso mozzarella apanados dorados con salsa marinara.",
    price: 6.00,
    tags: ["Snack"]
  },
  {
    id: 'c-6',
    itemNumber: 6,
    name: "Carpaccio de Lomito",
    category: "entradas",
    section: "comidas",
    description: "Finas láminas de lomito fresco, alcaparras, virutas de parmesano y aderezo balsámico.",
    price: 6.00,
    highlight: true,
    tags: ["Gourmet", "Recomendado"],
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=75&fm=webp"
  },
  {
    id: 'c-7',
    itemNumber: 7,
    name: "Coctel de Camarones",
    category: "entradas",
    section: "comidas",
    description: "Camarones frescos seleccionados en salsa golf especial con toques cítricos.",
    price: 5.00,
    tags: ["Marino"]
  },
  {
    id: 'c-8',
    itemNumber: 8,
    name: "Salpicón de Mariscos",
    category: "entradas",
    section: "comidas",
    description: "Fresca mezcla de frutos del mar marinados con vinagreta cítrica y pimentones.",
    price: 6.00,
    tags: ["Marino", "Refrescante"]
  },
  {
    id: 'c-9',
    itemNumber: 9,
    name: "Ración de Tequeños",
    category: "entradas",
    section: "comidas",
    description: "Los tradicionales tequeños de queso blanco llanero con masa hojaldrada crujiente.",
    price: 6.00,
    tags: ["Imperdible"]
  },
  {
    id: 'c-10',
    itemNumber: 10,
    name: "Ración de Empanaditas",
    category: "entradas",
    section: "comidas",
    description: "Empanaditas surtidas doraditas al punto con salsas tártara y picante de la casa.",
    price: 9.50,
    tags: ["Surtido"]
  },
  {
    id: 'c-11',
    itemNumber: 11,
    name: "Chupe de Camarones",
    category: "entradas",
    section: "comidas",
    description: "Crema de guacuco, camarones, papas, maíz en grano y queso blanco.",
    price: 14.00,
    highlight: true,
    tags: ["Especialidad"]
  },
  {
    id: 'c-12',
    itemNumber: 12,
    name: "Carpaccio de Salmón",
    category: "entradas",
    section: "comidas",
    description: "Láminas finas de salmón rosado con aceite de oliva virgen extra, eneldo y alcaparras.",
    price: 30.00,
    tags: ["Premium", "Marino"]
  },

  // Ensaladas & Sopas
  {
    id: 'c-13',
    itemNumber: 13,
    name: "César Tradicional",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Lechuga romana fresca, tocineta crocante, crotones artesanales, queso parmesano y aderezo césar de la casa.",
    price: 21.00,
    tags: ["Ensalada"]
  },
  {
    id: 'c-14',
    itemNumber: 14,
    name: "César con Pollo",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Lechuga, tocineta, crotones, queso parmesano, pechuga de pollo a la plancha y aderezo césar.",
    price: 21.00,
    tags: ["Ensalada", "Proteína"]
  },
  {
    id: 'c-15',
    itemNumber: 15,
    name: "César con Camarones",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Lechuga, tocineta, crotones, queso parmesano, camarones salteados y aderezo césar.",
    price: 20.00,
    highlight: true,
    tags: ["Ensalada", "Marino"]
  },
  {
    id: 'c-16',
    itemNumber: 16,
    name: "Ensalada Española",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Lechuga, tomate, jamón, queso, aceitunas negras y camarones frescos.",
    price: 9.50,
    tags: ["Mediterráneo"]
  },
  {
    id: 'c-17',
    itemNumber: 17,
    name: "Viejo Pescador",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Calamares tiernos, pulpo y camarones en suave crema de leche aromatizada.",
    price: 12.00,
    tags: ["Crema marina"]
  },
  {
    id: 'c-18',
    itemNumber: 18,
    name: "Sopa de Marisco",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Consomé de pescado concentrado con calamares, pulpo, jaibas, mejillones y camarones.",
    price: 15.50,
    highlight: true,
    tags: ["Marino", "Reconstituyente"]
  },
  {
    id: 'c-19',
    itemNumber: 19,
    name: "Asopado de Marisco",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Arroz caldoso en consomé de pescado con calamares, pulpo y camarones al punto.",
    price: 18.50,
    tags: ["Plato caliente"]
  },
  {
    id: 'c-20',
    itemNumber: 20,
    name: "Mixta Tradicional",
    category: "ensaladas-sopas",
    section: "comidas",
    description: "Tomate fresco, pepino, cebolla, lechuga crujiente y láminas de aguacate.",
    price: 12.00,
    tags: ["Vegetariano", "Fresco"]
  },

  // Paellas y Pescados/Mariscos
  {
    id: 'c-21',
    itemNumber: 21,
    name: "Paella de Mariscos (Para 2 Personas)",
    category: "paellas-mariscos",
    section: "comidas",
    description: "Arroz amarillo azafranado con pulpo, calamares, camarones, jaibas, mejillones y conchas españolas.",
    price: 21.00,
    highlight: true,
    tags: ["Para 2", "Plato Estrella"],
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'c-22',
    itemNumber: 22,
    name: "Paella Valenciana (Para 2 Personas)",
    category: "paellas-mariscos",
    section: "comidas",
    description: "Arroz amarillo, pollo, pulpa de cerdo, calamares, camarones, pulpo, jaibas, mejillones y conchas españolas.",
    price: 25.00,
    highlight: true,
    tags: ["Para 2", "Especial"]
  },
  {
    id: 'c-23',
    itemNumber: 23,
    name: "Fideuá de Mariscos (Para 2 Personas)",
    category: "paellas-mariscos",
    section: "comidas",
    description: "Linguini corto en salsa de mariscos con calamares, camarones, pulpo, jaibas, mejillones y conchas españolas.",
    price: 25.00,
    tags: ["Para 2", "Tradición Española"]
  },
  {
    id: 'c-24',
    itemNumber: 24,
    name: "Churrascos de Róbalo al Gusto",
    category: "paellas-mariscos",
    section: "comidas",
    description: "280gr de pesca blanca de róbalo con salsa de su elección y 2 contornos a elegir.",
    price: 25.00,
    tags: ["Pesca del día", "Personalizable"],
    options: {
      type: 'contornos',
      title: 'Elige 2 Contornos',
      maxSelect: 2,
      choices: CONTORNOS_CHOICES,
    }
  },
  {
    id: 'c-25',
    itemNumber: 25,
    name: "Caldereta de Pescados y Mariscos (Para 2)",
    category: "paellas-mariscos",
    section: "comidas",
    description: "Calamares, camarones, mejillones, pulpo, salsa napolitana, pasta de tomate y consomé de pescado, acompañado de papas al vapor.",
    price: 12.00,
    tags: ["Para 2", "Guiso Marinero"]
  },
  {
    id: 'c-26',
    itemNumber: 26,
    name: "Pulpo a la Gallega",
    category: "paellas-mariscos",
    section: "comidas",
    description: "Pulpo fileteado tierno acompañado de papas al vapor, pimentón español ahumado y aceite de oliva virgen extra.",
    price: 14.00,
    highlight: true,
    tags: ["Tapa Española", "Recomendado"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=75&fm=webp"
  },
  {
    id: 'c-27',
    itemNumber: 27,
    name: "Trío Marino",
    category: "paellas-mariscos",
    section: "comidas",
    description: "1 Cazuela de pulpo, 1 cazuela de calamares al ajillo, 1 cazuela de camarones a la vinagreta, acompañado con papas chips, casabito, tostones y aros de cebolla.",
    price: 43.00,
    highlight: true,
    tags: ["Degustación Marina", "Para compartir"]
  },
  {
    id: 'c-28',
    itemNumber: 28,
    name: "Pulpo Grillado",
    category: "paellas-mariscos",
    section: "comidas",
    description: "Pulpo entero grillado a la plancha acompañado de papas al vapor, pimentón español y aceite de oliva.",
    price: 13.00,
    tags: ["A la brasa", "Especial"]
  },

  // Pastas
  {
    id: 'c-29',
    itemNumber: 29,
    name: "Pasta 4 Quesos con Camarones",
    category: "pastas",
    section: "comidas",
    description: "Linguinis en salsa blanca cremosa con camarones y 4 quesos fundidos (pecorino, mozzarella, parmesano y gouda).",
    price: 50.00,
    highlight: true,
    tags: ["Pasta Gourmet"]
  },
  {
    id: 'c-30',
    itemNumber: 30,
    name: "Linguini Frutos del Mar",
    category: "pastas",
    section: "comidas",
    description: "Linguinis en salsa blanca con camarones, calamares, pulpo y un toque exótico de piña caramelizada.",
    price: 43.00,
    tags: ["Marino"]
  },
  {
    id: 'c-31',
    itemNumber: 31,
    name: "Linguini Frank Sinatra",
    category: "pastas",
    section: "comidas",
    description: "Linguinis en salsa blanca cremosa con tiras de lomito tierno y camarones salteados.",
    price: 35.00,
    highlight: true,
    tags: ["Clásico", "Mar y Tierra"]
  },
  {
    id: 'c-32',
    itemNumber: 32,
    name: "Pasta Marinera",
    category: "pastas",
    section: "comidas",
    description: "Linguinis en salsa roja pomodoro de la casa con mejillones, cangrejo, camarones, pulpo y calamares.",
    price: 40.00,
    tags: ["Marino"]
  },
  {
    id: 'c-33',
    itemNumber: 33,
    name: "Linguini Bolognesa",
    category: "pastas",
    section: "comidas",
    description: "Linguini en salsa bolognesa tradicional con carne seleccionada a fuego lento y queso parmesano.",
    price: 37.00,
    tags: ["Clásico"]
  },
  {
    id: 'c-34',
    itemNumber: 34,
    name: "Linguini Carbonara",
    category: "pastas",
    section: "comidas",
    description: "Linguini en salsa blanca con tocineta crocante y abundante queso parmesano recién rallado.",
    price: 40.00,
    tags: ["Clásico"]
  },
  {
    id: 'c-35',
    itemNumber: 35,
    name: "Pasticho Tradicional",
    category: "pastas",
    section: "comidas",
    description: "Capas de pasta con salsa bolognesa artesanal, bechamel sedosa, jamón, queso mozzarella y parmesano gratinado.",
    price: 40.00,
    highlight: true,
    tags: ["Favorito"]
  },

  // Cortes & Especialidades
  {
    id: 'c-36',
    itemNumber: 36,
    name: "Medallones de Lomito al Vino",
    category: "cortes-fuertes",
    section: "comidas",
    description: "2 Medallones de lomito sellados en salsa de vino tinto, crema de leche y demi-glace, con 2 contornos a elección.",
    price: 55.00,
    highlight: true,
    tags: ["Corte Premium", "Especialidad"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    options: {
      type: 'contornos',
      title: 'Elige 2 Contornos',
      maxSelect: 2,
      choices: CONTORNOS_CHOICES,
    }
  },
  {
    id: 'c-37',
    itemNumber: 37,
    name: "Estofado de Cordero",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Cordero estofado lentamente en su propio jugo acompañado de vegetales tiernos y papas al vapor.",
    price: 31.00,
    tags: ["Sabor Intenso"]
  },
  {
    id: 'c-38',
    itemNumber: 38,
    name: "Trío de Carnes Santorini",
    category: "cortes-fuertes",
    section: "comidas",
    description: "1 chorizo parrillero, 2 medallones de lomito, 2 medallones de pollo, 2 bistec de solomo, yuca cocida, queso a la plancha, salsa 4 quesos, salsa de champiñones y pico de gallo.",
    price: 21.00,
    highlight: true,
    tags: ["Plato Insignia", "Abundante"]
  },
  {
    id: 'c-39',
    itemNumber: 39,
    name: "Lomito a la Llanera",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Lomito en corte mariposa, queso a la plancha, chorizo y 2 contornos de su elección.",
    price: 21.00,
    tags: ["Brasa Criolla"]
  },
  {
    id: 'c-40',
    itemNumber: 40,
    name: "Punta Trasera (350 gr)",
    category: "cortes-fuertes",
    section: "comidas",
    description: "350 gramos de jugosa punta trasera asada al término deseado con 2 contornos a su elección.",
    price: 35.00,
    highlight: true,
    tags: ["Corte de Res"]
  },
  {
    id: 'c-41',
    itemNumber: 41,
    name: "Punta de Cerdo (350 gr)",
    category: "cortes-fuertes",
    section: "comidas",
    description: "350 gramos de corte seleccionado de cerdo a la plancha con 2 contornos a su elección.",
    price: 31.00,
    tags: ["Cerdo"]
  },
  {
    id: 'c-42',
    itemNumber: 42,
    name: "Churrasco de Solomo a la Criolla",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Solomo en corte mariposa acompañado de queso a la plancha, chorizo parrillero y 2 contornos a elección.",
    price: 30.00,
    tags: ["Brasa"]
  },
  {
    id: 'c-43',
    itemNumber: 43,
    name: "Lechón al Horno Pequeño (Bajo Pedido)",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Lechón entero pequeño horneado lentamente con piel crujiente y carne jugosa. Disponible únicamente bajo pedido previo.",
    price: 250.00,
    tags: ["Bajo Pedido", "Banquete"]
  },
  {
    id: 'c-44',
    itemNumber: 44,
    name: "Cartoccio de Lomito",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Lomito horneado en papillote con salsa de champiñones, jamón serrano y queso amarillo, servido con linguini a los 4 quesos.",
    price: 19.00,
    tags: ["Gourmet"]
  },
  {
    id: 'c-45',
    itemNumber: 45,
    name: "Suprema de Pollo a la Suiza",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Pechuga en salsa blanca, queso mozzarella, gratinado con queso parmesano, acompañado de 2 contornos de su elección.",
    price: 25.00,
    tags: ["Pollo"]
  },
  {
    id: 'c-46',
    itemNumber: 46,
    name: "Tiras de Lomito a la Mostaza",
    category: "cortes-fuertes",
    section: "comidas",
    description: "Tiras de lomito tierno salteadas en salsa cremosa de mostaza con 2 contornos a su elección.",
    price: 15.00,
    tags: ["Carne"]
  },

  // Parrillas para Compartir
  {
    id: 'c-47',
    itemNumber: 47,
    name: "Parrilla Mixta (Para 6 Personas)",
    category: "parrillas",
    section: "comidas",
    description: "Salteado generoso de lomito y pollo acompañado de papas fritas, queso a la plancha en tiras y ensalada mixta.",
    price: 50.00,
    highlight: true,
    tags: ["Para 6", "Parrillada"]
  },
  {
    id: 'c-48',
    itemNumber: 48,
    name: "Mini Parrilla Mixta",
    category: "parrillas",
    section: "comidas",
    description: "Versión personal con salteado de lomito y pollo, papas fritas y queso a la plancha.",
    price: 13.00,
    tags: ["Individual"]
  },
  {
    id: 'c-49',
    itemNumber: 49,
    name: "Parrilla Mar y Tierra (Para 6 Personas)",
    category: "parrillas",
    section: "comidas",
    description: "Pulpo, camarones, calamares, pollo y lomito salteado con pimentón y cebolla, acompañado de papas fritas y queso a la plancha.",
    price: 60.00,
    highlight: true,
    tags: ["Para 6", "Mar y Tierra"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=75&fm=webp"
  },
  {
    id: 'c-50',
    itemNumber: 50,
    name: "Mini Parrilla Mar y Tierra",
    category: "parrillas",
    section: "comidas",
    description: "Porción individual con pulpo, camarones, pollo, lomito, papas fritas y queso a la plancha.",
    price: 13.00,
    tags: ["Individual", "Mar y Tierra"]
  },
  {
    id: 'c-51',
    itemNumber: 51,
    name: "Parrilla de Pollo (Para 6 Personas)",
    category: "parrillas",
    section: "comidas",
    description: "Milanesa de pollo en cortes finos salteada con pimentón y cebolla dulce, acompañada de papas fritas y queso a la plancha.",
    price: 35.00,
    tags: ["Para 6"]
  },
  {
    id: 'c-52',
    itemNumber: 52,
    name: "Parrilla de Mariscos (Para 6 Personas)",
    category: "parrillas",
    section: "comidas",
    description: "Pulpo, camarones, calamares, almejas y mejillones acompañados de papas fritas crocantes y queso a la plancha.",
    price: 60.00,
    highlight: true,
    tags: ["Para 6", "Marino"]
  },

  // Pizzas
  {
    id: 'c-53',
    itemNumber: 53,
    name: "Pizza Rellena Mediana",
    category: "pizzas",
    section: "comidas",
    description: "Doble queso, doble jamón, carne, pollo y salsa especial de tomate.",
    price: 25.00,
    tags: ["Abundante"]
  },
  {
    id: 'c-54',
    itemNumber: 54,
    name: "Pizza Rellena Pequeña",
    category: "pizzas",
    section: "comidas",
    description: "Doble queso, doble jamón, carne, pollo y salsa artesanal.",
    price: 18.00,
    tags: ["Personal"]
  },
  {
    id: 'c-55',
    itemNumber: 55,
    name: "Pizza Santorini Mediana (+ Refresco de Lata)",
    category: "pizzas",
    section: "comidas",
    description: "Jamón, queso mozzarella, maíz dulce, tocineta crocante y peperoni + 1 refresco de lata incluido.",
    price: 12.00,
    highlight: true,
    tags: ["Especialidad Casa", "Combo"]
  },
  {
    id: 'c-56',
    itemNumber: 56,
    name: "Pizza Santorini Pequeña",
    category: "pizzas",
    section: "comidas",
    description: "Jamón, queso mozzarella, maíz, tocineta y peperoni.",
    price: 8.00,
    tags: ["Personal"]
  },
  {
    id: 'c-57',
    itemNumber: 57,
    name: "Pizza Capressa Mediana (+ Refresco de Lata)",
    category: "pizzas",
    section: "comidas",
    description: "Salsa Nápoles, pesto de albahaca, queso mozzarella y ruedas de tomate fresco + 1 refresco de lata.",
    price: 12.00,
    tags: ["Vegetariana", "Italiana"]
  },
  {
    id: 'c-58',
    itemNumber: 58,
    name: "Pizza Capressa Pequeña",
    category: "pizzas",
    section: "comidas",
    description: "Salsa Nápoles, pesto, queso mozzarella y ruedas de tomate fresco.",
    price: 8.00,
    tags: ["Vegetariana"]
  },
  {
    id: 'c-59',
    itemNumber: 59,
    name: "Pizza Marinera Mediana (+ Refresco 1L)",
    category: "pizzas",
    section: "comidas",
    description: "Calamares, pulpo y camarones frescos sobre base de mozzarella + 1 refresco de 1 Litro.",
    price: 16.00,
    highlight: true,
    tags: ["Mariscos", "Combo"]
  },
  {
    id: 'c-60',
    itemNumber: 60,
    name: "Pizza Marinera Pequeña (+ Refresco de Lata)",
    category: "pizzas",
    section: "comidas",
    description: "Calamares, pulpo y camarones + 1 refresco de lata incluido.",
    price: 12.00,
    tags: ["Mariscos"]
  },
  {
    id: 'c-61',
    itemNumber: 61,
    name: "Pizza Volcán Mediana (+ Refresco 1L)",
    category: "pizzas",
    section: "comidas",
    description: "Cochino, res, abundante queso, jamón y tocineta + 1 refresco de 1 Litro.",
    price: 16.00,
    tags: ["Carnívora"]
  },
  {
    id: 'c-62',
    itemNumber: 62,
    name: "Pizza Margarita Mediana (+ Refresco de Lata)",
    category: "pizzas",
    section: "comidas",
    description: "Salsa Nápoles, queso mozzarella fundido y maíz tierno + 1 refresco de lata.",
    price: 10.00,
    tags: ["Clásica"]
  },

  // Al Grill & Shawarmas
  {
    id: 'c-63',
    itemNumber: 63,
    name: "Shawarma de 1 Proteína",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Pan árabe relleno con tu proteína favorita (pollo, pernil, carne o falafel), ensalada tabule, pepinillo, salsa de garbanzo (hummus) y salsa de ajo.",
    price: 6.00,
    tags: ["Árabe"],
    options: {
      type: 'proteinas',
      title: 'Elige tu Proteína',
      maxSelect: 1,
      choices: PROTEINAS_CHOICES,
    }
  },
  {
    id: 'c-64',
    itemNumber: 64,
    name: "Shawarma Mixto (2 Proteínas)",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Pan árabe relleno de 2 proteínas a tu elección, ensalada tabule fresca, pepinillo, salsa de garbanzo y de ajo.",
    price: 7.00,
    highlight: true,
    tags: ["Favorito"],
    options: {
      type: 'proteinas',
      title: 'Elige 2 Proteínas',
      maxSelect: 2,
      choices: PROTEINAS_CHOICES,
    }
  },
  {
    id: 'c-65',
    itemNumber: 65,
    name: "Shawarma Triple (3 Proteínas)",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Pan árabe relleno de 3 proteínas a tu elección, ensalada tabule, pepinillo, salsa de garbanzo y de ajo.",
    price: 8.00,
    tags: ["Completo"],
    options: {
      type: 'proteinas',
      title: 'Elige 3 Proteínas',
      maxSelect: 3,
      choices: PROTEINAS_CHOICES,
    }
  },
  {
    id: 'c-66',
    itemNumber: 66,
    name: "Plato de Shawarma Picado",
    category: "grill-shawarmas",
    section: "comidas",
    description: "2 Shawarmas picados rellenos de tabule, pepinillo, proteína de su elección, salsas, papas fritas, falafel y pollo.",
    price: 35.00,
    tags: ["Para compartir"]
  },
  {
    id: 'c-67',
    itemNumber: 67,
    name: "Plato Árabe Mixto",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Ración de kibbe, ración de tabaquitos, ración de falafel, tabule y 2 pinchos a elección.",
    price: 15.00,
    highlight: true,
    tags: ["Degustación Árabe"]
  },
  {
    id: 'c-68',
    itemNumber: 68,
    name: "Tabaquitos de Uva",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Hoja de parra rellena de arroz y carne sazonada con especias árabes, acompañada de salsa de garbanzos.",
    price: 10.00,
    tags: ["Ración"]
  },
  {
    id: 'c-69',
    itemNumber: 69,
    name: "Kibbe Árabe",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Fritura ovalada rellena de trigo burgol, carne molida especiada con piñones y salsa de garbanzos.",
    price: 12.00,
    tags: ["Ración"]
  },
  {
    id: 'c-70',
    itemNumber: 70,
    name: "Falafel",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Croquetas fritas de garbanzos y perejil sazonadas con especias tradicionales con crema de hummus.",
    price: 10.00,
    tags: ["Vegetariano"]
  },
  {
    id: 'c-71',
    itemNumber: 71,
    name: "Pan Árabe Frito",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Triángulos crujientes de pan árabe frito acompañados de reducción de granadina.",
    price: 2.51,
    tags: ["Crocante"]
  },
  {
    id: 'c-72',
    itemNumber: 72,
    name: "Ensalada Fatush",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Verduras frescas, hierbas aromáticas, trozos de pan frito crujiente y aderezo cítrico con sumac y especias árabes.",
    price: 6.00,
    tags: ["Ensalada"]
  },
  {
    id: 'c-73',
    itemNumber: 73,
    name: "Tabule Tradicional",
    category: "grill-shawarmas",
    section: "comidas",
    description: "Ensalada tradicional árabe de abundante perejil fresco picado, tomate, trigo y toques cítricos.",
    price: 6.00,
    tags: ["Ensalada"]
  },

  // Burgers, Pepitos & Promos
  {
    id: 'c-74',
    itemNumber: 74,
    name: "Choripapas",
    category: "burgers-promos",
    section: "comidas",
    description: "350gr de chorizo parrillero troceado, 300gr de papas fritas doradas, queso amarillo fundido y salsas.",
    price: 9.00,
    tags: ["Snack"]
  },
  {
    id: 'c-75',
    itemNumber: 75,
    name: "Pollo a la Broaster",
    category: "burgers-promos",
    section: "comidas",
    description: "4 piezas de pollo crujiente al estilo broaster con papas fritas y ensalada rallada dulce.",
    price: 10.00,
    tags: ["Broaster"]
  },
  {
    id: 'c-76',
    itemNumber: 76,
    name: "Tenders de Pollo",
    category: "burgers-promos",
    section: "comidas",
    description: "4 Tenders de pollo empanizados dorados + 200gr de papas fritas con crema.",
    price: 10.00,
    tags: ["Crispy"]
  },
  {
    id: 'c-77',
    itemNumber: 77,
    name: "Sándwich Kids",
    category: "burgers-promos",
    section: "comidas",
    description: "4 panes de sándwich triangulares rellenos de jamón, queso facilita, huevo, salsas básicas + papas fritas.",
    price: 12.00,
    tags: ["Menú Kids"]
  },
  {
    id: 'c-78',
    itemNumber: 78,
    name: "Hamburguesa Kids",
    category: "burgers-promos",
    section: "comidas",
    description: "Pan brioche suave, pollo crispy o a la plancha, queso Kraft, salsas básicas y papas fritas.",
    price: 11.00,
    tags: ["Menú Kids"]
  },
  {
    id: 'c-79',
    itemNumber: 79,
    name: "Hamburguesa Callejera",
    category: "burgers-promos",
    section: "comidas",
    description: "Pan brioche, 100gr de proteína de su preferencia, huevo frito, tocineta, papitas de perro, maíz dulce, salsa y vegetales + papas fritas.",
    price: 13.00,
    highlight: true,
    tags: ["Sabor Venezolano"]
  },
  {
    id: 'c-80',
    itemNumber: 80,
    name: "Hamburguesa Clásica (+ Refresco de Vaso)",
    category: "burgers-promos",
    section: "comidas",
    description: "Pan brioche, 100gr de proteína a elección, vegetales frescos, queso Kraft, salsas + papas fritas + refresco de vaso.",
    price: 8.00,
    tags: ["Combo"]
  },
  {
    id: 'c-81',
    itemNumber: 81,
    name: "Hamburguesa Sweet Onion",
    category: "burgers-promos",
    section: "comidas",
    description: "Pan brioche, 100gr de proteína, queso crema, cebolla caramelizada casera, queso facilita, tocineta crocante + papas fritas.",
    price: 8.00,
    tags: ["Gourmet"]
  },
  {
    id: 'c-82',
    itemNumber: 82,
    name: "Hamburguesa César",
    category: "burgers-promos",
    section: "comidas",
    description: "Pan brioche, pollo crispy, salsa de la casa, lechuga, queso crema, queso Kraft, queso parmesano y tocineta.",
    price: 10.00,
    tags: ["Crispy"]
  },
  {
    id: 'c-83',
    itemNumber: 83,
    name: "Pepito Tradicional",
    category: "burgers-promos",
    section: "comidas",
    description: "Baguette tostado con una (1) proteína a elección, vegetales, papitas de perro crocantes, salsas de la casa + papas fritas.",
    price: 12.00,
    tags: ["Pepito"]
  },
  {
    id: 'c-84',
    itemNumber: 84,
    name: "Pepito Mixto",
    category: "burgers-promos",
    section: "comidas",
    description: "Baguette tostado con dos (2) proteínas a elección, vegetales, papitas de perro, salsas especiales + papas fritas.",
    price: 12.00,
    highlight: true,
    tags: ["Pepito Mixto"]
  },
  {
    id: 'c-85',
    itemNumber: 85,
    name: "Promo: 2 Pizzas Santorini Medianas + Bebida 1.5L",
    category: "burgers-promos",
    section: "comidas",
    description: "2 Pizzas medianas con jamón, queso mozzarella, maíz dulce, tocineta y peperoni + refresco familiar de 1.5 Litros.",
    price: 11.99,
    highlight: true,
    tags: ["Super Promo", "Ahorro"]
  },
  {
    id: 'c-86',
    itemNumber: 86,
    name: "Promo: 2 Hamburguesas + Refresco 1.5L",
    category: "burgers-promos",
    section: "comidas",
    description: "2 Hamburguesas en pan brioche con 100gr de proteína c/u, vegetales, queso Kraft, salsas + papas fritas + refresco de 1.5L.",
    price: 15.00,
    highlight: true,
    tags: ["Super Promo"]
  },
  {
    id: 'c-87',
    itemNumber: 87,
    name: "Promo: 2 Shawarmas (1 Proteína) + Bebida 1.5L",
    category: "burgers-promos",
    section: "comidas",
    description: "2 Shawarmas de 1 proteína a elección con ensalada tabule, salsa de garbanzo y de ajo + refresco de 1.5 Litros.",
    price: 16.00,
    highlight: true,
    tags: ["Super Promo"]
  },
  {
    id: 'c-88',
    itemNumber: 88,
    name: "Promo: Plato Shawarma Picado + Bebida 1.5L",
    category: "burgers-promos",
    section: "comidas",
    description: "2 Shawarmas picados rellenos de tabule, pepinillo, proteína de su elección, salsas, papas fritas, falafel y pollo + refresco de 1.5L.",
    price: 22.01,
    highlight: true,
    tags: ["Super Promo", "Banquetazo"]
  }
];

export const BEBIDAS: MenuItem[] = [
  // Cócteles 1-22
  {
    id: 'b-1',
    itemNumber: 1,
    name: "Daiquiri Afrutado (Fresa o Parchita)",
    category: "cocteles",
    section: "bebidas",
    description: "Ron, limón fresco, azúcar, hielo agitado con pulpa natural a elección.",
    price: 5.00,
    highlight: true,
    tags: ["Cóctel"],
    options: {
      type: 'frutas',
      title: 'Elige el Sabor Frutal',
      maxSelect: 1,
      choices: FRUTAS_CHOICES,
    }
  },
  {
    id: 'b-2',
    itemNumber: 2,
    name: "Margarita de Jamaica",
    category: "cocteles",
    section: "bebidas",
    description: "Tequila, triple sec, limón y zumo concentrado de flor de jamaica con borde escarchado.",
    price: 5.00,
    tags: ["Cóctel Floral"]
  },
  {
    id: 'b-3',
    itemNumber: 3,
    name: "Daiquiri Clásico",
    category: "cocteles",
    section: "bebidas",
    description: "Ron blanco, limón recién exprimido y almíbar simple agitado con hielo.",
    price: 5.00,
    tags: ["Clásico"]
  },
  {
    id: 'b-4',
    itemNumber: 4,
    name: "Margarita Afrutada (Fresa o Parchita)",
    category: "cocteles",
    section: "bebidas",
    description: "Tequila reposado, triple sec, limón y zumo de fruta natural de su preferencia.",
    price: 4.00,
    tags: ["Frutal"]
  },
  {
    id: 'b-5',
    itemNumber: 5,
    name: "Margarita Clásica",
    category: "cocteles",
    section: "bebidas",
    description: "Tequila, triple sec, zumo de limón y borde de sal marina fina.",
    price: 4.00,
    tags: ["Clásico"]
  },
  {
    id: 'b-6',
    itemNumber: 6,
    name: "Piña Colada Tradicional",
    category: "cocteles",
    section: "bebidas",
    description: "Piña natural colada, ron, licor de coco, crema de coco, leche condensada y hielo frappé.",
    price: 5.00,
    highlight: true,
    tags: ["Tropical"]
  },
  {
    id: 'b-7',
    itemNumber: 7,
    name: "Piña Colada Silver",
    category: "cocteles",
    section: "bebidas",
    description: "Piña, ron, licor de coco, crema de coco, leche condensada, crema Baileys y hielo cremoso.",
    price: 5.00,
    highlight: true,
    tags: ["Especial Santorini"]
  },
  {
    id: 'b-8',
    itemNumber: 8,
    name: "Mojito Clásico",
    category: "cocteles",
    section: "bebidas",
    description: "Limón, hojas de hierbabuena fresca maceradas, ron, azúcar y soda o 7Up con hielo picado.",
    price: 3.50,
    tags: ["Refrescante"]
  },
  {
    id: 'b-9',
    itemNumber: 9,
    name: "Mojito Afrutado (Fresa o Parchita)",
    category: "cocteles",
    section: "bebidas",
    description: "Hierbabuena fresca, ron, azúcar, soda y pulpa natural de fresa o parchita.",
    price: 3.50,
    tags: ["Refrescante"]
  },
  {
    id: 'b-10',
    itemNumber: 10,
    name: "Tequila Sunrise",
    category: "cocteles",
    section: "bebidas",
    description: "Tequila, jugo de naranja dulce y un suave fondo de jarabe de granadina.",
    price: 5.00,
    tags: ["Cítrico"]
  },
  {
    id: 'b-11',
    itemNumber: 11,
    name: "Shot de Tequila José Cuervo",
    category: "cocteles",
    section: "bebidas",
    description: "José Cuervo Reposado o Silver servido con rodaja de limón y sal marina.",
    price: 4.50,
    tags: ["Shot"]
  },
  {
    id: 'b-12',
    itemNumber: 12,
    name: "Gin Tonic Clásico",
    category: "cocteles",
    section: "bebidas",
    description: "Ginebra premium, agua tónica helada y twist de piel de limón.",
    price: 5.50,
    tags: ["Elegante"]
  },
  {
    id: 'b-13',
    itemNumber: 13,
    name: "Vodka Tonic",
    category: "cocteles",
    section: "bebidas",
    description: "Vodka, agua tónica bien fría y gajo de limón fresco.",
    price: 4.00,
    tags: ["Trago Largo"]
  },
  {
    id: 'b-14',
    itemNumber: 14,
    name: "Destornillador (Screwdriver)",
    category: "cocteles",
    section: "bebidas",
    description: "Vodka con abundante jugo de naranja exprimido y hielo.",
    price: 5.00,
    tags: ["Clásico"]
  },
  {
    id: 'b-15',
    itemNumber: 15,
    name: "Cóctel Alexander",
    category: "cocteles",
    section: "bebidas",
    description: "Brandy, ponche crema venezolano, Kahlúa y un toque espolvoreado de canela.",
    price: 3.50,
    tags: ["Cremoso"]
  },
  {
    id: 'b-16',
    itemNumber: 16,
    name: "Beso de Ángel",
    category: "cocteles",
    section: "bebidas",
    description: "Licor de café Kahlúa y ponche crema frío servido en capas.",
    price: 5.00,
    tags: ["Digestivo"]
  },
  {
    id: 'b-17',
    itemNumber: 17,
    name: "La Cucaracha (Flameado)",
    category: "cocteles",
    section: "bebidas",
    description: "Tequila y Kahlúa con efecto flameado tradicional en mesa.",
    price: 3.50,
    tags: ["Show Flameado"]
  },
  {
    id: 'b-18',
    itemNumber: 18,
    name: "Martini Clásico",
    category: "cocteles",
    section: "bebidas",
    description: "Ginebra seca, Martini Dry frío y aceituna verde rellena.",
    price: 3.50,
    tags: ["Clásico"]
  },
  {
    id: 'b-19',
    itemNumber: 19,
    name: "Pie de Limón",
    category: "cocteles",
    section: "bebidas",
    description: "Vodka, crema de coco, leche condensada y zumo de limón verde.",
    price: 5.00,
    tags: ["Postre Líquido"]
  },
  {
    id: 'b-20',
    itemNumber: 20,
    name: "Splas de Amaretto",
    category: "cocteles",
    section: "bebidas",
    description: "Amaretto di Saronno, jugo de naranja dulce y abundante hielo picado.",
    price: 3.50,
    tags: ["Almendra & Naranja"]
  },
  {
    id: 'b-21',
    itemNumber: 21,
    name: "Cuba Libre",
    category: "cocteles",
    section: "bebidas",
    description: "Ron añejo venezolano, limón fresco y amargo de angostura con cola negra.",
    price: 3.50,
    tags: ["Clásico"]
  },
  {
    id: 'b-22',
    itemNumber: 22,
    name: "Old Fashioned",
    category: "cocteles",
    section: "bebidas",
    description: "Whisky escocés, gotas de amargo de angostura, azúcar y piel de naranja.",
    price: 6.00,
    highlight: true,
    tags: ["Clásico Mundial"]
  },

  // Cócteles Internacionales & Frappé 23-28
  {
    id: 'b-23',
    itemNumber: 23,
    name: "Manhattan",
    category: "cocteles",
    section: "bebidas",
    description: "Whisky, martini rojo (vermouth rosso) y amargo de angostura con cereza marrasquino.",
    price: 8.00,
    tags: ["Elegante"]
  },
  {
    id: 'b-24',
    itemNumber: 24,
    name: "Sex on the Beach",
    category: "cocteles",
    section: "bebidas",
    description: "Vodka, licor de durazno, zumo de arándano y jugo de naranja fresco.",
    price: 4.00,
    tags: ["Frutal"]
  },
  {
    id: 'b-25',
    itemNumber: 25,
    name: "Negroni",
    category: "cocteles",
    section: "bebidas",
    description: "Campari amargo, ginebra seca y vermouth rosso servido con rodaja de naranja.",
    price: 5.00,
    highlight: true,
    tags: ["Aperitivo Italiano"]
  },
  {
    id: 'b-26',
    itemNumber: 26,
    name: "Tinto de Verano",
    category: "cocteles",
    section: "bebidas",
    description: "Vino tinto joven, toque de limón o parchita, triple sec y 7Up con hielo.",
    price: 5.50,
    tags: ["Mediterráneo"]
  },
  {
    id: 'b-27',
    itemNumber: 27,
    name: "Orgasmo",
    category: "cocteles",
    section: "bebidas",
    description: "Vodka, Baileys Irish Cream, licor de café Kahlúa y Frangelico de avellana.",
    price: 5.00,
    tags: ["Cremoso"]
  },
  {
    id: 'b-28',
    itemNumber: 28,
    name: "Trago de Frappé Especial",
    category: "cocteles",
    section: "bebidas",
    description: "Sangría Caroreña, cerveza bien fría, licor de coco y gotas de limón.",
    price: 1.00,
    tags: ["Popular"]
  },

  // Tragos de Whisky 29-37
  {
    id: 'b-29',
    itemNumber: 29,
    name: "Trago Old Parr 12 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky escocés servido solo, a las rocas o con soda/agua.",
    price: 6.00,
    tags: ["Whisky Escocés"]
  },
  {
    id: 'b-30',
    itemNumber: 30,
    name: "Trago Buchanan's Deluxe 12 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky escocés suave de malta servido con soda o agua.",
    price: 6.00,
    tags: ["Whisky 12 Años"]
  },
  {
    id: 'b-31',
    itemNumber: 31,
    name: "Trago Buchanan's Special Reserve 18 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Exclusivo whisky escocés envejecido 18 años de notas amaderadas y miel.",
    price: 8.00,
    highlight: true,
    tags: ["Whisky Ultra Premium"]
  },
  {
    id: 'b-32',
    itemNumber: 32,
    name: "Trago Black & White 8 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky blended escocés servido con soda o agua helada.",
    price: 4.00,
    tags: ["Whisky"]
  },
  {
    id: 'b-33',
    itemNumber: 33,
    name: "Trago Grant's Triple Wood 8 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky servido con agua o soda.",
    price: 4.00,
    tags: ["Whisky"]
  },
  {
    id: 'b-34',
    itemNumber: 34,
    name: "Trago Grant's 12 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky escocés añejado 12 años servido con soda o agua.",
    price: 6.00,
    tags: ["Whisky 12 Años"]
  },
  {
    id: 'b-35',
    itemNumber: 35,
    name: "Trago The Famous Grouse",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky escocés tradicional servido al gusto.",
    price: 4.00,
    tags: ["Whisky"]
  },
  {
    id: 'b-36',
    itemNumber: 36,
    name: "Trago Johnnie Walker Black Label (Etiqueta Negra)",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky escocés 12 años con carácter ahumado inconfundible.",
    price: 6.00,
    highlight: true,
    tags: ["Whisky 12 Años"]
  },
  {
    id: 'b-37',
    itemNumber: 37,
    name: "Trago Highland 12 Años",
    category: "whisky-ron",
    section: "bebidas",
    description: "Whisky servido con hielo y soda o agua pura.",
    price: 6.00,
    tags: ["Whisky"]
  },

  // Tragos de Ron Venezolano 38-44
  {
    id: 'b-38',
    itemNumber: 38,
    name: "Trago Santa Teresa Gran Reserva",
    category: "whisky-ron",
    section: "bebidas",
    description: "Ron insignia de Venezuela servido con refresco y rodaja de limón.",
    price: 4.00,
    tags: ["Ron Venezolano"]
  },
  {
    id: 'b-39',
    itemNumber: 39,
    name: "Trago Santa Teresa Linaje",
    category: "whisky-ron",
    section: "bebidas",
    description: "Ron extra añejo con cuerpo robusto servido con refresco y limón.",
    price: 5.00,
    tags: ["Ron Añejo"]
  },
  {
    id: 'b-40',
    itemNumber: 40,
    name: "Trago Cacique Moneda",
    category: "whisky-ron",
    section: "bebidas",
    description: "Ron dorado clásico venezolano servido con refresco y limón.",
    price: 3.50,
    tags: ["Ron"]
  },
  {
    id: 'b-41',
    itemNumber: 41,
    name: "Trago Pampero Especial",
    category: "whisky-ron",
    section: "bebidas",
    description: "Ron añejado en barricas de roble con refresco y limón.",
    price: 4.00,
    tags: ["Ron"]
  },
  {
    id: 'b-42',
    itemNumber: 42,
    name: "Trago Ron 12 Años de la Casa",
    category: "whisky-ron",
    section: "bebidas",
    description: "Selección especial de ron añejado durante 12 años.",
    price: 5.00,
    tags: ["Ron Añejo"]
  },
  {
    id: 'b-43',
    itemNumber: 43,
    name: "Trago Ron Carúpano",
    category: "whisky-ron",
    section: "bebidas",
    description: "Ron de la histórica hacienda de Carúpano servido con hielo y cola.",
    price: 4.00,
    tags: ["Ron Carúpano"]
  },
  {
    id: 'b-44',
    itemNumber: 44,
    name: "Trago Cacique 500 Extra Añejo",
    category: "whisky-ron",
    section: "bebidas",
    description: "Ron conmemorativo destilado en alambiques de cobre.",
    price: 4.00,
    highlight: true,
    tags: ["Ron Extra Añejo"]
  },

  // Copas de Vino & Aperitivos 45-53
  {
    id: 'b-45',
    itemNumber: 45,
    name: "Copa de Vino Tinto",
    category: "vinos-licores",
    section: "bebidas",
    description: "Copa de vino tinto selección especial de la casa.",
    price: 6.50,
    tags: ["Copa"]
  },
  {
    id: 'b-46',
    itemNumber: 46,
    name: "Copa de Vino Blanco",
    category: "vinos-licores",
    section: "bebidas",
    description: "Copa de vino blanco frío y afrutado ideal para mariscos.",
    price: 5.00,
    tags: ["Copa"]
  },
  {
    id: 'b-47',
    itemNumber: 47,
    name: "Copa de Vino Rosado",
    category: "vinos-licores",
    section: "bebidas",
    description: "Copa de vino rosado fresco y equilibrado.",
    price: 5.00,
    tags: ["Copa"]
  },
  {
    id: 'b-48',
    itemNumber: 48,
    name: "Trago Aperol Spritz / Aperol",
    category: "vinos-licores",
    section: "bebidas",
    description: "Aperitivo italiano con notas de naranja amarga y hierbas.",
    price: 5.00,
    tags: ["Aperitivo"]
  },
  {
    id: 'b-49',
    itemNumber: 49,
    name: "Trago Campari",
    category: "vinos-licores",
    section: "bebidas",
    description: "Clásico bitter italiano con hielo y rodaja de naranja.",
    price: 5.00,
    tags: ["Aperitivo"]
  },
  {
    id: 'b-50',
    itemNumber: 50,
    name: "Trago Sambuca",
    category: "vinos-licores",
    section: "bebidas",
    description: "Licor anisado italiano servido solo con 3 granos de café con la mosca.",
    price: 5.00,
    tags: ["Digestivo"]
  },
  {
    id: 'b-51',
    itemNumber: 51,
    name: "Trago Frangelico",
    category: "vinos-licores",
    section: "bebidas",
    description: "Licor de avellanas silvestres tostadas de origen piamontés.",
    price: 5.00,
    tags: ["Digestivo"]
  },
  {
    id: 'b-52',
    itemNumber: 52,
    name: "Trago Amaretto Disaronno",
    category: "vinos-licores",
    section: "bebidas",
    description: "Famoso licor de almendras dulces con hielo.",
    price: 5.00,
    tags: ["Digestivo"]
  },
  {
    id: 'b-53',
    itemNumber: 53,
    name: "Trago Limoncello",
    category: "vinos-licores",
    section: "bebidas",
    description: "Licor tradicional de limones mediterráneos servido a temperatura bajo cero.",
    price: 5.00,
    tags: ["Digestivo"]
  },

  // Servicios de Ron en Botella 54-62
  {
    id: 'b-54',
    itemNumber: 54,
    name: "Servicio Ron Santa Teresa Linaje",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa servida con refresco de 1 Litro y shot de limón fresco.",
    price: 20.00,
    tags: ["Botella", "Ron"]
  },
  {
    id: 'b-55',
    itemNumber: 55,
    name: "Servicio Ron Santa Teresa Gran Reserva",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa servida con refresco de 1L y limón.",
    price: 28.00,
    tags: ["Botella", "Ron"]
  },
  {
    id: 'b-56',
    itemNumber: 56,
    name: "Servicio Ron Cacique Clásico",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa con refresco de 1L y shot de limón.",
    price: 48.00,
    tags: ["Botella", "Ron"]
  },
  {
    id: 'b-57',
    itemNumber: 57,
    name: "Servicio Ron Pampero Selección",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa con refresco de 1L y shot de limón.",
    price: 38.00,
    tags: ["Botella", "Ron"]
  },
  {
    id: 'b-58',
    itemNumber: 58,
    name: "Servicio Ron Carúpano 18 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella de reserva 18 años servida con refresco 1L y limón.",
    price: 20.00,
    tags: ["Botella Premium"]
  },
  {
    id: 'b-59',
    itemNumber: 59,
    name: "Servicio Ron Cacique 500",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa de Cacique 500 con refresco de 1L y limón.",
    price: 28.00,
    tags: ["Botella", "Ron"]
  },
  {
    id: 'b-60',
    itemNumber: 60,
    name: "Servicio Ron Santa Teresa 1796 (Negro)",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Solera ron ultra-premium Santa Teresa 1796 acabado especial.",
    price: 36.00,
    highlight: true,
    tags: ["Solera Premium"]
  },
  {
    id: 'b-61',
    itemNumber: 61,
    name: "Servicio Ron Santa Teresa 1796 (Azul)",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Edición exclusiva de Santa Teresa 1796 en estuche azul de solera.",
    price: 50.00,
    highlight: true,
    tags: ["Lujo Exclusivo"]
  },
  {
    id: 'b-62',
    itemNumber: 62,
    name: "Servicio Ron Carúpano 21 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Leyenda venezolana envejecida durante 21 años con servicio de lujo.",
    price: 75.00,
    highlight: true,
    tags: ["Colección"]
  },

  // Servicios de Whisky en Botella 63-71
  {
    id: 'b-63',
    itemNumber: 63,
    name: "Servicio Whisky Highland 12 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa servida con agua pura y soda helada.",
    price: 60.00,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-64',
    itemNumber: 64,
    name: "Servicio Johnnie Walker Black Label",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella Etiqueta Negra 12 años con agua y soda.",
    price: 60.00,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-65',
    itemNumber: 65,
    name: "Servicio Buchanan's 18 Años Special Reserve",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Servicio supremo de Buchanan's 18 años con hielo, agua mineral y soda.",
    price: 150.00,
    highlight: true,
    tags: ["Botella Élite"]
  },
  {
    id: 'b-66',
    itemNumber: 66,
    name: "Servicio The Famous Grouse",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa servida con agua y soda.",
    price: 37.00,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-67',
    itemNumber: 67,
    name: "Servicio Grant's 12 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa con agua y soda.",
    price: 28.00,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-68',
    itemNumber: 68,
    name: "Servicio Grant's 8 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa con agua y soda.",
    price: 35.00,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-69',
    itemNumber: 69,
    name: "Servicio Black & White 8 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa con agua y soda.",
    price: 28.00,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-70',
    itemNumber: 70,
    name: "Servicio Buchanan's Deluxe 12 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella de Buchanan's 12 años servida con hielera, agua y soda.",
    price: 60.00,
    highlight: true,
    tags: ["Botella", "Whisky"]
  },
  {
    id: 'b-71',
    itemNumber: 71,
    name: "Servicio Old Parr 12 Años",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella icónica de Old Parr con hielera, agua y soda.",
    price: 50.00,
    highlight: true,
    tags: ["Botella", "Whisky"]
  },

  // Servicios de Vino & Vodka 72-75
  {
    id: 'b-72',
    itemNumber: 72,
    name: "Servicio de Vino Selección de la Casa",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella de vino tinto o blanco importado de reserva.",
    price: 35.00,
    tags: ["Botella Vino"]
  },
  {
    id: 'b-73',
    itemNumber: 73,
    name: "Servicio de Vino Abadía del Roble",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella de vino Abadía del Roble.",
    price: 28.00,
    tags: ["Botella Vino"]
  },
  {
    id: 'b-74',
    itemNumber: 74,
    name: "Servicio de Vodka Smirnoff",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella completa servida con jugo de naranja natural y granadina.",
    price: 20.00,
    tags: ["Botella", "Vodka"]
  },
  {
    id: 'b-75',
    itemNumber: 75,
    name: "Servicio de Gin Gordon's",
    category: "servicios-botellas",
    section: "bebidas",
    description: "Botella de Ginebra Gordon's servida con agua tónica y rodajas de cítricos.",
    price: 20.00,
    tags: ["Botella", "Ginebra"]
  },

  // Shots & Cervezas 76-80
  {
    id: 'b-76',
    itemNumber: 76,
    name: "Shot de Baileys",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Crema irlandesa bien fría en vaso tequilero.",
    price: 2.00,
    tags: ["Shot"]
  },
  {
    id: 'b-77',
    itemNumber: 77,
    name: "Shot de Kahlúa",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Licor de café concentrado mexicano.",
    price: 2.00,
    tags: ["Shot"]
  },
  {
    id: 'b-78',
    itemNumber: 78,
    name: "Shot de Limón",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Shot cítrico con licor y limón.",
    price: 5.00,
    tags: ["Shot"]
  },
  {
    id: 'b-79',
    itemNumber: 79,
    name: "Servicio de Michelada",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Plato y copa con borde escarchado en sal gruesa, limón y salsas especiales.",
    price: 3.00,
    tags: ["Cerveza"]
  },
  {
    id: 'b-80',
    itemNumber: 80,
    name: "Servicio de Chelada",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Vaso escarchado con sal, zumo de limón y cerveza de su preferencia.",
    price: 2.00,
    tags: ["Cerveza"]
  },

  // Descorches 81-84
  {
    id: 'b-81',
    itemNumber: 81,
    name: "Descorche de Ron",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Servicio para disfrutar de tu botella de ron en nuestra mesa con hielo.",
    price: 8.00,
    tags: ["Descorche"]
  },
  {
    id: 'b-82',
    itemNumber: 82,
    name: "Descorche de Whisky",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Servicio de descorche para botella de whisky con hielera y copas.",
    price: 10.00,
    tags: ["Descorche"]
  },
  {
    id: 'b-83',
    itemNumber: 83,
    name: "Descorche de Vino",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Apertura y servicio de botella de vino con copas de cristal.",
    price: 10.00,
    tags: ["Descorche"]
  },
  {
    id: 'b-84',
    itemNumber: 84,
    name: "Descorche de Vodka",
    category: "shots-cervezas",
    section: "bebidas",
    description: "Servicio de descorche para botella de vodka.",
    price: 10.00,
    tags: ["Descorche"]
  },

  // Sin Alcohol: Jugos, Smoothies, Cafés & Bebidas 85-103
  {
    id: 'b-85',
    itemNumber: 85,
    name: "Jugo Natural de Fresa",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Fresas frescas licuadas al instante.",
    price: 5.00,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-86',
    itemNumber: 86,
    name: "Jugo Natural de Mora",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Moras seleccionadas licuadas frías.",
    price: 5.00,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-87',
    itemNumber: 87,
    name: "Jugo Natural de Piña",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Piña dulce natural colada y refrescante.",
    price: 1.30,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-88',
    itemNumber: 88,
    name: "Jugo Natural de Guanábana",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Pulpa de guanábana cremosa batida con hielo.",
    price: 1.50,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-89',
    itemNumber: 89,
    name: "Jugo Natural de Parchita (Maracuyá)",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Parchita natural recién colada, toque cítrico perfecto.",
    price: 4.50,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-90',
    itemNumber: 90,
    name: "Jugo Natural de Durazno",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Durazno licuado fresco.",
    price: 1.60,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-91',
    itemNumber: 91,
    name: "Jugo Natural de Naranja",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Jugo de naranjas recién exprimidas al natural.",
    price: 1.50,
    tags: ["Jugo Natural"]
  },
  {
    id: 'b-92',
    itemNumber: 92,
    name: "Limonada Clásica",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Limones verdes exprimidos con agua helada y azúcar al gusto.",
    price: 1.50,
    tags: ["Limonada"]
  },
  {
    id: 'b-93',
    itemNumber: 93,
    name: "Limonada Rosa",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Limonada fresca con un toque aromático de frutos rojos o granadina.",
    price: 1.50,
    tags: ["Limonada"]
  },
  {
    id: 'b-94',
    itemNumber: 94,
    name: "Limonada con Hierbabuena (Frappé)",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Limonada frappé con hojas frescas de hierbabuena trituradas.",
    price: 2.50,
    highlight: true,
    tags: ["Refrescante"]
  },
  {
    id: 'b-95',
    itemNumber: 95,
    name: "Limonada de Parchita",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Fusión cítrica de limón criollo con zumo concentrado de parchita.",
    price: 2.50,
    tags: ["Limonada"]
  },
  {
    id: 'b-96',
    itemNumber: 96,
    name: "Smoothie de Fresa",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Batido cremoso frappé de fresas con leche o yogurt.",
    price: 1.50,
    tags: ["Smoothie"]
  },
  {
    id: 'b-97',
    itemNumber: 97,
    name: "Smoothie de Mora",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Batido frappé espeso de mora natural.",
    price: 2.00,
    tags: ["Smoothie"]
  },
  {
    id: 'b-98',
    itemNumber: 98,
    name: "Café Expreso Italiano",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Extracción corta de café de grano recién molido con crema dorada densa.",
    price: 2.50,
    tags: ["Cafetería"]
  },
  {
    id: 'b-99',
    itemNumber: 99,
    name: "Café Americano",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Taza de café lungo suave y aromático servido caliente.",
    price: 3.00,
    tags: ["Cafetería"]
  },
  {
    id: 'b-100',
    itemNumber: 100,
    name: "Café Nescafé / Con Leche",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Preparación clásica caliente con leche cremosa al gusto.",
    price: 2.50,
    tags: ["Cafetería"]
  },
  {
    id: 'b-101',
    itemNumber: 101,
    name: "Infusiones Naturales (Jengibre, Té Verde, Flor de Jamaica, Manzanilla)",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Taza de té o infusión natural a su elección servida con miel o limón.",
    price: 2.50,
    tags: ["Té & Infusiones"]
  },
  {
    id: 'b-102',
    itemNumber: 102,
    name: "Bebidas: Soda, Aguakina, Agua Mineral o Gasificada",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Botella individual fría a su elección.",
    price: 2.00,
    tags: ["Hidratación"]
  },
  {
    id: 'b-103',
    itemNumber: 103,
    name: "Refrescos en Lata, Malta, Caroreña Lata o Refrescos 1L - 2L",
    category: "sin-alcohol",
    section: "bebidas",
    description: "Variedad de refrescos de lata, Polar Malta, lata de Caroreña o botellas de 1L / 1.5L / 2L.",
    price: 2.00,
    tags: ["Refrescos"]
  }
];
