import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const BollenBroodjes = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/bewijzen"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Terug naar Bewijzen
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">BollenBroodjes</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Over dit project</h2>
              <p className="text-muted-foreground leading-relaxed">
                Een online bakkerij bestelsysteem met CI/CD pipeline.
                Automatische tests en deployments zijn geïmplementeerd.
              </p>
            </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Kenmerken</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Online bestellingen</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Automatische tests</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Continue deployment</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Ordertracking</span>
                </li>
              </ul>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Gebruikte Technologieën
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground">Python</h3>
                  <p className="text-sm text-muted-foreground">
                    Backend logica
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-foreground">CI/CD</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatisering
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-6">Project Info</h3>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Voltooid</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3">📅 Periode</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Start:</span>
                    <span className="ml-2 font-medium">2024-02</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Eind:</span>
                    <span className="ml-2 font-medium">2024-04</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  🏷️ Technologieën
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary">
                    Python
                  </span>
                  <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary">
                    CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
