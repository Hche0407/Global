import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalinmigration.com"),
  title: {
    default: "GlobalInmigration | Asesoría Migratoria Profesional en Colombia",
    template: "%s | GlobalInmigration",
  },
  description:
    "Asesoría migratoria especializada en Colombia: visas, prórrogas, cédula de extranjería, nacionalidad y convalidaciones. Acompañamiento legal claro, profesional y humano.",
  keywords: [
    "asesoría migratoria Colombia",
    "visa Colombia",
    "cédula de extranjería",
    "abogados migración",
    "trámites migratorios",
    "nacionalidad colombiana",
    "prórroga visa",
    "convalidación de títulos",
  ],
  authors: [{ name: "GlobalInmigration" }],
  creator: "GlobalInmigration",
  publisher: "GlobalInmigration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "GlobalInmigration | Asesoría Migratoria Profesional",
    description:
      "Soluciones migratorias estratégicas para vivir y avanzar en Colombia. Asesoría legal clara, profesional y humana.",
    type: "website",
    locale: "es_CO",
    siteName: "GlobalInmigration",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GlobalInmigration - Asesoría Migratoria Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalInmigration | Asesoría Migratoria",
    description: "Soluciones migratorias estratégicas en Colombia",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
