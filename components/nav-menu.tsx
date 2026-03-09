"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props} className={cn("!flex-col w-full max-w-full", props.className)}>
    <NavigationMenuList className="w-full !flex-col md:!flex-row">
      
      {/* MENU DÉROULANT : Votre Profil */}
      <NavigationMenuItem className="w-full md:w-auto">
        <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "w-full justify-center md:w-max")}>
          Votre profil
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1">
            <li>
              <NavigationMenuLink asChild>
                <Link
                  href="/profil/etudiant"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Étudiant</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Lancez votre carrière immobilière pendant vos études.
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  href="/profil/reconversion"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">En reconversion</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Changez de vie et devenez expert immobilier.
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  href="/profil/professionnel"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Professionnel</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Boostez votre activité avec notre réseau.
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* LIENS SIMPLES SUIVANTS */}
      <NavigationMenuItem className="w-full md:w-auto">
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "w-full justify-center md:w-max")}>
          <Link href="/entreprendre">Entreprendre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      <NavigationMenuItem className="w-full md:w-auto">
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "w-full justify-center md:w-max")}>
          <Link href="/offre">Notre offre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      <NavigationMenuItem className="w-full md:w-auto">
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "w-full justify-center md:w-max")}>
          <Link href="/actualite">Actualité</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className="w-full md:w-auto">
        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "w-full justify-center md:w-max")}>
          <Link href="/contact">Contact</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);