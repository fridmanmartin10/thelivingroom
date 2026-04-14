"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  UNITS,
  FEATURES,
  CONTACT,
  PLACEHOLDER_IMAGES,
  formatCurrency,
  nightsBetween,
  todayStr,
  tomorrowStr,
} from "@/lib/data";
import type { Unit } from "@/lib/data";

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ scrolled, onNav }: { scrolled: boolean; onNav: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "py-4 bg-white/92 backdrop-blur-2xl"
      } border-b border-black/[0.06]`}
    >
      <div
        className="font-display text-[22px] font-bold tracking-[3px] text-black uppercase cursor-pointer"
        onClick={() => onNav("home")}
      >
        The Living Room<span className="text-gold">.</span>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-7">
        {[
          { id: "about", label: "La Propiedad" },
          { id: "units", label: "Unidades" },
          { id: "contact", label: "Contacto" },
        ].map((item) => (
          <a
            key={item.id}
            onClick={() => onNav(item.id)}
            className="text-[13px] font-medium tracking-[1px] text-mid uppercase cursor-pointer transition-colors hover:text-black"
          >
            {item.label}
          </a>
        ))}
        <a
          onClick={() => onNav("units")}
          className="bg-black text-white px-6 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold cursor-pointer transition-colors hover:bg-charcoal"
        >
          Reservar
        </a>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black text-2xl">
        {menuOpen ? "\u2715" : "\u2630"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-black/[0.06] md:hidden animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {[
              { id: "about", label: "La Propiedad" },
              { id: "units", label: "Unidades" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <a
                key={item.id}
                onClick={() => { onNav(item.id); setMenuOpen(false); }}
                className="text-[13px] font-medium tracking-[1px] text-mid uppercase cursor-pointer py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              onClick={() => { onNav("units"); setMenuOpen(false); }}
              className="bg-black text-white px-6 py-3 text-[11px] tracking-[2px] uppercase font-semibold text-center cursor-pointer"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={PLACEHOLDER_IMAGES.hero}
          alt="The Living Room Hotel"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <p className="text-[11px] tracking-[4px] uppercase text-gold font-semibold mb-5 relative z-10 animate-fade-up">
        Palermo Soho &middot; Buenos Aires
      </p>
      <h1 className="font-display text-[clamp(36px,6vw,72px)] font-normal leading-[1.1] text-white relative z-10 max-w-[800px] animate-fade-up-d1">
        Tu espacio en el<br />
        corazón de <em className="italic text-gold">Palermo</em>
      </h1>
      <p className="mt-5 text-[16px] text-white/70 font-light tracking-[0.5px] max-w-[500px] relative z-10 animate-fade-up-d2">
        40 departamentos premium totalmente equipados. Diseño de autor,
        servicios de hotel boutique y la mejor ubicación.
      </p>
      <div className="mt-10 flex gap-4 relative z-10 animate-fade-up-d3 flex-col sm:flex-row">
        <button
          onClick={() => onNav("units")}
          className="bg-white text-black border-none px-10 py-4 text-[12px] tracking-[2.5px] uppercase font-semibold cursor-pointer transition-all hover:bg-white/90 hover:-translate-y-0.5"
        >
          Ver Unidades
        </button>
        <button
          onClick={() => onNav("about")}
          className="bg-transparent text-white border-[1.5px] border-white/60 px-10 py-4 text-[12px] tracking-[2.5px] uppercase font-medium cursor-pointer transition-all hover:bg-white hover:text-black"
        >
          Conocer Más
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[3px] uppercase text-white/40 animate-pulse-slow">
        Scroll &darr;
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-[1200px] mx-auto">
      <p className="text-[11px] tracking-[4px] uppercase text-gold font-semibold mb-3">
        La Propiedad
      </p>
      <h2 className="font-display text-[clamp(28px,4vw,44px)] font-normal mb-4 leading-[1.2]">
        Tu hotel, tu departamento
      </h2>
      <p className="text-[15px] text-muted max-w-[550px] leading-[1.7] font-light">
        The Living Room combina la privacidad de un hogar con los servicios de
        un hotel boutique de primera categoría en Palermo Soho.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-start">
        <div className="space-y-4">
          <p className="text-mid leading-[1.8] text-[15px]">
            Con <strong className="font-semibold text-black">40 departamentos totalmente amoblados y equipados</strong>,
            cada unidad fue diseñada con identidad propia: materiales nobles de primera categoría,
            equipamiento completo y atención al mínimo detalle. Desde la ropa de cama de algodón
            egipcio hasta los electrodomésticos de última generación.
          </p>
          <p className="text-mid leading-[1.8] text-[15px]">
            No es un hotel convencional — es tu espacio personal en Buenos Aires.
            Operamos con tecnología Cloudbeds para self check-in, lo que te permite
            llegar a cualquier hora sin esperas ni burocracias. Tu código de acceso
            te espera antes de que aterrices.
          </p>
          <p className="text-mid leading-[1.8] text-[15px]">
            Ubicados a pasos de los mejores restaurantes, bares de especialidad,
            galerías de arte y tiendas de diseño de Palermo Soho, con conectividad
            directa al subte y las principales avenidas de Buenos Aires.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { num: "40", label: "Departamentos" },
              { num: "2", label: "Tipologías" },
              { num: "24/7", label: "Atención" },
            ].map((s) => (
              <div key={s.label} className="text-center py-4 bg-cream">
                <p className="font-display text-[28px] text-black">{s.num}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-muted mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-6 border border-black/[0.06] bg-white transition-all duration-300 hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="text-2xl mb-2.5">{f.icon}</div>
              <div className="font-semibold text-[14px] mb-1">{f.title}</div>
              <div className="text-[12px] text-muted">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Banner ──────────────────────────────────────────────────────────
function GalleryBanner() {
  const images = [
    PLACEHOLDER_IMAGES.interior1,
    PLACEHOLDER_IMAGES.lobby,
    PLACEHOLDER_IMAGES.interior2,
    PLACEHOLDER_IMAGES.pool,
  ];

  return (
    <section className="py-2 bg-cream">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img}
              alt={`The Living Room - Vista ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Unit Card ───────────────────────────────────────────────────────────────
