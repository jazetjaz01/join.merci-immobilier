import type { Metadata } from "next";
import { Outfit, Pinyon_Script, Monoton } from "next/font/google"; // Importation de Monoton
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit", 
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

// Configuration de Monoton
const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
});

export const metadata: Metadata = {
  title: "Merci Immobilier",
  description: "Premier réseau de mandataires par la gentillesse!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Ajout des trois variables de police ici */}
      <body className={`${outfit.variable} ${pinyon.variable} ${monoton.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}