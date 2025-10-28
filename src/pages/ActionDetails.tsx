import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import treeImage from "@/assets/tree-planting.jpg";
import educationImage from "@/assets/education-aid.jpg";
import healthImage from "@/assets/health-campaign.jpg";

const ActionDetails = () => {
  const { id } = useParams();

  const { data: action, isLoading } = useQuery({
    queryKey: ['action', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('actions')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  const getActionImage = (categorie: string) => {
    if (categorie === "Environnement") return treeImage;
    if (categorie === "Éducation") return educationImage;
    if (categorie === "Santé") return healthImage;
    return treeImage;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!action) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Action non trouvée</h1>
            <Link to="/nos-actions">
              <Button>Retour aux actions</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0">
            {action.media_type === "video" && action.media_url ? (
              <video 
                src={action.media_url} 
                className="w-full h-full object-cover brightness-50"
                autoPlay
                loop
                muted
              />
            ) : (
              <img 
                src={action.media_url || getActionImage(action.categorie)} 
                alt={action.titre}
                className="w-full h-full object-cover brightness-50"
              />
            )}
          </div>
          <div className="container mx-auto relative z-10">
            <Link to="/nos-actions" className="inline-flex items-center gap-2 text-white mb-6 hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour aux actions</span>
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {action.categorie}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{action.titre}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold">{action.date}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className="font-semibold">{action.impact}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lieu</p>
                    <p className="font-semibold">Gandiaye</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {action.description}
              </p>
            </div>

            {action.media_url && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Media</h2>
                <div className="rounded-lg overflow-hidden">
                  {action.media_type === "video" ? (
                    <video 
                      src={action.media_url} 
                      controls
                      className="w-full aspect-video"
                    />
                  ) : (
                    <img 
                      src={action.media_url} 
                      alt={action.titre}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                </div>
              </div>
            )}

            <div className="bg-muted p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Soutenez nos actions</h3>
              <p className="text-muted-foreground mb-6">
                Votre contribution nous aide à mener davantage d'actions comme celle-ci
              </p>
              <Link to="/contribuer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Faire un don
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

export default ActionDetails;
