import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, TreePine, BookOpen, Video, Image as ImageIcon, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-solidarity.jpg";

const Index = () => {
  const { data: recentActions = [] } = useQuery({
    queryKey: ['recent-actions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('actions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    }
  });

  const stats = [
    { label: "Actions menées", value: "50+", icon: Heart },
    { label: "Bénéficiaires", value: "2000+", icon: Users },
    { label: "Arbres plantés", value: "5000+", icon: TreePine },
    { label: "Élèves aidés", value: "500+", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Union Solidaire - Solidarité en action" 
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="container mx-auto text-center space-y-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Unis pour aider,<br />
              <span className="text-primary">solidaire pour changer</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Rejoignez-nous dans notre mission de solidarité et de changement positif à Gandiaye et au-delà.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Rejoindre l'association
                </Button>
              </Link>
              <Link to="/contribuer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Faire un don
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
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

        {/* Recent Actions Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Dernières Actions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos actions récentes à travers photos, vidéos et témoignages
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {recentActions.map((action) => (
                <Card key={action.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    {action.media_type === "video" && <Video className="h-16 w-16 text-primary" />}
                    {action.media_type === "image" && <ImageIcon className="h-16 w-16 text-secondary" />}
                    {action.media_type === "testimonial" && <MessageSquare className="h-16 w-16 text-accent" />}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{action.titre}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/nos-actions">
                <Button variant="outline" size="lg">
                  Voir toutes nos actions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="container mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ensemble, nous pouvons faire la différence</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Votre contribution, quelle qu'elle soit, nous aide à poursuivre nos actions solidaires
            </p>
            <Link to="/contribuer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/80">
                Contribuer maintenant
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
