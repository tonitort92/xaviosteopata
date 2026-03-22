import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xavi Sánchez | Osteópata · Fisioterapeuta · Acupuntura | Ripollet",
  description:
    "Osteópata MROE 192, Fisioterapeuta Col. 1794. Más de 25 años de experiencia en tratamientos holísticos. Osteopatía, Acupuntura y MTC en Ripollet, Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
