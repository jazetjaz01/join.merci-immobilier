"use client";

export const Logo = () => (
  <div className="flex flex-col items-center leading-none">
    {/* "merci" toujours en Monoton avec un grand espacement */}
    <span className="font-monoton text-2xl md:text-4xl tracking-widest text-teal-600">
      merci
    </span>
    
    {/* "immobilier" avec un espacement de lettres élargi (tracking-widest) */}
    <span className="hidden md:block text-sm md:text-base font-medium -mt-1 tracking-[0.5em] ">
      immobilier
    </span>
  </div>
);