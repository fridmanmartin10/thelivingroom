import Link from "next/link";

export const metadata = {
  title: "PAMPA club — Placas para historias",
  description:
    "Colección de placas 9:16 para subir a historias de Instagram anunciando la mudanza y la nueva propuesta wellness.",
};

/* — Cada placa es 9:16 (1080×1920 escalado), pensada para captura de pantalla — */

type Stat = "primary" | "alt" | "dark";

function Card({
  children,
  bg = "verde",
  className = "",
  num,
  tag,
}: {
  children: React.ReactNode;
  bg?: "verde" | "tierra" | "crema" | "sage" | "negro" | "paper";
  className?: string;
  num: string;
  tag: string;
}) {
  const palettes: Record<string, string> = {
    verde: "bg-verde text-paper",
    tierra: "bg-tierra text-paper",
    crema: "bg-crema text-verde",
    sage: "bg-sage text-paper",
    negro: "bg-negro text-paper",
    paper: "bg-paper text-verde",
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-negro/55">
        <span>Placa {num}</span>
        <span>{tag}</span>
      </div>
      <div
        className={`aspect-[9/16] w-full ${palettes[bg]} overflow-hidden relative shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function HistoriasPage() {
  return (
    <main className="min-h-screen bg-paper text-negro grain">
      {/* Header */}
      <header className="border-b border-verde/15">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
          <Link href="/" className="logo-pampa">
            <span className="pampa text-2xl text-verde">PAMPA</span>
            <span className="club text-lg text-negro/70">club</span>
          </Link>
          <Link
            href="/"
            className="text-[11px] tracking-[0.25em] uppercase ulink text-verde"
          >
            ← Volver a la casa
          </Link>
        </div>
      </header>

      {/* Intro */}
      <section className="py-20 md:py-28 border-b border-verde/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[11px] tracking-[0.3em] uppercase text-tierra mb-6">
            Kit de historias · 9:16
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-verde mb-8">
            Placas para anunciar
            <br />
            la mudanza.
          </h1>
          <p className="font-serif italic text-2xl text-negro/75 max-w-3xl mb-6">
            Una secuencia pensada para subirse en orden a historias de
            Instagram. Comunican la mudanza, la nueva propuesta de wellness y
            cierran con la invitación al club.
          </p>
          <p className="text-sm text-negro/65 max-w-2xl leading-relaxed">
            Tomá captura de cada placa (formato 9:16, ya optimizado para
            stories) y subila como historia. Sugerencia: una placa por día
            durante una semana, en este orden.
          </p>
        </div>
      </section>

      {/* Grid de placas */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {/* 01 — Anuncio */}
          <Card num="01" tag="Apertura · Verde" bg="verde">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] tracking-[0.3em] uppercase text-paper/55">
                <span>Buenos Aires · 2026</span>
                <span>m.</span>
              </div>
              <div>
                <div className="font-display text-paper text-[18vw] sm:text-[7rem] leading-[0.82] -tracking-[0.04em]">
                  NOS
                  <br />
                  MUDA-
                  <br />
                  MOS.
                </div>
                <div className="mt-6 font-serif italic text-paper/85 text-2xl sm:text-3xl">
                  tres cuadras
                  <br />
                  más allá.
                </div>
              </div>
              <div className="logo-pampa">
                <span className="pampa text-paper text-3xl">PAMPA</span>
                <span className="club text-paper/85 text-xl">club</span>
              </div>
            </div>
          </Card>

          {/* 02 — Sumamos wellness */}
          <Card num="02" tag="Anuncio · Tierra" bg="tierra">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="text-[9px] tracking-[0.3em] uppercase text-paper/65">
                Una nueva capa
              </div>
              <div>
                <div className="font-serif italic text-paper text-3xl sm:text-4xl leading-snug mb-6">
                  Mismo café.
                  <br />
                  Misma cocina.
                </div>
                <div className="font-display text-paper text-[15vw] sm:text-[5.5rem] leading-[0.85] -tracking-[0.04em]">
                  SUMA-
                  <br />
                  MOS
                  <br />
                  WELL-
                  <br />
                  NESS.
                </div>
              </div>
              <div className="border-t border-paper/30 pt-4 text-[10px] tracking-[0.25em] uppercase text-paper/75">
                Yoga · Pilates · Comunidad
              </div>
            </div>
          </Card>

          {/* 03 — Logo Reveal */}
          <Card num="03" tag="Logo reveal · Crema" bg="crema">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="text-[9px] tracking-[0.3em] uppercase text-verde/60">
                Brand book · v.01
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-verde text-[28vw] sm:text-[9rem] leading-[0.82]">
                  PAMPA
                </span>
                <span className="font-serif italic text-tierra text-[18vw] sm:text-[5.5rem] leading-none -mt-2 self-end mr-4">
                  club
                </span>
                <div className="font-serif italic text-verde/70 text-xl mt-10">
                  un círculo privado
                  <br />
                  de bienestar urbano —
                </div>
              </div>
              <div className="text-center text-[10px] tracking-[0.3em] uppercase text-verde/55">
                Próximamente · Belgrano
              </div>
            </div>
          </Card>

          {/* 04 — Manifiesto */}
          <Card num="04" tag="Manifiesto · Negro" bg="negro">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="text-[9px] tracking-[0.3em] uppercase text-paper/45">
                Manifiesto · 01
              </div>
              <div className="font-serif italic text-paper text-2xl sm:text-3xl leading-[1.25] space-y-3">
                <p>Cuidarse no es performance.</p>
                <p>Un buen plato vale tanto como una buena clase.</p>
                <p>La comunidad se construye en mesas chicas.</p>
                <p className="text-tierra pt-4">
                  El lujo de hoy es tener tiempo para vos.
                </p>
              </div>
              <div className="logo-pampa">
                <span className="pampa text-paper text-2xl">PAMPA</span>
                <span className="club text-paper/80 text-lg">club</span>
              </div>
            </div>
          </Card>

          {/* 05 — Movimiento (Pilates) */}
          <Card num="05" tag="Pilates · Tierra" bg="tierra">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] tracking-[0.3em] uppercase text-paper/65">
                <span>Move · 02</span>
                <span>BA</span>
              </div>
              <div>
                <div className="font-serif italic text-paper text-3xl mb-4 opacity-85">
                  Llega
                </div>
                <div className="font-display text-paper text-[22vw] sm:text-[7.5rem] leading-[0.82] -tracking-[0.04em]">
                  PILATES
                </div>
                <div className="font-serif italic text-paper/85 text-xl mt-6">
                  reformer · mat ·
                  <br />
                  grupos chicos.
                </div>
              </div>
              <div className="border-t border-paper/30 pt-4 text-[10px] tracking-[0.25em] uppercase text-paper/75">
                Instructoras curadas
              </div>
            </div>
          </Card>

          {/* 06 — Movimiento (Yoga) */}
          <Card num="06" tag="Yoga · Sage" bg="sage">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] tracking-[0.3em] uppercase text-paper/70">
                <span>Move · 03</span>
                <span>BA</span>
              </div>
              <div>
                <div className="font-serif italic text-paper text-3xl mb-4 opacity-90">
                  Y también
                </div>
                <div className="font-display text-paper text-[22vw] sm:text-[8rem] leading-[0.82] -tracking-[0.04em]">
                  YOGA.
                </div>
                <div className="font-serif italic text-paper/85 text-xl mt-6">
                  vinyasa · yin ·
                  <br />
                  slow flow.
                </div>
              </div>
              <div className="border-t border-paper/30 pt-4 text-[10px] tracking-[0.25em] uppercase text-paper/75">
                Para cuerpos que viven la ciudad
              </div>
            </div>
          </Card>

          {/* 07 — Dónde */}
          <Card num="07" tag="Ubicación · Crema" bg="crema">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="text-[9px] tracking-[0.3em] uppercase text-verde/60">
                Dónde
              </div>
              <div>
                <div className="font-serif italic text-verde/75 text-2xl mb-4">
                  La nueva casa
                </div>
                <div className="font-display text-verde text-[18vw] sm:text-[6.5rem] leading-[0.82] -tracking-[0.04em]">
                  LA
                  <br />
                  PAMPA
                  <br />
                  1117.
                </div>
                <div className="font-serif italic text-tierra text-2xl mt-6">
                  Belgrano · Buenos Aires
                </div>
              </div>
              <div className="text-xs text-verde/65 leading-relaxed">
                <p>A tres cuadras de donde nos conocés.</p>
                <p>Más luz, más espacio, estudio propio.</p>
              </div>
            </div>
          </Card>

          {/* 08 — Cuándo */}
          <Card num="08" tag="Fecha · Verde" bg="verde">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="text-[9px] tracking-[0.3em] uppercase text-paper/55">
                Save the date
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[10px] tracking-[0.4em] uppercase text-paper/65 mb-6">
                  Apertura
                </div>
                <div className="font-display text-paper text-[20vw] sm:text-[7.5rem] leading-[0.85]">
                  06.06
                </div>
                <div className="font-serif italic text-paper/85 text-xl mt-6">
                  un domingo a las nueve.
                </div>
              </div>
              <div className="logo-pampa self-start">
                <span className="pampa text-paper text-2xl">PAMPA</span>
                <span className="club text-paper/80 text-lg">club</span>
              </div>
            </div>
          </Card>

          {/* 09 — Membresía */}
          <Card num="09" tag="Membresía · Negro" bg="negro">
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="text-[9px] tracking-[0.3em] uppercase text-paper/45">
                El club · 04
              </div>
              <div>
                <div className="font-serif italic text-paper text-2xl mb-6 opacity-85">
                  200 socias.
                </div>
                <div className="font-display text-paper text-[14vw] sm:text-[5rem] leading-[0.85] -tracking-[0.04em]">
                  UNA
                  <br />
                  LLAVE
                  <br />
                  DE LA
                  <br />
                  CASA.
                </div>
              </div>
              <div className="border-t border-paper/20 pt-5">
                <div className="text-[10px] tracking-[0.25em] uppercase text-tierra mb-2">
                  Lista de espera abierta
                </div>
                <div className="text-paper/75 text-sm">
                  pampaclub.com.ar
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cómo usar */}
      <section className="bg-crema py-20 md:py-28 border-t border-verde/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[11px] tracking-[0.3em] uppercase text-tierra mb-6">
            Cómo usarlas
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-verde mb-10">
            Una placa por día.
            <br />
            En este orden.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-negro/75">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-tierra mb-3">
                Día 1 — 3
              </div>
              <p className="leading-relaxed">
                Mudanza · Wellness · Logo reveal. Tres golpes seguidos para
                instalar la noticia.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-tierra mb-3">
                Día 4 — 6
              </div>
              <p className="leading-relaxed">
                Manifiesto · Pilates · Yoga. Profundizan qué cambia y cómo
                cambia.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-tierra mb-3">
                Día 7 — 9
              </div>
              <p className="leading-relaxed">
                Ubicación · Fecha · Membresía. Cierran con la invitación
                concreta.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-paper border border-verde/15 text-sm text-negro/65 leading-relaxed">
            <strong className="text-verde">Captura.</strong> Cada placa está en
            formato 9:16 (igual que una historia de Instagram). Hacé screenshot
            de la placa que querés subir y publicala como historia. Para mayor
            calidad, abrí la página en mobile en pantalla completa antes de
            capturar.
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-verde text-paper py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="logo-pampa">
            <span className="pampa text-paper text-2xl">PAMPA</span>
            <span className="club text-paper/85 text-lg">club</span>
          </div>
          <div className="font-serif italic text-paper/70">
            un domingo a las nueve.
          </div>
          <Link
            href="/"
            className="text-[11px] tracking-[0.25em] uppercase ulink text-paper"
          >
            ← Volver a la casa
          </Link>
        </div>
      </footer>
    </main>
  );
}
