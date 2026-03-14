import Hero1 from "@/components/profil/professionnel/Hero1";
import Hero2 from "@/components/profil/professionnel/Hero2";
import Hero3 from "@/components/profil/professionnel/Hero3";
import Hero4 from "@/components/profil/professionnel/Hero4";


export default function Professionnel() {
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