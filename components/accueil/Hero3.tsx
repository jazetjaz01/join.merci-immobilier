"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero3() {
  return (
    <section className="w-full bg-slate-200 overflow-hidden pt-12 pb-16 md:pb-24">
      {/* gap-4 pour un espace minimal entre les colonnes de la grille */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* --- Colonne Texte (Gauche) : Décalée vers la droite via md:pl-20 --- */}
        <div className="flex flex-col order-2 md:order-1 md:pl-16 lg:pl-32 mt-8 md:mt-0">
          <div className="max-w-xl">
            {/* Badge Expertise */}
            <div className="flex items-center gap-2  mb-4">
              <MapPin className="size-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Agent immobilier ou agent commercial</span>
            </div>

            <div className="flex flex-col leading-tight mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
                Relance ta carrière 
              </h2>
              <p className="text-3xl md:text-4xl font-medium text-slate-800">
                dans <span className="font-pinyon text-5xl md:text-6xl  ">l'immobilier</span>
              </p>
            </div>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed mb-10">
              <p className="font-semibold text-slate-900">
                Tu veux travailler differement à ton rythme sans pression
              </p>
              <p>
                Tu as envie de transmettre et de créer une équipe avec toi
              </p>
            </div>

            {/* Bouton d'action */}
            <Link href="/contact" className="inline-block">
              <button className="group relative bg-slate-800 text-white px-10 py-4 text-lg font-medium transition-all duration-300 ease-in-out hover:bg-teal-700 hover:shadow-xl active:scale-95 flex items-center gap-2 w-fit">
                Estimer mon bien avec une agence
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* --- Colonne Image (Droite) : Décalée vers la droite via md:justify-start --- */}
        <div className="relative flex justify-center md:justify-start h-[350px] md:h-[450px] w-full order-1 md:order-2">
          {/* - md:justify-start : Colle l'image sur le bord gauche de SA colonne (donc vers le texte).
              - max-w-[480px] : Maintient la taille du trapèze.
          */}
          <div 
            className="relative w-full h-full max-w-[480px] overflow-hidden shadow-2xl"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
            }}
          >
            <Image
              src="/accueil/accueil3.jpg" 
              alt="Estimation en agence Sixième Avenue" 
              fill 
              className="object-cover object-top scale-110" 
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}