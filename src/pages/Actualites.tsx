import { useState } from "react";
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
            
            <div className="space-y-6 mb-12">
              {actualites.map((actualite, index) => (
                <Card key={actualite.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img 
                        src={getImage(index)} 
                        alt={actualite.titre}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:col-span-2 p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{actualite.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{actualite.titre}</h3>
                      <p className="text-muted-foreground">{actualite.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
                <p className="mb-6 opacity-90">
                  Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et événements
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-foreground"
                  />
                  <Button 
                    type="submit" 
                    variant="secondary"
                    disabled={loading}
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    {loading ? "..." : "S'inscrire"}
                  </Button>
                </form>
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
