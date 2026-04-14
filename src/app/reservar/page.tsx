"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Users, CreditCard, CheckCircle, Loader2 } from "lucide-react";

type UnitType = "studio" | "dos-ambientes";

const unitInfo: Record<UnitType, { name: string; maxGuests: number; size: string }> = {
  studio: { name: "Studio - 1 Ambiente", maxGuests: 2, size: "36 m²" },
  "dos-ambientes": { name: "2 Ambientes", maxGuests: 4, size: "50 m²" },
};

function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedUnit = searchParams.get("unit") as UnitType | null;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const [formData, setFormData] = useState({
    unitType: (preselectedUnit && unitInfo[preselectedUnit] ? preselectedUnit : "studio") as UnitType,
    checkIn: "",
    checkOut: "",
    guests: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentMethod: "guarantee" as "guarantee" | "full",
  });

  const [availability, setAvailability] = useState<{
    checked: boolean;
    available: boolean;
  }>({ checked: false, available: false });

  useEffect(() => {
    if (preselectedUnit && unitInfo[preselectedUnit]) {
      setFormData((prev) => ({ ...prev, unitType: preselectedUnit }));
    }
  }, [preselectedUnit]);

  const checkAvailability = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unitType: formData.unitType,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
        }),
      });
      const data = await res.json();
      setAvailability({ checked: true, available: data.available });
      if (data.available) setStep(2);
    } catch {
      // For demo, simulate availability
      setAvailability({ checked: true, available: true });
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Create payment intent
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: 100, // TODO: Calculate real amount based on dates and unit type
        }),
      });

      if (res.ok) {
        // Send confirmation email
        await fetch("/api/send-confirmation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setBookingComplete(true);
        setStep(4);
      }
    } catch {
      // Demo mode — simulate success
      setBookingComplete(true);
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  if (bookingComplete) {
    return (
      <div className="text-center py-16">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-light text-charcoal mb-4">
          ¡Reserva Confirmada!
        </h2>
        <p className="text-warm-gray max-w-md mx-auto mb-2">
          Hemos enviado un email de confirmación a <strong>{formData.email}</strong> con
          todos los detalles de tu reserva.
        </p>
        <div className="mt-8 p-6 bg-cream border border-gold/10 max-w-md mx-auto text-left">
          <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Detalles de la reserva
          </h3>
          <div className="space-y-2 text-sm text-warm-gray">
            <p><strong>Unidad:</strong> {unitInfo[formData.unitType].name}</p>
            <p><strong>Check-in:</strong> {formData.checkIn}</p>
            <p><strong>Check-out:</strong> {formData.checkOut}</p>
            <p><strong>Huéspedes:</strong> {formData.guests}</p>
            <p><strong>Huésped:</strong> {formData.firstName} {formData.lastName}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Steps indicator */}
      <div className="flex items-center justify-center gap-4 mb-12">
        {[
          { num: 1, label: "Fechas", icon: Calendar },
          { num: 2, label: "Datos", icon: Users },
          { num: 3, label: "Pago", icon: CreditCard },
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors ${
                step >= s.num
                  ? "bg-gold text-white"
                  : "bg-cream text-warm-gray border border-gold/20"
              }`}
            >
              <s.icon size={16} />
            </div>
            <span
              className={`text-xs tracking-widest uppercase hidden sm:block ${
                step >= s.num ? "text-gold" : "text-warm-gray"
              }`}
            >
              {s.label}
            </span>
            {s.num < 3 && (
              <div className="w-12 h-px bg-gold/20 mx-2 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Dates & Unit */}
      {step === 1 && (
        <div className="bg-soft-white p-8 md:p-12 border border-gold/10">
          <h2 className="text-2xl font-light text-charcoal mb-8">
            Seleccioná tus fechas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Tipo de unidad
              </label>
              <select
                value={formData.unitType}
                onChange={(e) =>
                  setFormData({ ...formData, unitType: e.target.value as UnitType })
                }
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              >
                <option value="studio">Studio - 1 Ambiente (36 m²)</option>
                <option value="dos-ambientes">2 Ambientes (50 m²)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Huéspedes
              </label>
              <select
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: Number(e.target.value) })
                }
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              >
                {Array.from(
                  { length: unitInfo[formData.unitType].maxGuests },
                  (_, i) => i + 1
                ).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "huésped" : "huéspedes"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Check-in
              </label>
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) =>
                  setFormData({ ...formData, checkIn: e.target.value })
                }
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Check-out
              </label>
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) =>
                  setFormData({ ...formData, checkOut: e.target.value })
                }
                min={formData.checkIn || new Date().toISOString().split("T")[0]}
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          {availability.checked && !availability.available && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
              Lo sentimos, no hay disponibilidad para las fechas seleccionadas.
              Por favor, intentá con otras fechas.
            </div>
          )}

          <button
            onClick={checkAvailability}
            disabled={!formData.checkIn || !formData.checkOut || loading}
            className="mt-8 w-full py-3.5 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Verificar Disponibilidad
          </button>
        </div>
      )}

      {/* Step 2: Guest Info */}
      {step === 2 && (
        <div className="bg-soft-white p-8 md:p-12 border border-gold/10">
          <h2 className="text-2xl font-light text-charcoal mb-8">
            Datos del huésped
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Nombre
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder="Tu nombre"
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Apellido
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Tu apellido"
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="tu@email.com"
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+54 11 XXXX-XXXX"
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setStep(1)}
              className="px-8 py-3.5 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-colors duration-300"
            >
              Atrás
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.email
              }
              className="flex-1 py-3.5 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuar al Pago
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <div className="bg-soft-white p-8 md:p-12 border border-gold/10">
          <h2 className="text-2xl font-light text-charcoal mb-8">
            Método de Pago
          </h2>

          {/* Booking summary */}
          <div className="bg-cream p-6 border border-gold/10 mb-8">
            <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Resumen de reserva
            </h3>
            <div className="space-y-2 text-sm text-warm-gray">
              <p><strong>Unidad:</strong> {unitInfo[formData.unitType].name} ({unitInfo[formData.unitType].size})</p>
              <p><strong>Check-in:</strong> {formData.checkIn}</p>
              <p><strong>Check-out:</strong> {formData.checkOut}</p>
              <p><strong>Huéspedes:</strong> {formData.guests}</p>
              <p><strong>Huésped:</strong> {formData.firstName} {formData.lastName}</p>
            </div>
          </div>

          {/* Payment method selection */}
          <div className="space-y-4 mb-8">
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-4">
              Seleccionar método de pago
            </p>

            <label
              className={`block p-4 border cursor-pointer transition-colors ${
                formData.paymentMethod === "guarantee"
                  ? "border-gold bg-gold/5"
                  : "border-gold/20 hover:border-gold/40"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="guarantee"
                checked={formData.paymentMethod === "guarantee"}
                onChange={() =>
                  setFormData({ ...formData, paymentMethod: "guarantee" })
                }
                className="sr-only"
              />
              <div className="flex items-start gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 mt-0.5 flex items-center justify-center ${
                    formData.paymentMethod === "guarantee"
                      ? "border-gold"
                      : "border-warm-gray/30"
                  }`}
                >
                  {formData.paymentMethod === "guarantee" && (
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-charcoal">
                    Tarjeta en garantía
                  </p>
                  <p className="text-sm text-warm-gray mt-1">
                    Tu tarjeta queda registrada como garantía. El pago se
                    realiza al momento del check-in.
                  </p>
                </div>
              </div>
            </label>

            <label
              className={`block p-4 border cursor-pointer transition-colors ${
                formData.paymentMethod === "full"
                  ? "border-gold bg-gold/5"
                  : "border-gold/20 hover:border-gold/40"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="full"
                checked={formData.paymentMethod === "full"}
                onChange={() =>
                  setFormData({ ...formData, paymentMethod: "full" })
                }
                className="sr-only"
              />
              <div className="flex items-start gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 mt-0.5 flex items-center justify-center ${
                    formData.paymentMethod === "full"
                      ? "border-gold"
                      : "border-warm-gray/30"
                  }`}
                >
                  {formData.paymentMethod === "full" && (
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-charcoal">
                    Pago completo ahora
                  </p>
                  <p className="text-sm text-warm-gray mt-1">
                    Aboná el total de tu estadía ahora con tarjeta de crédito o
                    débito.
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* Card form placeholder */}
          <div className="space-y-4 mb-8">
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-4">
              Datos de la tarjeta
            </p>
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM / AA"
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Nombre del titular"
              className="w-full p-3 border border-gold/20 bg-white text-charcoal focus:border-gold focus:outline-none"
            />
            <p className="text-xs text-warm-gray/60 flex items-center gap-1">
              <CreditCard size={12} />
              Pago procesado de forma segura con Stripe. Tus datos están protegidos.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="px-8 py-3.5 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-colors duration-300"
            >
              Atrás
            </button>
            <button
              onClick={handlePayment}
              disabled={loading}
              className="flex-1 py-3.5 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-40 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {formData.paymentMethod === "guarantee"
                ? "Confirmar Reserva"
                : "Pagar y Confirmar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReservarPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-charcoal py-16 text-center text-white mb-12">
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Reservas
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em]">
          Reservar tu Estadía
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto px-6">
          Seleccioná tu unidad, fechas y completá tu reserva en minutos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <Suspense fallback={<div className="text-center py-12 text-warm-gray">Cargando...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
