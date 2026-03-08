"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm({ property, agent }: { property: any, agent: any }) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  
  // Correction ici : on utilise React.FormEvent sans le générique 
  // et on caste e.currentTarget pour FormData
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    const payload = {
  fullName: formData.get("fullName"),
  email: formData.get("email"),
  phone: formData.get("phone"),
  hasPropertyToSell: formData.get("hasPropertyToSell") === "on",
  propertyTitle: property.title,
  propertyRef: property.reference,
  city: property.city,
  zipcode: property.zipcode,
  price: property.price 
};

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        setSent(true);
      } else {
        // Affiche l'erreur renvoyée par Resend ou l'API
        alert("Erreur API : " + (result.error?.message || result.error || "Inconnue"));
      }
    } catch (err) {
      alert("Erreur réseau : Impossible de contacter l'API");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-teal-50/50 border border-teal-100 p-8 text-center animate-in fade-in zoom-in duration-500 rounded-sm">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-600 p-2 rounded-full">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Votre demande a bien été envoyée !</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Nous avons bien reçu votre message concernant le bien : <br/>
          <span className="font-bold text-teal-800">"{property.title}"</span>.
        </p>
        <div className="h-[1px] w-12 bg-teal-200 mx-auto mb-4"></div>
        <p className="text-xs text-teal-700 font-medium uppercase tracking-wider">
          {agent?.name?.split(' ')[0] || 'Notre équipe'} vous recontactera sous 24h.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 pt-8 border-t border-slate-100">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">
        Je souhaite être recontacté
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="fullName" 
          type="text" 
          placeholder="Nom complet *" 
          required 
          className="w-full border-b border-slate-200 py-3 text-sm focus:border-teal-700 outline-none bg-transparent transition-all" 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email *" 
          required 
          className="w-full border-b border-slate-200 py-3 text-sm focus:border-teal-700 outline-none bg-transparent transition-all" 
        />
        <input 
          name="phone" 
          type="tel" 
          placeholder="Téléphone *" 
          required 
          className="w-full border-b border-slate-200 py-3 text-sm focus:border-teal-700 outline-none bg-transparent transition-all" 
        />

        <div className="py-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input name="hasPropertyToSell" type="checkbox" className="w-4 h-4 accent-teal-700 rounded-none" />
            <span className="text-sm text-slate-600 group-hover:text-teal-700 transition-colors">Avez-vous un bien à vendre ?</span>
          </label>
        </div>

        <p className="text-[10px] text-slate-400 leading-relaxed italic">
          En cliquant sur le bouton ci-dessous, je reconnais avoir pris connaissance et accepter les CGU et la politique de confidentialité.
        </p>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-slate-900 text-white py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-teal-800 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </button>
      </form>
    </div>
  );
}