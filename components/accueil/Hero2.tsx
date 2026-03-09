"use client";

import Image from "next/image";

export default function Hero2() {
  return (
    <section className="w-full bg-slate-200 overflow-hidden pt-12 md:pt-16 pb-0">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end">
        
        {/* --- Colonne Image : Hauteur réduite et collée en bas --- */}
        <div className="relative flex justify-center md:justify-end h-[350px] md:h-[420px] w-full order-1">
          <div 
            className="relative w-full h-full max-w-[480px] overflow-hidden shadow-2xl"
            style={{
              // On garde la pente : 20% de décalage en haut à gauche
              clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/accueil/accueil2.jpg" 
              alt="Maison Merci Immobilier" 
              fill 
              className="object-cover object-center scale-110" 
              priority
            />
          </div>
        </div>

        {/* --- Colonne Texte --- */}
        <div className="flex flex-col order-2 md:pl-6 pb-12 md:pb-16">
          <div className="max-w-xl">
            <div className="flex flex-col leading-tight mb-6">
              <h2 className="text-2xl md:text-3xl font-medium text-slate-800">
                Merci
              </h2>
              <p className="text-2xl md:text-4xl font-medium text-slate-800">
                Tu es débutant dans <span className="font-pinyon text-4xl md:text-5xl  italic">l'immobilier</span>
              </p>
            </div>

            <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed mb-8">
              <p className="font-semibold text-slate-800">
                Lancez-vous comme conseiller¹ immobilier indépendant
              </p>
            
                Changez d'horizon en apprenant un nouveau métier et en devenant votre propre patron !
            </div>

            {/* --- Bouton --- */}
            <button className="group relative bg-slate-800 text-white px-8 py-3 text-lg font-medium transition-all duration-300 ease-in-out hover:bg-teal-700 hover:shadow-xl active:scale-95 w-fit">
              Découvrir nos services
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}