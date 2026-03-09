"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    {/* J'ai épuré la liste pour laisser le fichier UI gérer l'alignement et les traits verticaux */}
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="profil">Votre profil</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="entreprendre">Entreprendre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="offre">Notre offre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="actualite">Actualité</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
       <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="contact">Contact</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);