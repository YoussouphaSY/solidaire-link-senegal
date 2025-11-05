import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, TreePine, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-solidarity.jpg";
import treeImage from "@/assets/tree-planting.jpg";
import educationImage from "@/assets/education-aid.jpg";
import healthImage from "@/assets/health-campaign.jpg";
import koriteFamillesImg from "@/assets/korite-familles.jpg";
import koriteTalibesImg1 from "@/assets/korite-talibes-1.jpg";
import koriteTalibesImg2 from "@/assets/korite-talibes-2.jpg";
import kitsScolairesImg1 from "@/assets/kits-scolaires-1.jpg";
import kitsScolairesImg2 from "@/assets/kits-scolaires-2.jpg";
import kitsScolairesImg3 from "@/assets/kits-scolaires-3.jpg";

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

  const getActionImage = (action: any) => {
    const titre = action.titre.toLowerCase();
    if (titre.includes('kits de korité') && titre.includes('familles')) return koriteFamillesImg;
    if (titre.includes('vêtements') && titre.includes('talibés')) return koriteTalibesImg1;
    if (titre.includes('kits scolaires')) return kitsScolairesImg1;
    return educationImage;
  };

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
        {/* Hero Carousel Section */}
        <section className="relative overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[500px] md:h-[600px]">
                  <div className="absolute inset-0">
                    <img 
                      src={heroImage} 
                      alt="Union Solidaire solidarité"
                      className="w-full h-full object-cover brightness-50"
                    />
                  </div>
                  <div className="container mx-auto text-center space-y-6 relative z-10 h-full flex flex-col justify-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-in">
                      Ensemble pour un avenir meilleur
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                      Construisons une communauté solidaire à Gandiaye
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                          Rejoindre l'association
                        </Button>
                      </Link>
                      <Link to="/contribuer">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                          Faire un don
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative h-[500px] md:h-[600px]">
                  <div className="absolute inset-0 bg-black">
                    <video 
                      src="https://kmacqgbyltcpgdhudenp.supabase.co/storage/v1/object/public/videos/sample-video.mp4"
                      className="w-full h-full object-cover opacity-70"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <div className="container mx-auto text-center space-y-6 relative z-10 h-full flex flex-col justify-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-in">
                      L'action en mouvement
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                      Découvrez nos actions sur le terrain
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/nos-actions">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                          Voir nos actions
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative h-[500px] md:h-[600px]">
                  <div className="absolute inset-0">
                    <img 
                      src={treeImage} 
                      alt="Reboisement et environnement"
                      className="w-full h-full object-cover brightness-50"
                    />
                  </div>
                  <div className="container mx-auto text-center space-y-6 relative z-10 h-full flex flex-col justify-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-in">
                      Préservons notre environnement
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                      Plus de 5000 arbres plantés pour les générations futures
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/nos-actions">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                          Nos actions environnement
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative h-[500px] md:h-[600px]">
                  <div className="absolute inset-0">
                    <img 
                      src={educationImage} 
                      alt="Éducation et formation"
                      className="w-full h-full object-cover brightness-50"
                    />
                  </div>
                  <div className="container mx-auto text-center space-y-6 relative z-10 h-full flex flex-col justify-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-in">
                      Éduquons pour l'avenir
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                      500+ élèves soutenus dans leur parcours scolaire
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/nos-actions">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                          Nos actions éducation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative h-[500px] md:h-[600px]">
                  <div className="absolute inset-0">
                    <img 
                      src={healthImage} 
                      alt="Santé et bien-être"
                      className="w-full h-full object-cover brightness-50"
                    />
                  </div>
                  <div className="container mx-auto text-center space-y-6 relative z-10 h-full flex flex-col justify-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-in">
                      La santé pour tous
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                      Campagnes de sensibilisation et soutien médical
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/nos-actions">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                          Nos actions santé
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
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
                <Link key={action.id} to={`/nos-actions/${action.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={getActionImage(action)} 
                        alt={action.titre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-primary">{action.categorie}</span>
                      <h3 className="font-semibold mb-2 mt-1 text-lg">{action.titre}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
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

        {/* Programme Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Programme 2025</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nos actions planifiées pour cette année
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">29 Mars 2025</div>
                  <h3 className="font-bold text-lg mb-3">Dons de Korité - Familles</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribution de kits de korité pour les familles diminuées
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">29 Mars 2025</div>
                  <h3 className="font-bold text-lg mb-3">Dons de Korité - Talibés</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribution de vêtements de korité pour 18 talibés
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">11 Octobre 2025</div>
                  <h3 className="font-bold text-lg mb-3">Kits Scolaires</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribution de 65 sacs et fournitures scolaires
                  </p>
                </CardContent>
              </Card>
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
