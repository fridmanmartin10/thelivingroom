import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-verde text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="logo-pampa mb-6">
              <span className="pampa text-paper text-[5rem] md:text-[7rem] leading-none">
                PAMPA
              </span>
              <span className="club text-paper text-[3rem] md:text-[4.5rem] leading-none">
                club
              </span>
            </div>
            <p className="font-serif italic text-paper/75 text-xl max-w-md">
              un domingo a las nueve.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-paper/45 mb-4">
              Navegá
            </div>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>
                <Link href="#cocina" className="ulink">
                  Cocina
                </Link>
              </li>
              <li>
                <Link href="#clases" className="ulink">
                  Clases
                </Link>
              </li>
              <li>
                <Link href="#club" className="ulink">
                  El Club
                </Link>
              </li>
              <li>
                <Link href="/historias" className="ulink">
                  Historias
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-paper/45 mb-4">
              Visita
            </div>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>Sucre 860</li>
              <li>Belgrano · Buenos Aires</li>
              <li className="text-paper/55 text-xs">a 3 cuadras del local actual</li>
              <li>Lun a Vie · 7–20h</li>
              <li>Sáb y Dom · 8–18h</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-paper/45 mb-4">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>hola@pampaclub.com.ar</li>
              <li>
                <a
                  href="https://instagram.com/pampaclub.ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink"
                >
                  @pampaclub.ba
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pampacafe.ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink"
                >
                  @pampacafe.ba
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/15 flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-paper/45">
          <div>© Pampa Club · 2026</div>
          <div>Brand book v.01 · Edición Buenos Aires</div>
        </div>
      </div>
    </footer>
  );
}
