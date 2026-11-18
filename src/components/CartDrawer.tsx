import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ShoppingBag, 
  UtensilsCrossed, 
  Package, 
  Truck,
  CreditCard,
  Banknote,
  Smartphone,
  CircleDollarSign,
  SlidersHorizontal
} from 'lucide-react';
import { BRAND, COMIDAS, BEBIDAS } from '../data/menuData';
import type { MenuItem } from '../data/menuData';
import type { BcvRateState } from '../hooks/useBcvRate';
import { formatVes } from '../hooks/useBcvRate';

// Pre-instantiate combined catalog lookup once
const ALL_MENU_ITEMS = [...COMIDAS, ...BEBIDAS];

export interface CartCustomItem {
  item: MenuItem;
  qty: number;
  selectedOptions?: string[];
  notes?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [itemId: string]: number };
  customItems?: { [itemId: string]: { selectedOptions: string[]; notes: string } };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onEditItem?: (item: MenuItem) => void;
  onClearCart: () => void;
  bcv: BcvRateState;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  customItems = {},
  onAddToCart,
  onRemoveFromCart,
  onEditItem,
  onClearCart,
  bcv,
}) => {
  const [orderType, setOrderType] = useState<'mesa' | 'pickup' | 'delivery'>('mesa');
  const [paymentMethod, setPaymentMethod] = useState<'pago-movil' | 'efectivo' | 'zelle' | 'punto' | 'usdt'>('pago-movil');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableOrAddress, setTableOrAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Combine items to look up
  const cartEntries: {
    item: MenuItem;
    qty: number;
    selectedOptions?: string[];
    notes?: string;
  }[] = [];

  for (const [id, qty] of Object.entries(cart)) {
    if (qty <= 0) continue;
    const item = ALL_MENU_ITEMS.find((i) => i.id === id);
    if (!item) continue;
    const custom = customItems[id];
    cartEntries.push({
      item,
      qty,
      selectedOptions: custom?.selectedOptions,
      notes: custom?.notes,
    });
  }

  const subtotal = cartEntries.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0);
  const subtotalVes = formatVes(subtotal, bcv.rate);

  const handleSendToWhatsApp = async () => {
    if (cartEntries.length === 0) return;

    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore
    }

    const orderTypeLabel =
      orderType === 'mesa'
        ? 'Degustar en Mesa / Restaurante'
        : orderType === 'pickup'
        ? 'Para Retirar (Pick-Up)'
        : 'Delivery en San Diego';

    const paymentLabel =
      paymentMethod === 'pago-movil'
        ? `Pago Móvil (${bcv.rate ? `Tasa BCV Bs. ${bcv.rate.toFixed(2)}` : 'Tasa BCV'})`
        : paymentMethod === 'efectivo'
        ? 'Efectivo Divisas / Bolívares'
        : paymentMethod === 'zelle'
        ? 'Zelle'
        : paymentMethod === 'punto'
        ? 'Punto de Venta / Tarjeta en local'
        : 'USDT (Binance Pay)';

    // Sanitize single-line text inputs to prevent markdown/newline layout distortion
    const cleanName = customerName.replace(/[\r\n]+/g, ' ').trim();
    const cleanPhone = customerPhone.replace(/[\r\n]+/g, ' ').trim();
    const cleanAddress = tableOrAddress.replace(/[\r\n]+/g, ' ').trim();
    const cleanNotes = specialNotes.trim();

    let message = `🍽️ *NUEVO PEDIDO — TÍO SANTORINI RESTAURANT & LOUNGE*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📍 *Modalidad:* ${orderTypeLabel}\n`;
    message += `💳 *Método de Pago:* ${paymentLabel}\n`;
    if (cleanName) message += `👤 *Cliente:* ${cleanName}\n`;
    if (cleanPhone) message += `📞 *Contacto:* ${cleanPhone}\n`;
    if (cleanAddress) {
      message += orderType === 'mesa' ? `🪑 *Mesa/Zona:* ${cleanAddress}\n` : `🛵 *Dirección:* ${cleanAddress}\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📋 *DETALLE DEL PEDIDO:*\n\n`;

    cartEntries.forEach((entry) => {
      const lineTotal = (entry.item.price * entry.qty).toFixed(2);
      message += `• *#${entry.item.itemNumber}* ${entry.item.name}\n`;
      if (entry.selectedOptions && entry.selectedOptions.length > 0) {
        message += `   ↳ Opciones: ${entry.selectedOptions.join(', ')}\n`;
      }
      if (entry.notes) {
        message += `   ↳ Nota: ${entry.notes}\n`;
      }
      message += `   Cantidad: ${entry.qty} x $${entry.item.price.toFixed(2)} = *$${lineTotal} USD*\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL A PAGAR: $${subtotal.toFixed(2)} USD*\n`;
    if (subtotalVes) {
      message += `🇻🇪 *Equivalente Tasa BCV:* *${subtotalVes}*\n`;
    }
    if (cleanNotes) {
      message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `📝 *Observaciones Generales:* ${cleanNotes}\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Generado desde la web oficial de Tío Santorini Venezuela_`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        data-lenis-prevent
        className="relative z-10 w-full max-w-lg bg-[#081020] border-l border-white/10 h-[100dvh] max-h-[100dvh] flex flex-col shadow-2xl"
      >
        {/* Drawer Header */}
        <div className="shrink-0 p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0077b6]/30 border border-[#0077b6] flex items-center justify-center text-[#48cae4]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 id="cart-drawer-title" className="font-display font-bold text-white text-base">Mi Pedido</h3>
              <p className="text-[11px] text-slate-400">
                {cartEntries.length} {cartEntries.length === 1 ? 'ítem seleccionado' : 'ítems seleccionados'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartEntries.length > 0 && (
              <button
                onClick={onClearCart}
                className="p-2 text-slate-400 hover:text-rose-400 text-xs transition-colors"
                title="Vaciar carrito"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div
          data-lenis-prevent
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 space-y-6"
        >
          {cartEntries.length === 0 ? (
            <div className="py-16 text-center">
              <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-white font-medium text-sm">Tu pedido está vacío</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Explora los 88 platos o las 103 bebidas y agrega tus favoritos para coordinar con cocina.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold tracking-wide border border-white/10 transition-colors"
              >
                Ver la Carta
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Productos Seleccionados
                </p>
                {cartEntries.map(({ item, qty, selectedOptions, notes }) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-[#90e0ef]">
                          #{item.itemNumber}
                        </span>
                        <h5 className="text-xs sm:text-sm font-semibold text-white truncate">
                          {item.name}
                        </h5>
                      </div>

                      {/* Display custom options or notes if any */}
                      {selectedOptions && selectedOptions.length > 0 && (
                        <p className="text-[11px] text-[#48cae4] mt-0.5 font-light">
                          ↳ {selectedOptions.join(', ')}
                        </p>
                      )}
                      {notes && (
                        <p className="text-[10px] text-slate-400 italic">
                          ↳ Nota: {notes}
                        </p>
                      )}

                      <div className="flex items-center flex-wrap gap-2 mt-1.5">
                        <span className="text-[11px] text-slate-400 font-mono">
                          ${item.price.toFixed(2)} c/u
                        </span>
                        {bcv.rate && (
                          <span className="text-[10px] text-emerald-400/80 font-mono">
                            ≈ {formatVes(item.price, bcv.rate)}
                          </span>
                        )}
                        {onEditItem && (item.section === 'comidas' || item.options) && (
                          <button
                            type="button"
                            onClick={() => onEditItem(item)}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#90e0ef] hover:text-white px-2 py-0.5 rounded-full bg-[#0077b6]/25 border border-[#48cae4]/40 hover:bg-[#0077b6]/40 transition-colors cursor-pointer"
                          >
                            <SlidersHorizontal className="w-2.5 h-2.5" />
                            <span>Editar</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="font-mono text-xs font-bold text-white">
                        ${(item.price * qty).toFixed(2)}
                      </div>

                      <div className="flex items-center gap-1 bg-white/[0.06] rounded-lg p-0.5 border border-white/10">
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          aria-label={`Disminuir cantidad de ${item.name}`}
                          className="w-7 h-7 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-xs font-bold text-white px-2">
                          {qty}
                        </span>
                        <button
                          onClick={() => onAddToCart(item)}
                          aria-label={`Aumentar cantidad de ${item.name}`}
                          className="w-7 h-7 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Modalidad de Pedido
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('mesa')}
                    className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                      orderType === 'mesa'
                        ? 'bg-[#0077b6]/30 border-[#48cae4] text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <UtensilsCrossed className="w-4 h-4 text-[#48cae4]" />
                    <span className="text-[11px] font-medium leading-tight">En Mesa</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                      orderType === 'pickup'
                        ? 'bg-[#0077b6]/30 border-[#48cae4] text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Package className="w-4 h-4 text-[#48cae4]" />
                    <span className="text-[11px] font-medium leading-tight">Pick-Up</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#0077b6]/30 border-[#48cae4] text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#48cae4]" />
                    <span className="text-[11px] font-medium leading-tight">Delivery</span>
                  </button>
                </div>

                {/* Payment Methods */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Método de Pago
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pago-movil')}
                      className={`p-2 rounded-xl border text-left text-[11px] font-medium flex items-center gap-1.5 ${
                        paymentMethod === 'pago-movil'
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Pago Móvil (BCV)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('efectivo')}
                      className={`p-2 rounded-xl border text-left text-[11px] font-medium flex items-center gap-1.5 ${
                        paymentMethod === 'efectivo'
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Efectivo $ / Bs.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('zelle')}
                      className={`p-2 rounded-xl border text-left text-[11px] font-medium flex items-center gap-1.5 ${
                        paymentMethod === 'zelle'
                          ? 'bg-[#7414CA]/20 border-purple-400 text-purple-200'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <CircleDollarSign className="w-3.5 h-3.5 text-purple-400" />
                      <span>Zelle</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('punto')}
                      className={`p-2 rounded-xl border text-left text-[11px] font-medium flex items-center gap-1.5 ${
                        paymentMethod === 'punto'
                          ? 'bg-[#0077b6]/30 border-[#48cae4] text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <CreditCard className="w-3.5 h-3.5 text-[#48cae4]" />
                      <span>Punto de Venta</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('usdt')}
                      className={`p-2 rounded-xl border text-left text-[11px] font-medium flex items-center gap-1.5 col-span-2 sm:col-span-1 ${
                        paymentMethod === 'usdt'
                          ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="font-bold text-amber-400 text-[10px]">₮</span>
                      <span>Binance / USDT</span>
                    </button>
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-2.5 pt-2">
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0077b6]"
                  />

                  <input
                    type="tel"
                    placeholder="Teléfono o WhatsApp (opcional)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0077b6]"
                  />

                  <input
                    type="text"
                    placeholder={
                      orderType === 'mesa'
                        ? 'Número de mesa o zona (opcional)'
                        : orderType === 'pickup'
                        ? 'Hora estimada de retiro (opcional)'
                        : 'Dirección exacta en San Diego (urb., calle, casa)'
                    }
                    value={tableOrAddress}
                    onChange={(e) => setTableOrAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0077b6]"
                  />

                  <textarea
                    rows={2}
                    placeholder="Notas o especificaciones para cocina..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0077b6] resize-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Subtotal & WhatsApp CTA */}
        {cartEntries.length > 0 && (
          <div className="shrink-0 p-5 border-t border-white/10 bg-white/[0.02] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Total Estimado:</span>
                {subtotalVes && (
                  <p className="font-mono text-xs text-emerald-400 font-semibold mt-0.5">
                    ≈ {subtotalVes} (Tasa BCV)
                  </p>
                )}
              </div>
              <span className="font-mono text-2xl font-bold text-white">
                ${subtotal.toFixed(2)} <span className="text-xs font-normal text-slate-400">USD</span>
              </span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebe5d] hover:to-[#0e7467] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Enviar Pedido a WhatsApp</span>
            </button>

            <p className="text-[10px] text-center text-slate-400">
              Atención directa al <strong>(0424) 4463511</strong> • Abierto hasta las 3:00 AM
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
