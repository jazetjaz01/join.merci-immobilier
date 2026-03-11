import Hero1 from "@/components/profil/etudiant/Hero1";
import Hero2 from "@/components/profil/etudiant/Hero2";
import Hero3 from "@/components/profil/etudiant/Hero3";
import Hero4 from "@/components/profil/etudiant/Hero4";


export default function Entreprendre() {
  return (
    <div className="min-h-screen bg-slate-200 font-sans">
      
      <main className="flex flex-col">
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />

      

       
      </main>
    </div>
  );
}