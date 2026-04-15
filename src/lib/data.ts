// ============================================================
// THE LIVING ROOM — Data & Configuration
// Real unit data from HAAUS booking engine
// ============================================================

export interface UnitType {
  id: string;
  name: string;
  type: "Studio" | "2 Ambientes" | "2 Ambientes Suite";
  m2: number;
  maxGuests: number;
  beds: string;
  amenities: string[];
  basePrice: number;
  images: string[];
  description: string;
  unitNumbers: string[];
  totalUnits: number;
}

// Pricing constants
export const CLEANING_FEE = 25; // USD 25 por estadía, se cobra al check-out

// Company info
export const COMPANY_NAME = "The Living Group S.R.L.";

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

// ─── Real Unit Types ────────────────────────────────────────────────────────
export const UNIT_TYPES: UnitType[] = [
  {
    id: "studio",
    name: "Studio",
    type: "Studio",
    m2: 35,
    maxGuests: 2,
    beds: "1 Queen",
    amenities: [
      "Kitchenette completa",
      "Smart TV",
      "A/C frío-calor",
      "Wi-Fi Premium",
      "Caja fuerte",
      "Ropa de cama premium",
      "Amenities de baño",
      "Escritorio de trabajo",
    ],
    basePrice: 80,
    images: [
      "/images/studio-1.jpeg",
      "/images/studio-2.jpeg",
      "/images/studio-3.jpeg",
      "/images/studio-4.jpeg",
    ],
    description:
      "Studio de diseño con 35m² de confort absoluto. Materiales nobles, equipamiento completo y atención al mínimo detalle. Kitchenette integrada, cama queen premium y espacio de trabajo. Ideal para viajeros solos o parejas que buscan la mejor relación calidad-precio en Palermo Soho.",
    unitNumbers: [
      "202", "204", "205", "208", "210", "211",
      "402", "403", "405", "409", "412",
      "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512",
      "603", "604", "605", "606", "607", "608", "609", "610", "611", "612",
      "701", "702", "703", "704", "705", "706", "707", "708", "709", "710", "711",
      "805",
    ],
    totalUnits: 38,
  },
  {
    id: "2amb",
    name: "2 Ambientes",
    type: "2 Ambientes",
    m2: 50,
    maxGuests: 2,
    beds: "1 King",
    amenities: [
      "Living-comedor separado",
      "Cocina completa",
      "Smart TV",
      "A/C frío-calor",
      "Wi-Fi Premium",
      "Lavarropas",
      "Caja fuerte",
      "Ropa de cama premium",
      "Amenities de baño",
    ],
    basePrice: 110,
    images: [
      "/images/suite-1.jpeg",
      "/images/suite-2.jpeg",
    ],
    description:
      "Departamento de 2 ambientes con 50m² y living independiente. Diseño de autor con living-comedor amplio, cocina completa y dormitorio separado con cama king. El espacio perfecto para quienes buscan la comodidad de un hogar con los servicios de un hotel boutique.",
    unitNumbers: ["207", "607", "707"],
    totalUnits: 3,
  },
  {
    id: "2amb-x4",
    name: "2 Ambientes Superior",
    type: "2 Ambientes Suite",
    m2: 50,
    maxGuests: 4,
    beds: "1 King + Sofá cama",
    amenities: [
      "Living-comedor separado",
      "Cocina completa",
      "Smart TV x2",
      "A/C frío-calor",
      "Wi-Fi Premium",
      "Lavarropas",
      "Caja fuerte",
      "Ropa de cama premium",
      "Amenities de baño",
      "Capacidad 4 huéspedes",
    ],
    basePrice: 140,
    images: [
      "/images/2amb4-1.jpeg",
      "/images/2amb4-2.jpeg",
    ],
    description:
      "El departamento más amplio y versátil del edificio. 50m² con living-comedor, cocina completa, dormitorio con cama king y sofá cama en el living. Capacidad para hasta 4 huéspedes — ideal para familias o grupos de amigos. Ubicados en el 8° piso con las mejores vistas.",
    unitNumbers: ["802", "803", "806"],
    totalUnits: 3,
  },
];

// Legacy compatibility: flat array for components that use Unit[]
export interface Unit {
  id: number;
  name: string;
  type: "Studio" | "2 Ambientes" | "2 Ambientes Suite";
  floor: string;
  m2: number;
  maxGuests: number;
  beds: string;
  amenities: string[];
  basePrice: number;
  images: string[];
  description: string;
}

// We now show unit TYPES, not individual units
export const UNITS: Unit[] = UNIT_TYPES.map((ut, i) => ({
  id: i + 1,
  name: ut.name,
  type: ut.type,
  floor: "",
  m2: ut.m2,
  maxGuests: ut.maxGuests,
  beds: ut.beds,
  amenities: ut.amenities,
  basePrice: ut.basePrice,
  images: ut.images,
  description: ut.description,
}));

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

// Calculate total price — cleaning fee USD 25 se cobra aparte al check-out
export const calculatePricing = (basePrice: number, nights: number) => {
  const subtotal = basePrice * nights;
  const total = subtotal;
  return { subtotal, cleaningFee: CLEANING_FEE, total };
};
