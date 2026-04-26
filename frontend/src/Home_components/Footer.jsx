import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-center text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Nasj.Technologie. All rights reserved
      </p>
      <button
        onClick={scrollToTop}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp />
      </button>
    </footer>
  );
};
