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
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Événements</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Restez informé de nos dernières actions et événements à venir
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Actualités Récentes</h2>
            
            <div className="space-y-8 mb-12">
              {actualites.map((actualite, index) => (
                <Link key={actualite.id} to={`/actualites/${actualite.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 overflow-hidden">
                        <img 
                          src={actualite.image_url || getImage(index)} 
                          alt={actualite.titre}
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="md:col-span-3 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="font-medium">{actualite.date}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{actualite.titre}</h3>
                          <p className="text-muted-foreground leading-relaxed text-base line-clamp-3">{actualite.description}</p>
                        </div>
                        <Button variant="link" className="p-0 mt-4 text-primary self-start">
                          Lire la suite →
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardContent className="p-10">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-3xl font-bold mb-4">Restez informé</h3>
                  <p className="mb-8 text-lg">
                    Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et événements
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white text-foreground border-none flex-1"
                    />
                    <Button 
                      type="submit" 
                      variant="secondary"
                      disabled={loading}
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
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
