"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, MapPin, User2, ArrowRight, Home } from "lucide-react";

interface Post {
  id: string;
  title: string;
  category: string;
  author_name: string;
  image_url: string;
  created_at: string;
  content: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error("Erreur Supabase:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Header Minimaliste */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-l-4 border-primary pl-6">
        <div className="space-y-2">
          <h2 className="font-bold text-5xl text-slate-900 tracking-tighter uppercase">
            nos articles <br />Merci
          </h2>
          <p className="text-slate-500 text-lg uppercase tracking-widest text-sm">
            France — Actualité
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Select defaultValue="latest">
            <SelectTrigger className="w-[200px] rounded-none border-slate-200 focus:ring-0 ">
              <SelectValue placeholder="Trier" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="latest">Plus récents</SelectItem>
              <SelectItem value="popular">Populaires</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid avec suppression des arrondis */}
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          [...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[3/2] w-full bg-slate-100 animate-pulse" />
              <div className="h-6 w-full bg-slate-100 animate-pulse" />
              <div className="h-4 w-1/2 bg-slate-100 animate-pulse" />
            </div>
          ))
        ) : (
          posts.map((post) => (
            <div 
              className="group flex flex-col h-full bg-white transition-all duration-300" 
              key={post.id}
            >
              {/* Image Edge-to-Edge (Bord à bord) */}
              <div className="relative aspect-[3/2] overflow-hidden">
                {post.image_url ? (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                    <Home className="text-slate-200 size-12" />
                  </div>
                )}
                
                {/* Badge angulaire */}
                <div className="absolute top-0 left-0">
                  <Badge className="rounded-none bg-slate-900 text-white border-none px-4 py-2 font-light uppercase tracking-tighter shadow-none">
                    {post.category || "Vente"}
                  </Badge>
                </div>
              </div>

              {/* Contenu textuel sans cadre (CardContent supprimé pour plus de liberté) */}
              <div className="py-6 flex flex-col flex-grow p-4">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-3">
                    <MapPin size={12} className="text-primary" />
                    <span>Perpignan</span>
                </div>

                <h3 className="font-bold text-2xl text-slate-900 leading-tight mb-4 group-hover:underline decoration-primary underline-offset-8 transition-all">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm line-clamp-2 mb-6 font-light leading-relaxed">
                  {post.content || "Description détaillée disponible sur demande."}
                </p>

                {/* Footer sans bordure inutile */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      {post.author_name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 text-[11px] font-medium uppercase tracking-widest">
                      {new Date(post.created_at).toLocaleDateString("fr-FR")}
                    </span>
                    <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* État vide minimaliste */}
      {!loading && posts.length === 0 && (
        <div className="mt-20 py-24 border-y border-slate-100 text-center">
          <p className="text-slate-400 uppercase tracking-[0.3em] text-sm italic">
            Aucun bien disponible actuellement
          </p>
        </div>
      )}
    </div>
  );
};

export default Blog;