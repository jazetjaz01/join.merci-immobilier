"use client";

import Image from "next/image";

export default function Recrutement() {
  return (
    <section className="w-full bg-slate-200 overflow-hidden pt-0 pb-16 md:pb-24">
      {/* On passe à gap-8 pour un espacement équilibré et élégant */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-start">
        
        {/* --- Colonne Image : Trapèze inversé --- */}
        <div className="relative flex justify-center md:justify-end h-[350px] md:h-[420px] w-full order-1">
          <div 
            className="relative w-full h-full max-w-[480px] overflow-hidden shadow-2xl"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
            }}
          >
            <Image
             src="/profil/etudiant/etudiant4.jpg" 
              alt="Rejoindre l'équipe Merci Immobilier" 
              fill 
              className="object-cover object-top scale-110" 
              priority
            />
          </div>
        </div>

        {/* --- Colonne Texte : Léger recul pour la clarté --- */}
        <div className="flex flex-col order-2 md:pl-8 mt-8 md:mt-20">
          <div className="max-w-xl">
            <div className="flex flex-col leading-tight mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
                Devenez
              </h2>
              <p className="text-3xl md:text-4xl font-medium text-slate-800">
                acteur de <span className="font-pinyon text-5xl md:text-6xl  ">votre succès</span>
              </p>
            </div>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed mb-10">
              <p className="font-semibold text-slate-900">
                Vous avez le sens du service et l'envie d'entreprendre ? Rejoignez le réseau Merci Immobilier.
              </p>
              <p>
                Nous recherchons des agents passionnés qui partagent nos valeurs. Profitez d'un accompagnement personnalisé et d'outils performants au sein d'une équipe à taille humaine.
              </p>
            </div>

            {/* Bouton d'action */}
            <button className="group relative bg-slate-800 text-white px-10 py-4 text-lg font-medium transition-all duration-300 ease-in-out hover:bg-teal-700 hover:shadow-xl active:scale-95 w-fit">
              Nous rejoindre
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}