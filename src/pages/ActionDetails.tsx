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
import koriteFamillesImg from "@/assets/korite-familles.jpg";
import koriteTalibesImg1 from "@/assets/korite-talibes-1.jpg";
import koriteTalibesImg2 from "@/assets/korite-talibes-2.jpg";
import kitsScolairesImg1 from "@/assets/kits-scolaires-1.jpg";
import kitsScolairesImg2 from "@/assets/kits-scolaires-2.jpg";
import kitsScolairesImg3 from "@/assets/kits-scolaires-3.jpg";

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

  const getActionImage = (action: any) => {
    const titre = action.titre.toLowerCase();
    if (titre.includes('kits de korité') && titre.includes('familles')) return koriteFamillesImg;
    if (titre.includes('vêtements') && titre.includes('talibés')) return koriteTalibesImg1;
    if (titre.includes('kits scolaires')) return kitsScolairesImg1;
    
    // Fallback selon catégorie
    if (action.categorie === "Environnement") return treeImage;
    if (action.categorie === "Éducation") return educationImage;
    if (action.categorie === "Santé") return healthImage;
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
            <img 
              src={getActionImage(action)} 
              alt={action.titre}
              className="w-full h-full object-cover brightness-50"
            />
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

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Galerie Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={getActionImage(action)} 
                    alt={action.titre}
                    className="w-full aspect-video object-cover"
                  />
                </div>
                {action.titre.toLowerCase().includes('talibés') && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={koriteTalibesImg2} 
                      alt={`${action.titre} - Photo 2`}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                )}
                {action.titre.toLowerCase().includes('kits scolaires') && (
                  <>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={kitsScolairesImg2} 
                        alt={`${action.titre} - Photo 2`}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={kitsScolairesImg3} 
                        alt={`${action.titre} - Photo 3`}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

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
