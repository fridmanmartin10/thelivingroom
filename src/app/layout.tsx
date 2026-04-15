import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Living Room | Hotel Boutique en Palermo Soho",
  description:
    "40 departamentos totalmente amoblados y equipados con materiales de primera categoría en el corazón de Palermo Soho, Buenos Aires.",
  keywords: [
    "hotel boutique",
    "palermo soho",
    "buenos aires",
    "departamentos amoblados",
    "alojamiento",
    "the living room",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
