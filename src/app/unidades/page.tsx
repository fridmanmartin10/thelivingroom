import Image from "next/image";
import Link from "next/link";

const unitTypes = [
  {
    slug: "studio",
    name: "Studio",
    subtitle: "1 Ambiente &middot; 36 m²",
    description:
      "Nuestros Studios son espacios inteligentes y modernos de 36m², diseñados para maximizar cada rincón sin resignar estilo ni confort. Ideales para viajeros individuales o parejas que buscan una estadía funcional con todos los servicios de un hotel boutique.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ez637a590?w=600&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
    ],
  },
  {
    slug: "dos-ambientes",
    name: "2 Ambientes",
    subtitle: "Dos Ambientes &middot; 50 m²",
    description:
      "Nuestras unidades de 2 ambientes ofrecen 50m² de amplitud con living independiente y dormitorio separado. Perfectos para familias, grupos de amigos o estadías prolongadas donde la privacidad y el espacio son fundamentales.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
];

export default function UnidadesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-charcoal py-20 text-center text-white">
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Alojamiento
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em]">
          Nuestras Unidades
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto px-6">
          Dos tipologías diseñadas para distintas necesidades, ambas con el
          mismo estándar de calidad premium.
        </p>
      </div>

      {/* Units */}
      {unitTypes.map((unit, idx) => (
        <section
          key={unit.slug}
          className={`py-20 ${idx % 2 === 0 ? "bg-soft-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                idx % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image gallery */}
              <div className={`${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {unit.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden">
                      <Image
                        src={img}
                        alt={`${unit.name} - Foto ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 33vw, 17vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className={`${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
                  {unit.subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-charcoal mb-6">
                  {unit.name}
                </h2>
                <p className="text-warm-gray leading-relaxed mb-8">
                  {unit.description}
                </p>

                <Link
                  href={`/unidades/${unit.slug}`}
                  className="inline-block px-8 py-3.5 bg-gold text-white text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
                >
                  Ver Detalles Completos
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-charcoal text-center text-white">
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Reservá tu estadía
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
          ¿Listo para vivir la experiencia?
        </h2>
        <Link
          href="/reservar"
          className="inline-block px-10 py-4 bg-gold text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
        >
          Reservar Ahora
        </Link>
      </section>
    </div>
  );
}