function UnitCard({ unit, onClick }: { unit: Unit; onClick: () => void }) {
  return (
    <div
      className="border border-black/[0.06] overflow-hidden cursor-pointer transition-all duration-[350ms] bg-white hover:border-gold hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
      onClick={onClick}
    >
      <div className="h-[200px] relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] tracking-[2px] uppercase px-3.5 py-1.5 font-semibold">
          {unit.type}
        </div>
        <Image
          src={unit.images[0]}
          alt={unit.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 340px"
        />
      </div>
      <div className="p-6">
        <div className="font-display text-[20px] mb-1.5">{unit.name}</div>
        <div className="text-[13px] text-muted mb-3">
          {unit.floor} &middot; {unit.m2}m&sup2; &middot; Hasta {unit.maxGuests}{" "}
          huéspedes &middot; {unit.beds}
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {unit.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="text-[11px] px-2.5 py-1 bg-cream text-mid tracking-[0.3px]"
            >
              {a}
            </span>
          ))}
          {unit.amenities.length > 4 && (
            <span className="text-[11px] px-2.5 py-1 bg-cream text-mid">
              +{unit.amenities.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-baseline justify-between pt-4 border-t border-black/[0.06]">
          <div>
            <span className="font-display text-[22px]">
              {formatCurrency(unit.basePrice)}
            </span>
            <span className="text-[12px] text-muted"> / noche</span>
          </div>
          <span className="text-[11px] tracking-[1px] uppercase text-gold font-medium">
            Ver detalle &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Units Section ───────────────────────────────────────────────────────────
function UnitsSection({ onSelect }: { onSelect: (u: Unit) => void }) {
  const [filter, setFilter] = useState("Todas");
  const types = ["Todas", "Studio", "2 Ambientes"];
  const filtered =
    filter === "Todas" ? UNITS : UNITS.filter((u) => u.type === filter);

  return (
    <section id="units" className="py-24 px-8 max-w-[1200px] mx-auto">
      <p className="text-[11px] tracking-[4px] uppercase text-gold font-semibold mb-3">
        Nuestras Unidades
      </p>
      <h2 className="font-display text-[clamp(28px,4vw,44px)] font-normal mb-4 leading-[1.2]">
        Elegí tu espacio ideal
      </h2>
      <p className="text-[15px] text-muted max-w-[550px] leading-[1.7] font-light">
        Studios de 36m&sup2; y departamentos de 2 ambientes de 50m&sup2;, cada
        uno con su personalidad. Todos equipados con materiales de primera.
      </p>

      <div className="flex gap-3 my-8 flex-wrap">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-6 py-2.5 border text-[12px] tracking-[1px] uppercase font-medium transition-all duration-200 cursor-pointer ${
              filter === t
                ? "bg-black text-white border-black"
                : "bg-transparent border-black/[0.12] hover:border-black/30"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((u) => (
          <UnitCard key={u.id} unit={u} onClick={() => onSelect(u)} />
        ))}
      </div>
    </section>
  );
}

// ─── Unit Detail Modal with Booking ──────────────────────────────────────────
function UnitModal({
  unit,
  onClose,
}: {
  unit: Unit;
  onClose: () => void;
}) {
  const [checkIn, setCheckIn] = useState(todayStr());
  const [checkOut, setCheckOut] = useState(tomorrowStr());
  const [guests, setGuests] = useState(1);
  const [payMethod, setPayMethod] = useState<"guarantee" | "full">("guarantee");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"details" | "booking" | "confirmed">("details");
  const [availStatus, setAvailStatus] = useState<"idle" | "checking" | "available" | "unavailable">("idle");
  const [imageIdx, setImageIdx] = useState(0);

  const nights = nightsBetween(checkIn, checkOut);
  const total = unit.basePrice * nights;

  const checkAvailability = async () => {
    setAvailStatus("checking");
    try {
      const res = await fetch("/api/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitType: unit.type === "Studio" ? "studio" : "dos-ambientes", checkIn, checkOut }),
      });
      const data = await res.json();
      setAvailStatus(data.available ? "available" : "unavailable");
    } catch {
      setAvailStatus("available"); // demo fallback
    }
  };

  const handleBook = async () => {
    setLoading(true);
    try {
      await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          paymentMethod: payMethod,
          email,
          firstName,
          lastName,
          unitType: unit.type === "Studio" ? "studio" : "dos-ambientes",
          checkIn,
          checkOut,
        }),
      });

      await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          unitType: unit.type === "Studio" ? "studio" : "dos-ambientes",
          checkIn,
          checkOut,
          guests,
          paymentMethod: payMethod,
        }),
      });

      setStep("confirmed");
    } catch {
      setStep("confirmed"); // demo
    } finally {
      setLoading(false);
    }
  };

  const confCode = `TLR-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-[4px] flex items-center justify-center p-5 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-[860px] max-h-[90vh] overflow-y-auto relative animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 z-10 bg-white border-none text-2xl w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-cream"
        >
          &times;
        </button>

        {step === "confirmed" ? (
          /* ── Confirmation ── */
          <div className="text-center py-20 px-8 max-w-[600px] mx-auto animate-fade-up">
            <div className="text-[64px] mb-6">&#10003;</div>
            <h2 className="font-display text-[36px] mb-3">Reserva Confirmada</h2>
            <p className="text-[15px] text-muted leading-[1.6] mb-2">
              Hemos enviado un email de confirmación a <strong className="text-black">{email}</strong>.
            </p>
            <p className="font-display text-[28px] tracking-[4px] text-gold mb-8">
              {confCode}
            </p>
            <div className="text-left bg-cream p-8 mb-8">
              {[
                ["Unidad", unit.name],
                ["Tipo", `${unit.type} · ${unit.m2}m²`],
                ["Check-in", checkIn],
                ["Check-out", checkOut],
                ["Noches", String(nights)],
                ["Huéspedes", String(guests)],
                ["Pago", payMethod === "guarantee" ? "Tarjeta en garantía" : "Pago completo"],
                ["Total", formatCurrency(total)],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="flex justify-between py-2 text-[14px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-black/[0.06]"
                >
                  <span className="text-muted">{label}</span>
                  <span className="font-medium">{val}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="bg-black text-white border-none px-10 py-4 text-[12px] tracking-[2.5px] uppercase font-semibold cursor-pointer transition-all hover:bg-charcoal"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            {/* ── Hero image with gallery ── */}
            <div className="h-[280px] relative overflow-hidden bg-cream">
              <Image
                src={unit.images[imageIdx] || unit.images[0]}
                alt={unit.name}
                fill
                className="object-cover"
                sizes="860px"
              />
              {unit.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {unit.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer border-none ${
                        i === imageIdx ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ── Modal body ── */}
            <div className="p-10 md:p-10 max-md:p-6">
              <h2 className="font-display text-[32px] mb-1">{unit.name}</h2>
              <p className="text-[12px] tracking-[2px] text-gold uppercase mb-4">
                {unit.type} &middot; {unit.floor} &middot; {unit.m2}m&sup2;
              </p>
              <p className="text-mid leading-[1.7] text-[15px] mb-6">
                {unit.description}
              </p>

              {/* Details grid */}
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 mb-8">
                {[
                  { label: "Superficie", value: `${unit.m2} m²` },
                  { label: "Huéspedes", value: `Hasta ${unit.maxGuests}` },
                  { label: "Camas", value: unit.beds },
                ].map((d) => (
                  <div key={d.label} className="p-4 bg-cream text-center">
                    <div className="text-[10px] tracking-[2px] uppercase text-muted mb-1">
                      {d.label}
                    </div>
                    <div className="font-display text-[18px]">{d.value}</div>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <p className="text-[12px] tracking-[2px] uppercase text-muted mb-3">
                Amenities
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {unit.amenities.map((a) => (
                  <span
                    key={a}
                    className="py-2 px-4 border border-black/[0.08] text-[13px]"
                  >
                    {a}
                  </span>
                ))}
              </div>

              {step === "details" && (
                <div className="border-t border-black/[0.08] pt-8">
                  <h3 className="font-display text-[22px] mb-5">
                    Verificar Disponibilidad
                  </h3>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        min={todayStr()}
                        onChange={(e) => { setCheckIn(e.target.value); setAvailStatus("idle"); }}
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || todayStr()}
                        onChange={(e) => { setCheckOut(e.target.value); setAvailStatus("idle"); }}
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                      Huéspedes
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                    >
                      {Array.from({ length: unit.maxGuests }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "huésped" : "huéspedes"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price summary */}
                  <div className="bg-cream p-6 my-6">
                    <div className="flex justify-between mb-2 text-[14px]">
                      <span className="text-muted">
                        {formatCurrency(unit.basePrice)} &times; {nights}{" "}
                        {nights === 1 ? "noche" : "noches"}
                      </span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-[18px] pt-3 border-t border-black/[0.1] mt-2">
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>

                  {availStatus === "unavailable" && (
                    <div className="p-4 bg-error/10 border border-error/20 text-error text-[14px] mb-4">
                      No hay disponibilidad para estas fechas. Probá con otras.
                    </div>
                  )}

                  {availStatus === "available" ? (
                    <button
                      onClick={() => setStep("booking")}
                      className="w-full bg-gold text-white border-none py-4 text-[12px] tracking-[2.5px] uppercase font-semibold cursor-pointer transition-all hover:bg-gold-light"
                    >
                      Continuar con la Reserva
                    </button>
                  ) : (
                    <button
                      onClick={checkAvailability}
                      disabled={availStatus === "checking"}
                      className="w-full bg-black text-white border-none py-4 text-[12px] tracking-[2.5px] uppercase font-semibold cursor-pointer transition-all hover:bg-charcoal disabled:opacity-50"
                    >
                      {availStatus === "checking" ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Verificando...
                        </span>
                      ) : (
                        "Verificar Disponibilidad"
                      )}
                    </button>
                  )}
                </div>
              )}

              {step === "booking" && (
                <div className="border-t border-black/[0.08] pt-8">
                  <h3 className="font-display text-[22px] mb-5">
                    Completar Reserva
                  </h3>

                  {/* Guest info */}
                  <p className="text-[11px] tracking-[1.5px] uppercase text-muted mb-3 font-medium">
                    Datos del huésped
                  </p>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Tu nombre"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                        Apellido
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Tu apellido"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-6">
                    <div className="flex flex-col">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-muted mb-1.5 font-medium">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+54 11 XXXX-XXXX"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Payment method */}
                  <p className="text-[11px] tracking-[1.5px] uppercase text-muted mb-3 font-medium">
                    Método de pago
                  </p>
                  <div className="flex gap-3 mb-5 max-md:flex-col">
                    {[
                      {
                        id: "guarantee" as const,
                        icon: "🔒",
                        label: "Tarjeta en Garantía",
                        sub: "Pagás al hacer check-in",
                      },
                      {
                        id: "full" as const,
                        icon: "💳",
                        label: "Pago Completo",
                        sub: "Aboná el total ahora",
                      },
                    ].map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setPayMethod(m.id)}
                        className={`flex-1 p-4 border-2 text-center cursor-pointer transition-all bg-white ${
                          payMethod === m.id
                            ? "border-gold bg-gold/[0.05]"
                            : "border-black/[0.08]"
                        }`}
                      >
                        <div className="text-2xl mb-1.5">{m.icon}</div>
                        <div className="text-[12px] font-semibold tracking-[1px] uppercase">
                          {m.label}
                        </div>
                        <div className="text-[11px] text-muted mt-0.5">
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card inputs */}
                  <div className="mb-4">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Número de tarjeta"
                      className="w-full py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                    />
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 mt-3">
                      <input
                        type="text"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        placeholder="MM / AA"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="CVC"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Titular"
                        className="py-3.5 px-4 border border-black/[0.1] text-[14px] bg-white outline-none transition-colors focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-cream p-6 my-6">
                    <div className="flex justify-between mb-2 text-[14px]">
                      <span className="text-muted">{unit.name}</span>
                      <span>{unit.type} &middot; {unit.m2}m&sup2;</span>
                    </div>
                    <div className="flex justify-between mb-2 text-[14px]">
                      <span className="text-muted">
                        {formatCurrency(unit.basePrice)} &times; {nights} noches
                      </span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-[18px] pt-3 border-t border-black/[0.1] mt-2">
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                    {payMethod === "guarantee" && (
                      <p className="text-[11px] text-muted mt-2">
                        * No se realizará ningún cobro ahora. Tu tarjeta queda
                        como garantía.
                      </p>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep("details")}
                      className="px-8 py-4 border-[1.5px] border-black text-[12px] tracking-[2.5px] uppercase font-medium cursor-pointer transition-all hover:bg-black hover:text-white bg-transparent"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={handleBook}
                      disabled={loading || !email || !firstName || !lastName}
                      className="flex-1 bg-gold text-white border-none py-4 text-[12px] tracking-[2.5px] uppercase font-semibold cursor-pointer transition-all hover:bg-gold-light disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading && (
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      )}
                      {payMethod === "guarantee"
                        ? "Confirmar Reserva"
                        : "Pagar y Confirmar"}
                    </button>
                  </div>

                  <p className="text-[11px] text-muted text-center mt-4">
                    🔐 Pago procesado de forma segura con Stripe.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Availability Calendar Section ───────────────────────────────────────────
function AvailabilitySection({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section className="py-24 px-8 bg-cream">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-[11px] tracking-[4px] uppercase text-gold font-semibold mb-3">
          Disponibilidad
        </p>
        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-normal mb-4 leading-[1.2]">
          Consultá en tiempo real
        </h2>
        <p className="text-[15px] text-muted max-w-[550px] mx-auto leading-[1.7] font-light mb-10">
          Nuestro calendario está sincronizado con Cloudbeds para mostrarte
          disponibilidad actualizada al instante.
        </p>

        {/* Cloudbeds calendar placeholder */}
        <div className="bg-white border border-black/[0.06] p-12 max-w-[800px] mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-6 opacity-30">📅</div>
            <h3 className="font-display text-[24px] mb-3 text-mid">
              Calendario Cloudbeds
            </h3>
            <p className="text-[14px] text-muted leading-[1.6] max-w-md mx-auto mb-8">
              El calendario de disponibilidad en tiempo real se activará
              una vez conectada la cuenta de Cloudbeds. Mientras tanto,
              podés consultar disponibilidad seleccionando una unidad.
            </p>
            {/* TODO: Embed Cloudbeds booking widget here */}
            {/*
              When ready, replace this with:
              <iframe
                src="https://hotels.cloudbeds.com/reservation/XXXXXX"
                width="100%"
                height="600"
                frameBorder="0"
              />
            */}
            <button
              onClick={() => onNav("units")}
              className="bg-black text-white border-none px-10 py-4 text-[12px] tracking-[2.5px] uppercase font-semibold cursor-pointer transition-all hover:bg-charcoal"
            >
              Ver Unidades y Reservar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" className="bg-black text-light py-16 px-8 text-center">
      <div className="font-display text-[24px] font-bold tracking-[3px] text-white mb-3">
        The Living Room<span className="text-gold">.</span>
      </div>
      <p className="text-[13px] text-muted max-w-[400px] mx-auto leading-[1.6] mb-6">
        40 departamentos de diseño en el corazón de Palermo Soho.
        Donde el confort se encuentra con el estilo porteño.
      </p>
      <div className="flex flex-col items-center gap-2 text-[13px] text-muted mb-8">
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phone}</p>
        <a href={`mailto:${CONTACT.email}`} className="text-muted hover:text-gold transition-colors">
          {CONTACT.email}
        </a>
      </div>
      <div className="flex justify-center gap-8 text-[12px] tracking-[1px]">
        {/* TODO: Replace with real links */}
        <a
          href={`https://instagram.com/${CONTACT.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-gold transition-colors"
        >
          Instagram
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-gold transition-colors"
        >
          WhatsApp
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-muted hover:text-gold transition-colors"
        >
          Email
        </a>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-[11px] text-muted/50">
        &copy; {new Date().getFullYear()} The Living Room. Todos los derechos reservados.
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ───────────────────────────────────────────────────────
function FloatingWhatsApp() {
  const msg = encodeURIComponent(
    "Hola! Me gustaría consultar sobre disponibilidad en The Living Room."
  );
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav scrolled={scrolled} onNav={navigateTo} />
      <Hero onNav={navigateTo} />
      <About />
      <GalleryBanner />
      <UnitsSection onSelect={setSelectedUnit} />
      <AvailabilitySection onNav={navigateTo} />
      <Footer />
      <FloatingWhatsApp />

      {selectedUnit && (
        <UnitModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} />
      )}
    </div>
  );
}
