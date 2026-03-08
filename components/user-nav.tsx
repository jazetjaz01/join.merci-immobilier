"use client";

import Link from "next/link";
import { User, LogOut, UserPlus, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative size-10 rounded-full border hover:bg-teal-50 dark:hover:bg-teal-950/30"
        >
          <User className="size-5 text-foreground hover:text-teal-600 transition-colors" />
          <span className="sr-only">Menu utilisateur</span>
        </Button>
      </DropdownMenuTrigger>
      
      {/* On force la font-sans pour Outfit et on aligne à droite */}
      <DropdownMenuContent align="end" className="w-56 font-sans mt-2">
        <DropdownMenuItem asChild className="cursor-pointer focus:text-teal-600">
          <Link href="/login" className="flex items-center">
            <LogIn className="mr-2 size-4" />
            <span>Se connecter</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer focus:text-teal-600">
          <Link href="/register" className="flex items-center">
            <UserPlus className="mr-2 size-4" />
            <span>Créer un compte</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="text-destructive focus:text-destructive cursor-pointer"
          onClick={() => console.log("Déconnexion...")}
        >
          <LogOut className="mr-2 size-4" />
          <span>Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}