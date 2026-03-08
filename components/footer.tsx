"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [

  { title: "Estimation", href: "#" },
  { title: "L'Agence", href: "#" },
  { title: "Recrutement", href: "#" },
  { title: "Contact", href: "contact" },
  { title: "Mentions Légales", href: "mentions" },
    { title: "Confidentialite", href: "confidentialite" },
];

const Footer = () => {
  return (
    <div className="w-full bg-slate-200">
      <footer 
        className="w-full bg-teal-700"
        style={{
          clipPath: "polygon(0% 30%, 50% 0%, 70% 15%, 85% 5%, 100% 20%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl pt-14 md:pt-20"> 
          <div className="flex flex-col items-center justify-start py-8 px-6">
            
            {/* --- Logo : Passage en Blanc pour fond Teal --- */}
            <div className="flex flex-col items-center leading-none mb-8">
              <span className="font-monoton text-2xl md:text-4xl tracking-widest text-white uppercase">
                merci
              </span>
              <span className="hidden md:block text-sm md:text-lg font-medium -mt-1 tracking-[0.4em] text-white ml-1 ">
                immobilier
              </span>
            </div>

            {/* Navigation : Remplacement par du blanc et du teal très clair */}
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    className="text-teal-50 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6">
            {/* Séparateur léger pour fond foncé */}
            <Separator className="bg-white/20" />
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-6 px-6 py-10 sm:flex-row">
            
            {/* Copyright Blanc avec signature Pinyon */}
            <span className="text-teal-100/80 text-sm font-medium">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-pinyon text-2xl text-white">Merci</span> 
              <span className="ml-1 text-white">Immobilier.</span>
              {" "}Tous droits réservés.
            </span>

            {/* Réseaux Sociaux : Blanc avec survol brillant */}
            <div className="flex items-center gap-6 text-white">
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;