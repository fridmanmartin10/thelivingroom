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

// TODO: Replace with real property photos when ready
// Currently using HAAUS reference photos as mockup placeholders
export const PLACEHOLDER_IMAGES = {
  hero: "/images/hero.jpeg",
  lobby: "/images/investment.jpeg",
  exterior: "/images/exterior1.jpeg",
  pool: "/images/pool.jpeg",
  interior1: "/images/interior1.jpeg",
  interior2: "/images/interior2.jpeg",
  interior3: "/images/interior3.jpeg",
  interior4: "/images/interior4.jpeg",
  kitchen: "/images/interior4.jpeg",
  bathroom: "/images/interior3.jpeg",
  living: "/images/interior2.jpeg",
  bedroom: "/images/interior1.jpeg",
  balcony: "/images/exterior2.jpeg",
  rooftop: "/images/rooftop.jpeg",
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
  { icon: "🧹", title: "Housekeeping", desc: "Limpieza profesional programada" },
  { icon: "📱", title: "Soporte 24hs", desc: "WhatsApp directo con el equipo" },
  { icon: "🅿️", title: "Parking", desc: "Cochera disponible bajo reserva" },
  { icon: "🌐", title: "Wi-Fi Premium", desc: "Fibra óptica de alta velocidad" },
  { icon: "🛡️", title: "Seguridad 24hs", desc: "Vigilancia y acceso controlado" },
];

export const AMENITIES = [
  "Piscina con solarium",
  "Rooftop con parrillas y fogonero",
  "Gym equipado",
  "Salón de usos múltiples",
  "Coffee Lab",
  "Cocina gourmet compartida",
  "Coworking",
  "Bicicletero",
  "Laundry",
  "Techo verde",
  "Seguridad 24 hs",
];

export const AMENITY_IMAGES = [
  { src: "/images/pool.jpeg", label: "Piscina & Solarium" },
  { src: "/images/rooftop.jpeg", label: "Rooftop & Parrillas" },
  { src: "/images/gym.jpeg", label: "Gym" },
  { src: "/images/amenity.jpeg", label: "SUM & Coworking" },
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
