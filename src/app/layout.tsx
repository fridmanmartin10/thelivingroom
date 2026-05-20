import type { Metadata } from "next";
import { Oswald, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PAMPA club — un domingo a las nueve.",
  description:
    "Club de bienestar urbano en Buenos Aires. Café de especialidad, cocina saludable y movimiento — yoga & pilates. Para 200 socias.",
  keywords: [
    "pampa club",
    "café de especialidad",
    "wellness buenos aires",
    "pilates palermo",
    "yoga buenos aires",
    "bowls",
    "smoothies",
    "club de bienestar",
  ],
  openGraph: {
    title: "PAMPA club — un domingo a las nueve.",
    description:
      "Café, cocina y movimiento en un mismo lugar. Buenos Aires.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
