import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TreePine, BookOpen, Heart, Users, Video, Image as ImageIcon, MessageSquare } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import treeImage from "@/assets/tree-planting.jpg";
import educationImage from "@/assets/education-aid.jpg";
import healthImage from "@/assets/health-campaign.jpg";

const NosActions = () => {
  const { data: actions = [] } = useQuery({
    queryKey: ['actions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('actions')
        .select('*')
        .order('created_at', { ascending: false });
      
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

  const temoignages = [
    {
      nom: "Fatou D.",
      role: "Mère de famille",
      message: "Grâce à Union Solidaire, mes enfants ont pu continuer leurs études. Je suis très reconnaissante.",
      type: "text"
    },
    {
      nom: "Moussa S.",
      role: "Agriculteur",
      message: "Le reboisement a transformé notre village. Nous avons maintenant de l'ombre et l'air est plus frais.",
      type: "text"
    },
    {
      nom: "Awa T.",
      role: "Enseignante",
      message: "Les fournitures scolaires ont fait une énorme différence. Les élèves sont plus motivés.",
      type: "text"
    },
  ];

  const stats = [
    { label: "Actions menées", value: "50+", icon: Heart },
    { label: "Bénéficiaires totaux", value: "2000+", icon: Users },
    { label: "Fonds utilisés", value: "5M FCFA", icon: TreePine },
    { label: "Bénévoles actifs", value: "150+", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Actions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'impact de nos initiatives à travers photos, vidéos et témoignages
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Notre Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-none shadow-sm">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Actions Récentes</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="all">Tout</TabsTrigger>
                <TabsTrigger value="videos">Vidéos</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {actions.map((action) => (
                    <Card key={action.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={getActionImage(action.categorie)} 
                          alt={action.titre}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-primary">{action.categorie}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{action.titre}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{action.date}</span>
                          <span className="font-medium text-primary">{action.impact}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {actions.filter(a => a.media_type === "video").map((action) => (
                    <Card key={action.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={getActionImage(action.categorie)} 
                          alt={action.titre}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{action.titre}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="photos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {actions.filter(a => a.media_type === "image").map((action) => (
                    <Card key={action.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={getActionImage(action.categorie)} 
                          alt={action.titre}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{action.titre}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="testimonials">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {temoignages.map((temoignage, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <MessageSquare className="h-8 w-8 text-primary mb-4" />
                        <p className="text-muted-foreground mb-4 italic">"{temoignage.message}"</p>
                        <div>
                          <p className="font-semibold">{temoignage.nom}</p>
                          <p className="text-sm text-muted-foreground">{temoignage.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NosActions;
