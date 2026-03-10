import AddPostForm from "@/components/AddPost"; 
import Hero1 from "@/components/actualite/Hero1";
export default function AddPost() {
  return (
    <div className="min-h-screen bg-slate-200 font-sans">
      <main className="flex flex-col p-4"> 
       <Hero1 />
        <AddPostForm /> 
      </main>
    </div>
  );
}