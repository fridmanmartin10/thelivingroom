import Link from "next/link";

export default function MoveBanner() {
  return (
    <section id="mudanza" className="bg-paper py-20 md:py-28 border-b border-verde/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left — visual card */}
          <div className="md:col-span-5">
            <div className="aspect-[4/5] relative overflow-hidden bg-tierra">
              <div className="absolute inset-0 bg-gradient-to-br from-tierra via-tierra-deep to-verde-deep opacity-95" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between text-paper">
                <div className="flex items-start justify-between">
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                    Anuncio
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                    BA · 2026
                  </div>
                </div>
                <div>
                  <div className="font-display text-[18vw] md:text-[8rem] leading-[0.85] -tracking-[0.04em]">
                    NOS
                    <br />
                    MUDAMOS
                  </div>
                  <div className="font-serif italic text-2xl md:text-3xl mt-6 opacity-90">
                    tres cuadras más allá.
                  </div>
                </div>
                <div className="border-t border-paper/30 pt-5">
                  <div className="text-xs tracking-[0.2em] uppercase opacity-80">
                    Sucre 860 · Belgrano
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="md:col-span-7 md:pl-8">
            <div className="text-[11px] tracking-[0.3em] uppercase text-tierra mb-6">
              Una nueva casa
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-verde mb-8">
              Mismo Pampa, casa más grande.
              <br />
              <span className="text-tierra">Sumamos wellness.</span>
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-negro/85 leading-snug mb-8 max-w-2xl">
              A tres cuadras de donde nos conocés. Mismo café, misma cocina —
              ahora con estudio de yoga y pilates, y un círculo privado
              alrededor del movimiento.
            </p>
            <p className="text-negro/70 leading-relaxed max-w-xl mb-10">
              Pampa fue —y sigue siendo— café de especialidad y cocina de
              autor. Pampa club suma una capa: superfoods, smoothies
              funcionales, clases en grupos chicos y una comunidad de 200
              socias.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="#club"
                className="bg-verde text-paper px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-negro transition-colors"
              >
                Sumate al club →
              </Link>
              <Link
                href="/historias"
                className="ulink text-verde text-xs tracking-[0.25em] uppercase font-medium"
              >
                Ver placas de historias
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl border-t border-verde/15 pt-6">
              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-tierra mb-2">
                  Cocina
                </div>
                <div className="text-sm">Nueva carta saludable</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-tierra mb-2">
                  Movimiento
                </div>
                <div className="text-sm">Yoga & Pilates</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-tierra mb-2">
                  Club
                </div>
                <div className="text-sm">200 socias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
