// ============================================================
// CONFIGURATION FILE — Update these values with real data
// ============================================================

export const SITE_CONFIG = {
  // Contact information
  phone: "+54 11 XXXX-XXXX",
  email: "info@thelivingroom.com.ar",
  whatsapp: "5411XXXXXXXX",
  instagram: "thelivingroom",
  address: "Palermo Soho, Buenos Aires, Argentina",

  // Pricing (in USD per night)
  pricing: {
    studio: 0, // TODO: Set real price
    dosAmbientes: 0, // TODO: Set real price
  },

  // Cloudbeds integration
  // Get your API key from: https://hotels.cloudbeds.com/api
  cloudbeds: {
    apiKey: process.env.CLOUDBEDS_API_KEY || "",
    propertyId: process.env.CLOUDBEDS_PROPERTY_ID || "",
    baseUrl: "https://hotels.cloudbeds.com/api/v1.2",
  },

  // Stripe payment processing
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    secretKey: process.env.STRIPE_SECRET_KEY || "",
  },

  // Email configuration (SMTP)
  email_smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.SMTP_FROM || "reservas@thelivingroom.com.ar",
  },
};

export const UNIT_TYPES = {
  studio: {
    id: "studio",
    name: "Studio",
    subtitle: "1 Ambiente",
    size: "36 m²",
    maxGuests: 2,
    pricePerNight: SITE_CONFIG.pricing.studio,
  },
  "dos-ambientes": {
    id: "dos-ambientes",
    name: "2 Ambientes",
    subtitle: "Dos Ambientes",
    size: "50 m²",
    maxGuests: 4,
    pricePerNight: SITE_CONFIG.pricing.dosAmbientes,
  },
} as const;
