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
} from "lucide-react";

const photos = [
  // TODO: Replace with real photos
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
  "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
];

const features = [
  { icon: Bed, label: "Cama Queen size premium" },
  { icon: Bath, label: "Baño completo con ducha de lluvia" },
  { icon: Maximize, label: "36 m² de superficie" },
  { icon: Tv, label: "Smart TV 50\"" },
  { icon: Wifi, label: "WiFi de alta velocidad" },
  { icon: Wind, label: "Aire acondicionado frío/calor" },
  { icon: Coffee, label: "Cocina integrada equipada" },
  { icon: ShieldCheck, label: "Caja de seguridad" },
];

export default function StudioPage() {
  return (
    <div className="pt-24">
      {/* Hero photo grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[500px] md:h-[600px]">
          <div className="relative md:col-span-2 md:row-span-2 overflow-hidden">
            <Image
              src={photos[0]}
              alt="Studio - Vista principal"
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
                alt={`Studio - Vista ${i + 2}`}
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
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
              1 Ambiente &middot; 36 m²
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-8">
              Studio
            </h1>

            <div className="prose max-w-none">
              <p className="text-warm-gray leading-relaxed text-base mb-6">
                Nuestros Studios de 36m² son el refugio perfecto para quienes
                buscan una estadía con estilo en Palermo Soho. Cada unidad ha sido
                diseñada con una estética minimalista y contemporánea, utilizando
                materiales nobles y una paleta de colores cálida que invita al relax.
              </p>
              <p className="text-warm-gray leading-relaxed text-base mb-6">
                El espacio integra de forma inteligente la zona de descanso con una
                cama Queen size de alta gama, una cocina totalmente equipada con
                electrodomésticos de primera línea, y un baño completo con terminaciones
                premium. Los grandes ventanales permiten el ingreso de luz natural,
                creando una atmósfera luminosa y acogedora durante todo el día.
              </p>
              <p className="text-warm-gray leading-relaxed text-base">
                Cada detalle ha sido cuidadosamente seleccionado: desde la ropa de
                cama de algodón egipcio hasta los amenities de tocador de marcas
                reconocidas, pasando por la Smart TV de última generación y el WiFi
                de alta velocidad que garantizan entretenimiento y conectividad
                permanente.
              </p>
            </div>

            {/* Features grid */}
            <div className="mt-12">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Equipamiento
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  Capacidad: 2 huéspedes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Cancelación flexible
                </li>
              </ul>
              <Link
                href="/reservar?unit=studio"
                className="block w-full py-3.5 bg-gold text-white text-center text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
              >
                Reservar Studio
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
