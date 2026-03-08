"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Hero1() {
  return (
    <section className="font-sans w-full overflow-hidden">
      {/* --- Grille Principale --- */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:h-[600px] relative">
        
        {/* --- Colonne IMAGE (Gauche) --- */}
        <div className="relative h-[350px] md:h-full w-full z-0">
          <Image
            src="/accueil/femme1.jpg" 
            alt="Vendre votre bien avec Merci Immobilier" 
            fill 
            priority 
            className="object-cover object-top" 
          />
        </div>

        {/* --- Colonne TEXTE (Droite avec l'effet biseauté) --- */}
        <div className="relative p-8 md:p-20 flex flex-col justify-center items-center md:items-start z-10 bg-slate-300
                        md:bg-transparent
                        md:after:content-[''] md:after:absolute 
                        md:after:top-0 md:after:bottom-0 md:after:right-0 
                        md:after:left-[-80px]
                        md:after:bg-slate-300 md:after:-z-10
                        md:after:[clip-path:polygon(0%_0%,100%_0%,100%_100%,80px_100%)]">

          {/* Contenu textuel avec couleurs adaptées au fond Slate-300 */}
          <div className="text-center md:text-left relative z-20 max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-wide mb-6">
              Pouvez vous estimer <br />
              <span className="font-pinyon text-5xl md:text-7xl  font-normal ">mon bien </span> <br />
              immobilier ?
            </h1>
            
            <p className="text-slate-700 text-lg md:text-xl mb-8 leading-relaxed">
              Nous vous accompagnons pour évaluer la valeur de votre bien en toute confiance.
              <span className="block mt-4 font-semibold text-slate-800">
                Une estimation gratuite et sans engagement en 24h
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}