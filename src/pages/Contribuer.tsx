import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contribuer = () => {
  const { toast } = useToast();
  const [montant, setMontant] = useState("");
  const [moyenPaiement, setMoyenPaiement] = useState("wave");
  const [nom, setNom] = useState("");

  const montantsSuggeres = [5000, 10000, 25000, 50000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Merci pour votre contribution !",
      description: "Votre don nous aide à poursuivre notre mission solidaire.",
    });
  };

  const contributeurs = [
    { nom: "Amadou B.", montant: "50,000 FCFA", date: "Il y a 2 jours" },
    { nom: "Mariama S.", montant: "25,000 FCFA", date: "Il y a 3 jours" },
    { nom: "Ibrahima D.", montant: "100,000 FCFA", date: "Il y a 5 jours" },
    { nom: "Awa F.", montant: "15,000 FCFA", date: "Il y a 1 semaine" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Carnet Barkélou</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Votre contribution fait la différence dans la vie de nombreuses personnes
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <Heart className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">5,2M FCFA</div>
                  <div className="text-sm text-muted-foreground">Collectés ce mois</div>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 mx-auto mb-3 text-secondary" />
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Contributeurs actifs</div>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <TrendingUp className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold mb-1">35%</div>
                  <div className="text-sm text-muted-foreground">Objectif atteint</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Faire un don</CardTitle>
                  <CardDescription>
                    Chaque contribution compte, quelle que soit sa taille
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nom">Nom (optionnel)</Label>
                      <Input
                        id="nom"
                        placeholder="Votre nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label>Montant suggéré</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {montantsSuggeres.map((m) => (
                          <Button
                            key={m}
                            type="button"
                            variant={montant === m.toString() ? "default" : "outline"}
                            onClick={() => setMontant(m.toString())}
                          >
                            {m.toLocaleString()} FCFA
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="montant">Ou entrez un montant personnalisé</Label>
                      <Input
                        id="montant"
                        type="number"
                        placeholder="Montant en FCFA"
                        value={montant}
                        onChange={(e) => setMontant(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label>Moyen de paiement</Label>
                      <RadioGroup value={moyenPaiement} onValueChange={setMoyenPaiement} className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="wave" id="wave" />
                          <Label htmlFor="wave" className="cursor-pointer">Wave</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="orange" id="orange" />
                          <Label htmlFor="orange" className="cursor-pointer">Orange Money</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paydunya" id="paydunya" />
                          <Label htmlFor="paydunya" className="cursor-pointer">PayDunya</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Contribuer maintenant
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Recent Contributors */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contributeurs récents</CardTitle>
                    <CardDescription>
                      Merci à tous nos généreux donateurs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contributeurs.map((contributeur, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{contributeur.nom}</p>
                            <p className="text-sm text-muted-foreground">{contributeur.date}</p>
                          </div>
                          <p className="font-semibold text-primary">{contributeur.montant}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Où va votre argent ?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 40% Actions éducatives</li>
                      <li>• 30% Projets environnementaux</li>
                      <li>• 20% Aide sociale</li>
                      <li>• 10% Frais de fonctionnement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contribuer;
