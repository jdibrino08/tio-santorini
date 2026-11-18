import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, Users, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/menuData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const LocationContact: React.FC = () => {
  const [resName, setResName] = useState('');
  const [resPhone, setResPhone] = useState('');
  const [resGuests, setResGuests] = useState('2');
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [resOccasion, setResOccasion] = useState('Salida Casual');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `🍷 *SOLICITUD DE RESERVA — SANTORINI VENEZUELA*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `👤 *Nombre:* ${resName || 'Cliente'}\n`;
    if (resPhone) text += `📞 *Teléfono:* ${resPhone}\n`;
    text += `👥 *Comensales:* ${resGuests} personas\n`;
    if (resDate) text += `📅 *Fecha:* ${resDate}\n`;
    if (resTime) text += `⏰ *Hora:* ${resTime}\n`;
    text += `🎉 *Ocasión:* ${resOccasion}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `_Por favor confirmar disponibilidad de mesa._`;

    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);

    const url = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 relative bg-[#060c18] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-[#90e0ef] uppercase tracking-widest mb-3">
            <span>Visítanos o Contáctanos</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ubicación & Reservas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Estamos ubicados en San Diego, Carabobo. Tu mesa o tu pedido te esperan de lunes a domingo de 11:00 AM a 3:00 AM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards: Contact Info & Schedule */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl glass-panel relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0077b6]/20 border border-[#0077b6]/40 flex items-center justify-center text-[#48cae4] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Contacto & WhatsApp
                  </p>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="text-xl sm:text-2xl font-bold font-mono text-white hover:text-[#48cae4] transition-colors block mt-1"
                  >
                    {BRAND.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Atención inmediata para reservas, delivery o consultas de carta.
                  </p>
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold border border-[#25D366]/40 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Chatear por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 rounded-3xl glass-panel group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Instagram Oficial
                  </p>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold text-white hover:text-pink-300 transition-colors block mt-1"
                  >
                    {BRAND.instagram}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Historias diarias, especiales de coctelería y eventos en vivo.
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule & Location Details */}
            <div className="p-6 rounded-3xl glass-panel">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#48cae4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Horario de Atención
                    </h4>
                    <p className="text-sm font-semibold text-[#90e0ef] mt-0.5">
                      Lunes a Domingo • 11:00 AM a 3:00 AM
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Cocina caliente y barra activas hasta el cierre.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#48cae4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Dirección
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      San Diego, Estado Carabobo, Venezuela
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fácil acceso, estacionamiento cómodo y zona segura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Table Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden">
              <div className="mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Reserva tu Mesa en Santorini
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Completa los datos y te confirmaremos tu mesa de forma instantánea a través de WhatsApp.
                </p>
              </div>

              {sentSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-3 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Tu solicitud fue enviada a WhatsApp. En breve nuestro equipo la confirmará.</span>
                </div>
              )}

              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={resName}
                      onChange={(e) => setResName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0077b6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej. 0424-1234567"
                      value={resPhone}
                      onChange={(e) => setResPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0077b6] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#48cae4]" />
                        Comensales
                      </span>
                    </label>
                    <select
                      value={resGuests}
                      onChange={(e) => setResGuests(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#091222] border border-white/10 text-xs text-white focus:outline-none focus:border-[#0077b6]"
                    >
                      <option value="1">1 Persona</option>
                      <option value="2">2 Personas (Pareja)</option>
                      <option value="4">4 Personas</option>
                      <option value="6">6 Personas</option>
                      <option value="8">8 Personas</option>
                      <option value="10+">10+ Personas (Grupo / Evento)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#48cae4]" />
                        Fecha
                      </span>
                    </label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#091222] border border-white/10 text-xs text-white focus:outline-none focus:border-[#0077b6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#48cae4]" />
                        Hora deseada
                      </span>
                    </label>
                    <input
                      type="time"
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#091222] border border-white/10 text-xs text-white focus:outline-none focus:border-[#0077b6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Motivo u Ocasión Especial
                  </label>
                  <select
                    value={resOccasion}
                    onChange={(e) => setResOccasion(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#091222] border border-white/10 text-xs text-white focus:outline-none focus:border-[#0077b6]"
                  >
                    <option value="Salida Casual">Salida Casual con Amigos</option>
                    <option value="Cena Romántica">Cena Romántica en Pareja</option>
                    <option value="Celebración de Cumpleaños">Celebración de Cumpleaños</option>
                    <option value="Aniversario">Aniversario</option>
                    <option value="Reunión de Negocios">Cena / Almuerzo de Negocios</option>
                    <option value="Noche de Tragos & Lounge">Noche de Cócteles & Lounge</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#0077b6] via-[#0096c7] to-[#48cae4] hover:from-[#0096c7] hover:to-[#90e0ef] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_25px_rgba(0,119,182,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Solicitar Reserva por WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Sin intermediarios • Confirmación directa con el host de sala
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
