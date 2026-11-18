// Curated, high-resolution authentic food photography for Tío Santorini Restaurant & Lounge
// Optimized with w=600&q=75&fm=webp for fast mobile loading and crisp split-card display

export function getMenuItemImage(itemNumber: number, section: 'comidas' | 'bebidas', category: string): string {
  if (section === 'comidas') {
    // Entradas
    if (itemNumber === 1) {
      // Buschetas Mixtas
      return "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 2) {
      // Queso a la Plancha
      return "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 3 || itemNumber === 4) {
      // Arepitas
      return "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 5) {
      // Dedos de Mozzarella
      return "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 6) {
      // Carpaccio de Lomito
      return "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 7) {
      // Coctel de Camarones
      return "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 8) {
      // Salpicon de Mariscos
      return "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 9) {
      // Tequeños
      return "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 10) {
      // Empanaditas
      return "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 11) {
      // Chupe de Camarones
      return "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 12) {
      // Carpaccio de Salmon
      return "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Ensaladas & Sopas
    if (itemNumber >= 13 && itemNumber <= 15) {
      // César
      return "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 16 || itemNumber === 20) {
      // Ensalada Española / Mixta
      return "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber >= 17 && itemNumber <= 19) {
      // Sopas y cremas marinas
      return "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Paellas & Mariscos
    if (itemNumber === 21 || itemNumber === 22 || itemNumber === 23) {
      // Paella y Fideuá
      return "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 24) {
      // Róbalo
      return "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 25 || itemNumber === 27) {
      // Caldereta & Trío marino
      return "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 26 || itemNumber === 28) {
      // Pulpo a la Gallega / Grillado
      return "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Pastas
    if (itemNumber === 35) {
      // Pasticho
      return "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber >= 29 && itemNumber <= 34) {
      // Pastas italianas (verified working Unsplash URL)
      return "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Cortes & Especialidades
    if (itemNumber === 36 || itemNumber === 39 || itemNumber === 40 || itemNumber === 42 || itemNumber === 46) {
      // Lomito / Solomo / Punta trasera
      return "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 37) {
      // Estofado de cordero
      return "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 38 || itemNumber === 41 || itemNumber === 43) {
      // Trío de carnes / Punta de cerdo / Lechón
      return "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 44 || itemNumber === 45) {
      // Cartoccio / Pollo a la suiza
      return "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Parrillas para 6 Personas
    if (itemNumber >= 47 && itemNumber <= 52) {
      // Gran Parrillada
      return "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Pizzas
    if (itemNumber >= 53 && itemNumber <= 62) {
      // Pizzas artesanales
      return "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Shawarmas & Platos Árabes
    if (itemNumber >= 63 && itemNumber <= 73) {
      // Shawarma / Kibbe / Falafel / Tabule
      return "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Hamburguesas, Pepitos & Promos
    if (itemNumber === 74) {
      // Choripapas
      return "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 75 || itemNumber === 76) {
      // Pollo broaster / tenders
      return "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber >= 77 && itemNumber <= 82) {
      // Hamburguesas
      return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber === 83 || itemNumber === 84) {
      // Pepitos
      return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=75&fm=webp";
    }
    if (itemNumber >= 85 && itemNumber <= 88) {
      // Promociones
      return "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75&fm=webp";
    }

    // Fallback comida
    return "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=75&fm=webp";
  }

  // BEBIDAS
  if (category === 'cocteles') {
    return "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=75&fm=webp";
  }
  if (category === 'whisky-ron') {
    return "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=75&fm=webp";
  }
  if (category === 'vinos-licores') {
    return "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=75&fm=webp";
  }
  if (category === 'servicios-botellas') {
    return "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=75&fm=webp";
  }
  if (category === 'shots-cervezas') {
    return "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=75&fm=webp";
  }
  return "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=75&fm=webp";
}
