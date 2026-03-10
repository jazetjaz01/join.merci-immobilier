"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, MapPin, User2 } from "lucide-react"; // Pour enrichir le visuel

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
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b pb-8">
        <div>
          <h2 className="font-bold text-4xl text-slate-900 tracking-tight">
            Découvrez nos biens
          </h2>
          <p className="text-muted-foreground mt-2">Trouvez l'annonce qui vous correspond à Perpignan et alentours.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-500">Trier par :</span>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[200px] bg-white shadow-sm">
              <SelectValue placeholder="Ordre d'affichage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Plus récents</SelectItem>
              <SelectItem value="popular">Plus populaires</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          [...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[16/10] w-full rounded-2xl bg-slate-200 animate-pulse" />
              <div className="h-4 w-1/3 bg-slate-200 animate-pulse rounded" />
              <div className="h-8 w-full bg-slate-200 animate-pulse rounded" />
            </div>
          ))
        ) : (
          posts.map((post) => (
            <Card 
              className="group overflow-hidden border-none bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col" 
              key={post.id}
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.image_url ? (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                    <MapPin className="text-slate-300 size-12" />
                  </div>
                )}
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur-md border-none px-3 py-1 shadow-sm">
                    {post.category || "Exclusivité"}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-slate-800 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Description courte (tronquée) */}
                <p className="text-muted-foreground text-sm mt-3 line-clamp-2 italic">
                  {post.content || "Aucune description disponible pour ce bien."}
                </p>

                {/* Footer de la carte */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200">
                      <User2 size={14} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {post.author_name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <CalendarDays size={14} />
                    <span className="text-xs font-medium">
                      {new Date(post.created_at).toLocaleDateString("fr-FR", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Empty State */}
      {!loading && posts.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-3xl bg-slate-50/50">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
             <MapPin className="text-slate-300 size-8" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Aucun bien trouvé</h3>
          <p className="text-muted-foreground">Revenez plus tard ou publiez votre première annonce.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;