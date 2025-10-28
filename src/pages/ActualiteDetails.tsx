import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import eventImage from "@/assets/event-meeting.jpg";

const ActualiteDetails = () => {
  const { id } = useParams();

  const { data: actualite } = useQuery({
    queryKey: ['actualite', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('actualites')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  if (!actualite) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Chargement...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-8 px-4 bg-muted">
          <div className="container mx-auto">
            <Link to="/actualites">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux actualités
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={actualite.image_url || eventImage} 
                  alt={actualite.titre}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium text-base">{actualite.date}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{actualite.titre}</h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                    {actualite.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Nous contacter pour plus d'informations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ActualiteDetails;
