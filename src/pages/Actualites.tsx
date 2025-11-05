import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import eventImage from "@/assets/event-meeting.jpg";
import trainingImage from "@/assets/volunteer-training.jpg";

const Actualites = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: actualites = [] } = useQuery({
    queryKey: ['actualites'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('actualites')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const getImage = (index: number) => {
    return index % 2 === 0 ? eventImage : trainingImage;
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          toast.error("Cet email est déjà inscrit à la newsletter.");
        } else {
          throw error;
        }
      } else {
        toast.success("Merci de votre inscription à la newsletter!");
        setEmail("");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Actualités & Événements
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Restez informé de nos dernières actions et événements à venir
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center md:text-left">Actualités Récentes</h2>
            
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
              {actualites.map((actualite, index) => (
                <Link key={actualite.id} to={`/actualites/${actualite.id}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/50 hover:border-primary/20">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 overflow-hidden relative">
                        <img 
                          src={actualite.image_url || getImage(index)} 
                          alt={actualite.titre}
                          className="w-full h-56 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="md:col-span-3 p-5 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                            <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                            <span className="font-medium">{actualite.date}</span>
                          </div>
                          <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors line-clamp-2">
                            {actualite.titre}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-2 md:line-clamp-3">
                            {actualite.description}
                          </p>
                        </div>
                        <Button variant="link" className="p-0 mt-3 md:mt-4 text-primary self-start font-semibold group-hover:gap-2 transition-all">
                          Lire la suite 
                          <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground border-none shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Restez informé</h3>
                  <p className="mb-6 md:mb-8 text-sm md:text-lg opacity-95">
                    Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et événements
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/95 text-foreground border-none flex-1 h-11 md:h-12 shadow-sm"
                    />
                    <Button 
                      type="submit" 
                      variant="secondary"
                      disabled={loading}
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg h-11 md:h-12 font-semibold"
                    >
                      {loading ? "Inscription..." : "S'inscrire"}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Actualites;
