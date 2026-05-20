import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import MoveBanner from "@/components/move-banner";

const BOWLS = [
  {
    name: "Coral",
    desc: "Mango, maracuyá, leche de coco, granola de almendra, polen.",
    price: "14.800",
    tone: "bowl-coral",
  },
  {
    name: "Açai",
    desc: "Açai puro, banana, frutos rojos, cacao nibs, coco rallado.",
    price: "15.200",
    tone: "bowl-acai",
  },
  {
    name: "Matcha",
    desc: "Matcha ceremonial, espinaca, kiwi, semillas, leche de avena.",
    price: "15.500",
    tone: "bowl-matcha",
  },
  {
    name: "Verde Pampa",
    desc: "Palta, hojas, huevo poché, semillas, pan de masa madre.",
    price: "16.400",
    tone: "bowl-verde",
  },
];

const CLASES = [
  { dia: "Lunes", h: "08:00", clase: "Pilates Reformer", coach: "Lu" },
  { dia: "Martes", h: "07:30", clase: "Vinyasa Yoga", coach: "Cami" },
  { dia: "Miércoles", h: "08:00", clase: "Pilates Mat", coach: "Lu" },
  { dia: "Jueves", h: "07:30", clase: "Yin Yoga", coach: "Sofi" },
  { dia: "Viernes", h: "08:00", clase: "Pilates Reformer", coach: "Lu" },
  { dia: "Sábado", h: "09:00", clase: "Slow Flow + Café", coach: "Cami" },
];

const TIERS = [
  {
    name: "golden",
    price: "$89.000",
    perks: ["4 clases / mes", "10% off carta y merch", "Newsletter mensual"],
    color: "bg-dorado/15 border-dorado/40",
  },
  {
    name: "black",
    price: "$145.000",
    perks: ["8 clases / mes", "15% off carta y merch", "+1 invitada / mes"],
    color: "bg-negro text-paper border-negro",
    dark: true,
  },
  {
    name: "platinum",
    price: "$200.000",
    perks: [
      "12 clases / mes",
      "20% off carta y merch",
      "Retiros y eventos privados",
    ],
    color: "bg-sage/20 border-sage/50",
  },
  {
    name: "elite",
    price: "$270.000",
    perks: [
      "Ilimitadas / mes",
      "25% off carta y merch",
      "Fundadora · número grabado",
    ],
    color: "bg-verde text-paper border-verde",
    dark: true,
  },
];

