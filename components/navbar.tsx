import Link from "next/link"; // On importe Link
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { UserNav } from "./user-nav";

const Navbar = () => {
  return (
    <nav className="h-24 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo avec lien vers la Homepage */}
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          {/* Menu Déroulant Utilisateur */}
          <UserNav />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;