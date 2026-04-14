// ============================================================
// THE LIVING ROOM — Data & Configuration
// Update these values with real information when ready
// ============================================================

export interface Unit {
  id: number;
  name: string;
  type: "Studio" | "2 Ambientes";
  floor: string;
  m2: number;
  maxGuests: number;
  beds: string;
  amenities: string[];
  basePrice: number;
  images: string[];
  description: string;
}

// TODO: Replace placeholder images with real property photos
// Using HAAUS-style interior/exterior photos as mockup placeholders
export const PLACEHOLDER_IMAGES = {
  hero: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
  lobby: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  exterior: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  pool: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80",
  interior1: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  interior2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  interior3: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
  interior4: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80",
  kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  living: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  bedroom: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  balcony: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  rooftop: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
};

// TODO: Replace with real units when ready.
// Each unit should have real photos, descriptions, and pricing.
export const UNITS: Unit[] = [
  {
    id: 1,
    name: "Studio Soho",
    type: "Studio",
    floor: "1°",
    m2: 36,
    maxGuests: 2,
    beds: "1 Queen",
    amenities: ["Kitchenette", "Smart TV", "A/C", "Wi-Fi", "Caja fuerte"],
    basePrice: 95,
    images: [PLACEHOLDER_IMAGES.interior1, PLACEHOLDER_IMAGES.kitchen, PLACEHOLDER_IMAGES.bathroom],
    description: "Studio moderno y luminoso con vista a la calle. Diseño minimalista con materiales premium.",
  },
  {
    id: 2,
    name: "Studio Jardín",
    type: "Studio",
    floor: "PB",
    m2: 36,
    maxGuests: 2,
    beds: "1 Queen",
    amenities: ["Patio privado", "Kitchenette", "Smart TV", "A/C", "Wi-Fi"],
    basePrice: 100,
    images: [PLACEHOLDER_IMAGES.interior3, PLACEHOLDER_IMAGES.kitchen, PLACEHOLDER_IMAGES.bathroom],
    description: "Planta baja con salida directa al jardín interno. Luz natural todo el día.",
  },
  {
    id: 3,
    name: "Studio Luz",
    type: "Studio",
    floor: "3°",
    m2: 36,
    maxGuests: 2,
    beds: "1 Queen",
    amenities: ["Balcón", "Kitchenette", "Smart TV", "A/C", "Wi-Fi"],
    basePrice: 105,
    images: [PLACEHOLDER_IMAGES.bedroom, PLACEHOLDER_IMAGES.kitchen, PLACEHOLDER_IMAGES.balcony],
    description: "Orientación norte con balcón. Inundado de luz natural durante todo el día.",
  },
  {
    id: 4,
    name: "2 Amb. Palermo",
    type: "2 Ambientes",
    floor: "2°",
    m2: 50,
    maxGuests: 4,
    beds: "1 King + Sofá cama",
    amenities: ["Living separado", "Cocina completa", "Smart TV", "A/C", "Wi-Fi", "Lavarropas"],
    basePrice: 145,
    images: [PLACEHOLDER_IMAGES.living, PLACEHOLDER_IMAGES.bedroom, PLACEHOLDER_IMAGES.kitchen],
    description: "Amplio dos ambientes con living independiente. Ideal para familias o estadías largas.",
  },
  {
    id: 5,
    name: "2 Amb. Terraza",
    type: "2 Ambientes",
    floor: "5°",
    m2: 50,
    maxGuests: 4,
    beds: "1 King + Sofá cama",
    amenities: ["Terraza privada", "Cocina completa", "Smart TV x2", "A/C", "Wi-Fi", "Lavarropas", "Parrilla"],
    basePrice: 175,
    images: [PLACEHOLDER_IMAGES.rooftop, PLACEHOLDER_IMAGES.living, PLACEHOLDER_IMAGES.bedroom],
    description: "Piso alto con terraza propia y vista a los techos de Palermo. Parrilla y espacio al aire libre.",
  },
  {
    id: 6,
    name: "2 Amb. Design",
    type: "2 Ambientes",
    floor: "3°",
    m2: 50,
    maxGuests: 4,
    beds: "1 King + 2 Singles",
    amenities: ["Balcón", "Cocina completa", "Smart TV x2", "A/C", "Wi-Fi", "Lavarropas", "Bañera"],
    basePrice: 160,
    images: [PLACEHOLDER_IMAGES.interior2, PLACEHOLDER_IMAGES.bathroom, PLACEHOLDER_IMAGES.living],
    description: "Diseño de autor con bañera independiente. Dos ambientes con personalidad única.",
  },
];

export const FEATURES = [
  { icon: "🔑", title: "Self Check-in", desc: "Acceso 24/7 con código digital" },
  { icon: "🧹", title: "Housekeeping", desc: "Limpieza profesional incluida" },
  { icon: "📱", title: "Soporte 24hs", desc: "WhatsApp directo con el equipo" },
  { icon: "🅿️", title: "Parking", desc: "Cochera disponible bajo reserva" },
  { icon: "🌐", title: "Wi-Fi Premium", desc: "Fibra óptica de alta velocidad" },
  { icon: "🛡️", title: "Seguridad", desc: "Vigilancia y acceso controlado 24hs" },
];

// Contact info — TODO: Replace with real values
export const CONTACT = {
  phone: "+54 11 XXXX-XXXX",
  email: "info@thelivingroom.com.ar",
  whatsapp: "5411XXXXXXXX",
  instagram: "thelivingroom.ba",
  address: "Palermo Soho, Buenos Aires, Argentina",
};

export const formatCurrency = (n: number) => `USD ${n.toLocaleString("en-US")}`;

export const nightsBetween = (a: string, b: string) =>
  Math.max(1, Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000));

export const todayStr = () => new Date().toISOString().split("T")[0];

export const tomorrowStr = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};