export default function Home() {
  return (
    <main className="relative grain min-h-screen bg-paper text-negro">
      <Nav />

      {/* ─────────────  HERO  ───────────── */}
      <section
        id="home"
        className="relative overflow-hidden bg-verde text-paper pt-32 pb-24 md:pt-44 md:pb-32"
      >
        <div className="absolute top-8 left-8 right-8 hidden md:flex justify-between text-[10px] tracking-[0.3em] text-paper/60 uppercase">
          <span>Club de bienestar · Buenos Aires</span>
          <span>Edición 2026</span>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <p className="font-serif italic text-paper/70 text-lg md:text-xl mb-10">
            un círculo privado de bienestar urbano —
          </p>

          <h1 className="font-display text-paper text-[20vw] md:text-[15rem] leading-[0.82] tracking-[-0.04em]">
            PAMPA
          </h1>
          <div className="flex justify-end -mt-3 md:-mt-6">
            <span className="font-serif italic text-paper text-[14vw] md:text-[10rem] leading-none">
              club
            </span>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-paper/85 text-xl md:text-3xl leading-snug max-w-2xl font-light">
                Café de especialidad, cocina saludable y movimiento.
                <br />
                En un mismo lugar, para 200 socias.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col md:items-end gap-4">
              <Link
                href="#mudanza"
                className="inline-flex items-center justify-center bg-paper text-verde px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-tierra hover:text-paper transition-colors"
              >
                Nos mudamos →
              </Link>
              <Link
                href="#club"
                className="inline-flex items-center justify-center border border-paper/40 text-paper px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-paper hover:text-verde transition-colors"
              >
                Sumate al club
              </Link>
            </div>
          </div>
        </div>

        {/* footer hero */}
        <div className="mx-auto max-w-7xl px-6 mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] tracking-[0.2em] uppercase text-paper/55">
          <div>
            <div className="text-paper/40 mb-1">01</div>
            Café de especialidad
          </div>
          <div>
            <div className="text-paper/40 mb-1">02</div>
            Cocina saludable
          </div>
          <div>
            <div className="text-paper/40 mb-1">03</div>
            Yoga · Pilates
          </div>
          <div>
            <div className="text-paper/40 mb-1">04</div>
            Membresía
          </div>
        </div>
      </section>

      {/* ─────────────  MARQUEE  ───────────── */}
      <div className="bg-tierra text-paper py-5 overflow-hidden border-y border-tierra-deep/20">
        <div className="marquee-track flex whitespace-nowrap font-display text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex items-center">
              {[
                "Nos mudamos",
                "·",
                "tres cuadras",
                "·",
                "sumamos wellness",
                "·",
                "yoga & pilates",
                "·",
                "un domingo a las nueve",
                "·",
              ].map((t, i) => (
                <span key={i} className="mx-6">
                  {t === "·" ? <span className="text-paper/50">·</span> : t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─────────────  ANUNCIO MUDANZA  ───────────── */}
      <MoveBanner />

      {/* ─────────────  POR QUÉ EXISTE  ───────────── */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[11px] tracking-[0.3em] text-sage uppercase mb-10">
            Por qué existe
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-verde mb-10">
            El bienestar en Buenos Aires es ruidoso.
          </h2>
          <p className="font-serif italic text-2xl md:text-4xl leading-snug text-negro/85 max-w-3xl">
            Demasiada promesa, poca curaduría. Pampa Club nace para ofrecer otra
            cosa: un lugar curado, hermoso y privado, donde el cuidado no se
            grita —se practica.
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-tierra mb-3">
                Lo que cambia
              </div>
              <p className="text-negro/75 leading-relaxed">
                Sumamos una capa al café: superfoods, proteico real, smoothies
                funcionales, y una comunidad construida alrededor del
                movimiento.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-tierra mb-3">
                Lo que no cambia
              </div>
              <p className="text-negro/75 leading-relaxed">
                La obsesión por la calidad. El producto se ve, se huele, se
                siente. La calidez del lugar es la misma que tenía el primer
                Pampa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────  TRES TERRITORIOS  ───────────── */}
      <section id="club" className="bg-crema py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[11px] tracking-[0.3em] text-verde uppercase mb-6">
            Tres territorios · Una sola marca
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-verde max-w-3xl mb-16">
            Cocina, movimiento y comunidad.
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Nourish */}
            <div className="bg-verde text-paper p-10 md:p-12 min-h-[460px] flex flex-col justify-between lift">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-paper/50 mb-4">
                  01
                </div>
                <h3 className="font-display text-5xl mb-6">Nourish</h3>
                <p className="font-serif italic text-paper/80 text-xl leading-snug">
                  Cocina y café.
                </p>
              </div>
              <div>
                <p className="text-paper/75 text-sm leading-relaxed mb-6">
                  Bowls coloridos, smoothies funcionales, proteico real, café
                  de especialidad. La comida es hermosa porque cuida.
                </p>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/55">
                  Bowls · Smoothies · Café · Pastelería
                </div>
              </div>
            </div>

            {/* Move */}
            <div className="bg-tierra text-paper p-10 md:p-12 min-h-[460px] flex flex-col justify-between lift">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-paper/55 mb-4">
                  02
                </div>
                <h3 className="font-display text-5xl mb-6">Move</h3>
                <p className="font-serif italic text-paper/85 text-xl leading-snug">
                  Yoga & pilates.
                </p>
              </div>
              <div>
                <p className="text-paper/80 text-sm leading-relaxed mb-6">
                  Clases en grupo chicas, instructoras cuidadosamente elegidas,
                  secuencias diseñadas para cuerpos que viven la ciudad.
                </p>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/65">
                  Reformer · Mat · Vinyasa · Yin
                </div>
              </div>
            </div>

            {/* Belong */}
            <div className="bg-sage text-paper p-10 md:p-12 min-h-[460px] flex flex-col justify-between lift">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-paper/60 mb-4">
                  03
                </div>
                <h3 className="font-display text-5xl mb-6">Belong</h3>
                <p className="font-serif italic text-paper/85 text-xl leading-snug">
                  El club.
                </p>
              </div>
              <div>
                <p className="text-paper/80 text-sm leading-relaxed mb-6">
                  Membresía formal, eventos cerrados, retiros y merch para
                  socias. La comunidad existe afuera del local.
                </p>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/65">
                  Socias · Eventos · Retiros · Merch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────  COCINA (BOWLS)  ───────────── */}
      <section id="cocina" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="text-[11px] tracking-[0.3em] text-tierra uppercase mb-4">
                Cocina · Menú abril 2026
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-verde">
                El bowl como retrato.
              </h2>
            </div>
            <p className="font-serif italic text-xl text-negro/70 max-w-md">
              Tres a seis ingredientes. Sin adjetivos. El producto habla.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {BOWLS.map((b) => (
              <article key={b.name} className="group lift">
                <div
                  className={`aspect-square ${b.tone} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 text-paper/80 text-[10px] tracking-[0.3em] uppercase">
                    0{BOWLS.indexOf(b) + 1}
                  </div>
                </div>
                <div className="pt-5 pb-2 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-verde">{b.name}</h3>
                  <span className="text-sm text-negro/60 tabular-nums">
                    {b.price}
                  </span>
                </div>
                <p className="text-sm text-negro/65 leading-relaxed">{b.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link
              href="#mudanza"
              className="bg-verde text-paper px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-negro transition-colors"
            >
              Reservá una mesa →
            </Link>
            <p className="font-serif italic text-negro/65 text-lg">
              Menú completo · smoothies funcionales, café de especialidad y
              cocina caliente.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────  CLASES  ───────────── */}
      <section id="clases" className="bg-verde text-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="text-[11px] tracking-[0.3em] text-paper/55 uppercase mb-4">
                Move · Semana del 18.05
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
                Clases en grupos chicos.
              </h2>
              <p className="font-serif italic text-paper/80 text-xl leading-snug mb-8">
                Reformer, mat, vinyasa, yin. Instructoras elegidas con cuidado.
                Secuencias diseñadas para cuerpos que viven la ciudad.
              </p>
              <p className="text-paper/65 text-sm leading-relaxed mb-10 max-w-md">
                Las socias reservan con 7 días de anticipación. Si no podés
                venir, avisá hasta dos horas antes —hay socias en lista de
                espera.
              </p>
              <Link
                href="#club"
                className="inline-flex items-center gap-3 ulink text-paper text-sm tracking-[0.2em] uppercase"
              >
                Conocer membresías
                <span>→</span>
              </Link>
            </div>

            <div className="md:col-span-7">
              <div className="border-t border-paper/15">
                {CLASES.map((c, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 gap-3 py-5 border-b border-paper/15 items-baseline"
                  >
                    <div className="col-span-3 text-[10px] tracking-[0.25em] uppercase text-paper/55">
                      {c.dia}
                    </div>
                    <div className="col-span-2 font-display text-2xl tabular-nums">
                      {c.h}
                    </div>
                    <div className="col-span-5 text-paper text-base">
                      {c.clase}
                    </div>
                    <div className="col-span-2 text-right font-serif italic text-paper/70 text-sm">
                      {c.coach}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-paper/55 text-xs tracking-[0.15em] uppercase">
                Horarios sujetos a apertura · Junio 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────  MEMBRESÍAS  ───────────── */}
      <section className="bg-crema py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[11px] tracking-[0.3em] text-verde uppercase mb-4">
            El club · Membresías
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-verde mb-6 max-w-4xl">
            Una socia con llave de la casa.
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-negro/75 max-w-2xl mb-16">
            La membresía no es una tarjeta de descuentos. Es la forma de
            pertenecer.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`${t.color} border p-8 min-h-[360px] flex flex-col justify-between lift`}
              >
                <div>
                  <div className="logo-pampa mb-6">
                    <span
                      className={`pampa text-3xl ${
                        t.dark ? "text-paper" : "text-verde"
                      }`}
                    >
                      PAMPA
                    </span>
                    <span
                      className={`club text-2xl ${
                        t.dark ? "text-paper" : "text-negro/80"
                      }`}
                    >
                      {t.name}
                    </span>
                  </div>
                  <div className="border-t border-current/15 pt-4">
                    <div
                      className={`font-display text-3xl ${
                        t.dark ? "text-paper" : "text-verde"
                      }`}
                    >
                      {t.price}
                    </div>
                    <div className="text-[10px] tracking-[0.25em] uppercase opacity-60 mt-1">
                      por mes
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed mt-8">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="opacity-50">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              href="#contacto"
              className="bg-verde text-paper px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-negro transition-colors"
            >
              Aplicar al Club →
            </Link>
            <p className="text-xs text-negro/55">
              Aplicación corta + invitación. Aprobación en 48hs. Sin
              permanencia.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────  MANIFIESTO  ───────────── */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-[11px] tracking-[0.3em] text-tierra uppercase mb-10">
            Manifiesto
          </div>
          <div className="font-serif italic text-3xl md:text-5xl leading-[1.15] text-verde space-y-2">
            <p>Creemos que cuidarse no es performance.</p>
            <p>Que un buen plato vale tanto como una buena clase.</p>
            <p>Que la comunidad se construye en mesas chicas.</p>
            <p>Que el lujo de hoy es tener tiempo para vos.</p>
            <p className="pt-6 text-tierra">
              Pampa Club es eso —
              <br />
              un domingo a las nueve.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────  CONTACTO  ───────────── */}
      <section id="contacto" className="bg-negro text-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="text-[11px] tracking-[0.3em] text-paper/50 uppercase mb-4">
              Visitanos · Buenos Aires
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-10">
              La nueva casa.
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-paper/80 leading-snug mb-10 max-w-xl">
              A tres cuadras del Pampa que ya conocés. Más luz, más espacio,
              estudio propio.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-xl text-sm text-paper/75">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/45 mb-2">
                  Dirección
                </div>
                <p>La Pampa 1117</p>
                <p>Belgrano · Buenos Aires</p>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/45 mb-2">
                  Horarios
                </div>
                <p>Lun a Vie · 7 a 20h</p>
                <p>Sáb y Dom · 8 a 18h</p>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/45 mb-2">
                  Reservas
                </div>
                <p>hola@pampaclub.com.ar</p>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-paper/45 mb-2">
                  Instagram
                </div>
                <p>@pampaclub.ba</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-verde border border-paper/10 p-10 flex flex-col justify-between">
              <div className="text-[10px] tracking-[0.3em] uppercase text-paper/50">
                Brand sello · m.
              </div>
              <div>
                <div className="logo-pampa">
                  <span className="pampa text-paper text-[5rem] leading-none">
                    PAMPA
                  </span>
                  <span className="club text-paper text-[3.5rem] leading-none">
                    club
                  </span>
                </div>
                <div className="mt-8 font-serif italic text-paper/70 text-lg">
                  un domingo a las nueve.
                </div>
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-paper/40">
                BA · 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
