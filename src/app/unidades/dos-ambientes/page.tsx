import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize,
  Tv,
  Wifi,
  Wind,
  Coffee,
  ShieldCheck,
  Sofa,
  Sun,
} from "lucide-react";

const photos = [
  // TODO: Replace with real photos
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
];

const features = [
  { icon: Bed, label: "Cama King size premium" },
  { icon: Sofa, label: "Living independiente" },
  { icon: Bath, label: "Baño completo con bañera" },
  { icon: Maximize, label: "50 m² de superficie" },
  { icon: Sun, label: "Balcón con vista" },
  { icon: Tv, label: "Smart TV 55\" + TV en living" },
  { icon: Wifi, label: "WiFi de alta velocidad" },
  { icon: Wind, label: "Aire acondicionado frío/calor" },
  { icon: Coffee, label: "Cocina completa equipada" },
  { icon: ShieldCheck, label: "Caja de seguridad" },
];

export default function DosAmbientesPage() {
  return (
    <div className="pt-24">
      {/* Hero photo grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[500px] md:h-[600px]">
          <div className="relative md:col-span-2 md:row-span-2 overflow-hidden">
            <Image
              src={photos[0]}
              alt="2 Ambientes - Vista principal"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {photos.slice(1, 5).map((photo, i) => (
            <div key={i} className="relative hidden md:block overflow-hidden">
              <Image
                src={photo}
                alt={`2 Ambientes - Vista ${i + 2}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
              Dos Ambientes &middot; 50 m²
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-8">
              2 Ambientes
            </h1>

            <div className="prose max-w-none">
              <p className="text-warm-gray leading-relaxed text-base mb-6">
                Nuestros departamentos de 2 ambientes de 50m² representan el
                equilibrio perfecto entre la amplitud de un hogar y el servicio
                de un hotel de primera categoría. Con un dormitorio privado
                separado del living, estas unidades ofrecen la privacidad y el
                espacio que hacen la diferencia en estadías más prolongadas.
              </p>
              <p className="text-warm-gray leading-relaxed text-base mb-6">
                El living comedor está pensado como un espacio versátil para
                trabajar, relajarse o recibir visitas, equipado con un sofá de
                diseño, Smart TV y una mesa de trabajo. La cocina completa cuenta
                con todos los electrodomésticos necesarios, desde horno y
                microondas hasta cafetera y vajilla premium.
              </p>
              <p className="text-warm-gray leading-relaxed text-base mb-6">
                El dormitorio principal, separado por puertas corredizas de
                diseño, alberga una cama King size con colchón de alta gama y
                ropa de cama de algodón egipcio. El baño completo incluye bañera
                y ducha, con terminaciones de mármol y amenities de primera línea.
              </p>
              <p className="text-warm-gray leading-relaxed text-base">
                Muchas de estas unidades cuentan con balcón, ofreciendo una
                vista privilegiada del barrio y la posibilidad de disfrutar de
                un café al aire libre en el corazón de Palermo Soho.
              </p>
            </div>

            {/* Features grid */}
            <div className="mt-12">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Equipamiento
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col items-center text-center p-4 border border-gold/10"
                  >
                    <f.icon size={22} className="text-gold mb-2" strokeWidth={1.5} />
                    <p className="text-xs text-warm-gray">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-cream p-8 border border-gold/10">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">
                Desde
              </p>
              {/* TODO: Replace with real pricing */}
              <p className="text-3xl font-light text-charcoal mb-1">
                USD $XX <span className="text-base text-warm-gray">/ noche</span>
              </p>
              <div className="w-full h-px bg-gold/20 my-6" />
              <ul className="text-sm text-warm-gray space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Check-in: 15:00 hs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Check-out: 11:00 hs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Capacidad: 4 huéspedes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Cancelación flexible
                </li>
              </ul>
              <Link
                href="/reservar?unit=dos-ambientes"
                className="block w-full py-3.5 bg-gold text-white text-center text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
              >
                Reservar 2 Ambientes
              </Link>
              <Link
                href="/reservar"
                className="block w-full py-3.5 mt-3 border border-gold text-gold text-center text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-colors duration-300"
              >
                Ver Disponibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
