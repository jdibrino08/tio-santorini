import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuExplorer } from './components/MenuExplorer';
import { LoungeExperience } from './components/LoungeExperience';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { BRAND } from './data/menuData';
import type { MenuItem } from './data/menuData';
import { useBcvRate } from './hooks/useBcvRate';
import { MessageCircle, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'comidas' | 'bebidas'>('comidas');
  const [cart, setCart] = useState<{ [itemId: string]: number }>(() => {
    try {
      const saved = localStorage.getItem('santorini_cart');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [customItems, setCustomItems] = useState<{
    [itemId: string]: { selectedOptions: string[]; notes: string };
  }>(() => {
    try {
      const saved = localStorage.getItem('santorini_custom_items');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [isEditingExisting, setIsEditingExisting] = useState(false);

  // Live BCV official exchange rate hook
  const bcv = useBcvRate();

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause Lenis & lock background scroll whenever a drawer or modal is open
  useEffect(() => {
    const isOverlayOpen = isCartOpen || Boolean(customizingItem);
    if (isOverlayOpen) {
      lenisRef.current?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenisRef.current?.start();
      document.body.style.overflow = '';
    };
  }, [isCartOpen, customizingItem]);

  // Sync cart & custom items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('santorini_cart', JSON.stringify(cart));
      localStorage.setItem('santorini_custom_items', JSON.stringify(customItems));
    } catch {
      // Ignore
    }
  }, [cart, customItems]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleOpenCustomizer = (item: MenuItem, editExisting = false) => {
    setIsEditingExisting(editExisting);
    setCustomizingItem(item);
  };

  const handleConfirmCustomItem = (
    item: MenuItem,
    selectedOptions: string[],
    notes: string,
    quantity: number = 1,
    editExisting: boolean = false
  ) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: editExisting
        ? Math.max(1, quantity)
        : (prev[item.id] || 0) + Math.max(1, quantity),
    }));

    if (selectedOptions.length > 0 || notes.trim().length > 0) {
      setCustomItems((prev) => ({
        ...prev,
        [item.id]: {
          selectedOptions,
          notes: notes.trim(),
        },
      }));
    } else if (editExisting) {
      setCustomItems((prev) => {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      });
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const current = prev[itemId] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[itemId];
        setCustomItems((prevCustom) => {
          const customCopy = { ...prevCustom };
          delete customCopy[itemId];
          return customCopy;
        });
        return copy;
      }
      return {
        ...prev,
        [itemId]: current - 1,
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
    setCustomItems({});
  };

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDrinks = () => {
    setActiveTab('bebidas');
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060c18] text-slate-100 flex flex-col font-sans selection:bg-[#0077b6]/40">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onExploreMenu={scrollToMenu} />
        
        <MenuExplorer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenCustomizer={handleOpenCustomizer}
          bcv={bcv}
        />

        <LoungeExperience onExploreDrinks={scrollToDrinks} />

        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart & WhatsApp Checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        customItems={customItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onEditItem={(item) => {
          setIsCartOpen(false);
          handleOpenCustomizer(item, true);
        }}
        onClearCart={handleClearCart}
        bcv={bcv}
      />

      {/* Item Customizer Modal (all food items + customizable drinks) */}
      <ItemCustomizerModal
        key={`${customizingItem?.id ?? 'closed'}-${isEditingExisting ? 'edit' : 'new'}`}
        item={customizingItem}
        onClose={() => {
          setCustomizingItem(null);
          setIsEditingExisting(false);
        }}
        onConfirm={handleConfirmCustomItem}
        bcvRate={bcv.rate}
        initialOptions={
          customizingItem && isEditingExisting
            ? customItems[customizingItem.id]?.selectedOptions || []
            : []
        }
        initialNotes={
          customizingItem && isEditingExisting
            ? customItems[customizingItem.id]?.notes || ''
            : ''
        }
        initialQuantity={
          customizingItem && isEditingExisting ? cart[customizingItem.id] || 1 : 1
        }
        isEditingExisting={isEditingExisting}
      />

      {/* Sticky Bottom Actions on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir pedido con ítems"
            className="flex items-center gap-2.5 px-5 py-3 rounded-full btn-glass-aegean text-white font-bold text-xs tracking-wide shadow-[0_8px_30px_rgba(0,180,216,0.45)] transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#90e0ef]" />
            <span>Ver Pedido ({totalCartCount})</span>
          </button>
        )}

        <a
          href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
            'Hola Santorini Venezuela, deseo consultar disponibilidad y reservar una mesa / hacer un pedido.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
