import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TourIstmo - Explora las maravillas de Panama",
  description:
    "Descubre los mejores destinos turisticos de Panama. Explora, comparte y disfruta de experiencias unicas en el corazon de Centroamerica.",
  keywords: [
    "turismo",
    "Panama",
    "destinos",
    "viajes",
    "aventura",
    "playas",
    "cultura",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#588684",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background antialiased">{children}</body>
    </html>
  );
}
