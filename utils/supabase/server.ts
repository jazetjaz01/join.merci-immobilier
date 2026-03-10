import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Attention : Utilise bien ta clé ANON_KEY ici pour le client standard
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; 

export const createClient = async () => {
  // 1. On attend (await) la résolution des cookies
  const cookieStore = await cookies();

  return createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          // 2. Maintenant cookieStore est bien l'objet attendu
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignoré si appelé depuis un Server Component
          }
        },
      },
    }
  );
};