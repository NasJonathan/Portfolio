import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Standard icons
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export const Navbar = ({ title = "NasPortfolio" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-6",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Brand Name */}
        <a className="text-3xl font-bold ">{title}</a>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Menu Toggle: Shows "Menu" on desktop, Icon on mobile */}
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center px-3 py-2 md:px-4 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-colors font-medium text-sm"
            aria-label="Toggle Menu"
          >
            {/* Mobile Icon *}
            <span className="md:hidden">
              isMenuOpen ? <X size={20} />
            </span>
          </button> */}

          {/* Back Button (Always visible) */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="p-2 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-colors"
            aria-label="Back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Simple Mobile Dropdown or Overlay logic can go here 
         if you want something to appear when isMenuOpen is true 
      */}
    </nav>
  );
};
