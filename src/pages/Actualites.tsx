import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Actualites = () => {
  const actualites = [
    {
      id: 1,
      titre: "Grande campagne de reboisement prévue en avril",
      categorie: "Environnement",
      date: "15 Mars 2024",
      duree: "3 min de lecture",
      extrait: "Nous organisons une grande campagne de reboisement qui réunira plus de 200 bénévoles pour planter 1000 arbres dans la région de Gandiaye.",
      image: "🌳"
    },
    {
      id: 2,
      titre: "Nouvelle collecte de fournitures scolaires lancée",
      categorie: "Éducation",
      date: "10 Mars 2024",
      duree: "2 min de lecture",
      extrait: "Nous lançons une nouvelle campagne de collecte de fournitures scolaires pour la prochaine rentrée. Objectif : équiper 300 élèves.",
      image: "📚"
    },
    {
      id: 3,
      titre: "Assemblée générale annuelle - Bilan 2023",
      categorie: "Événement",
      date: "5 Mars 2024",
      duree: "5 min de lecture",
      extrait: "Découvrez le bilan de nos actions en 2023 : plus de 50 actions menées, 2000 bénéficiaires touchés et des projets ambitieux pour 2024.",
      image: "📊"
    },
    {
      id: 4,
      titre: "Partenariat avec l'ONG Environnement Sénégal",
      categorie: "Partenariat",
      date: "1 Mars 2024",
      duree: "4 min de lecture",
      extrait: "Union Solidaire signe un partenariat stratégique avec l'ONG Environnement Sénégal pour amplifier nos actions de reboisement.",
      image: "🤝"
    },
  ];

  const evenements = [
    {
      titre: "Journée de reboisement",
      date: "20 Avril 2024",
      lieu: "Forêt de Gandiaye",
      participants: "200 places"
    },
    {
      titre: "Distribution de fournitures",
      date: "15 Septembre 2024",
      lieu: "École primaire de Gandiaye",
      participants: "300 bénéficiaires"
    },
    {
      titre: "Assemblée générale 2024",
      date: "10 Décembre 2024",
      lieu: "Salle communale",
      participants: "Membres uniquement"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Événements</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Restez informé de nos dernières actions et événements à venir
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Dernières actualités</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {actualites.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <div className="text-6xl p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    {article.image}
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3">{article.categorie}</Badge>
                    <h3 className="font-semibold text-xl mb-3">{article.titre}</h3>
                    <p className="text-muted-foreground mb-4">{article.extrait}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.duree}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Événements à venir</h2>
            <div className="space-y-4">
              {evenements.map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{event.titre}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <span>📍 {event.lieu}</span>
                          <span>👥 {event.participants}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit">À venir</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <Card className="bg-gradient-to-br from-primary to-secondary text-white border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
                <p className="mb-6 opacity-90">
                  Inscrivez-vous à notre newsletter pour recevoir nos actualités directement dans votre boîte mail
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 rounded-lg text-foreground"
                  />
                  <button className="px-6 py-2 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
                    S'inscrire
                  </button>
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
