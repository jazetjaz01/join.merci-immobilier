import Hero1 from "@/components/accueil/Hero1";
import Hero2 from "@/components/accueil/Hero2";
import Hero3 from "@/components/accueil/Hero3";



export default function Home() {
  return (
    <div className="min-h-screen bg-slate-200 font-sans">
      
      <main className="flex flex-col">
        <Hero1 />
       <Hero2 />
      <Hero3 />
       
       

       
      </main>
    </div>
  );
}