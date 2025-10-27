import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart } from "lucide-react";

const APropos = () => {
  const bureau = [
    { nom: "Prénom Nom", fonction: "Président", photo: "👤" },
    { nom: "Prénom Nom", fonction: "Vice-Président", photo: "👤" },
    { nom: "Prénom Nom", fonction: "Secrétaire Général", photo: "👤" },
    { nom: "Prénom Nom", fonction: "Trésorier", photo: "👤" },
    { nom: "Prénom Nom", fonction: "Coordinateur", photo: "👤" },
    { nom: "Prénom Nom", fonction: "Chargé de Communication", photo: "👤" },
  ];

  const valeurs = [
    { titre: "Solidarité", icon: Heart, description: "Nous croyons en l'entraide et le soutien mutuel" },
    { titre: "Engagement", icon: Users, description: "Nous sommes dévoués à notre communauté" },
    { titre: "Transparence", icon: Target, description: "Nous agissons avec clarté et honnêteté" },
    { titre: "Impact", icon: Eye, description: "Nous visons des changements concrets et durables" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Nous</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez qui nous sommes et ce qui nous anime
            </p>
          </div>
        </section>

        {/* Histoire */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <div className="prose max-w-none text-muted-foreground space-y-4">
              <p>
                Union Solidaire est née de la volonté d'un groupe de jeunes citoyens de Gandiaye, 
                désireux de contribuer au développement de leur communauté. Fondée en [année], 
                notre association s'est donnée pour mission de promouvoir la solidarité et l'entraide.
              </p>
              <p>
                Au fil des années, nous avons su mobiliser de plus en plus de membres et de sympathisants, 
                nous permettant de mener des actions concrètes dans divers domaines : éducation, 
                environnement, santé, et aide sociale.
              </p>
              <p>
                Aujourd'hui, Union Solidaire compte plus de [nombre] membres actifs et a touché 
                la vie de milliers de personnes à travers ses différentes initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {valeurs.map((valeur, index) => (
                <Card key={index} className="text-center border-none shadow-sm">
                  <CardContent className="pt-6">
                    <valeur.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">{valeur.titre}</h3>
                    <p className="text-sm text-muted-foreground">{valeur.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Objectifs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Nos Objectifs</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Promouvoir l'éducation</h3>
                  <p className="text-muted-foreground">
                    Soutenir les élèves dans leur parcours scolaire en fournissant du matériel 
                    et un accompagnement adapté.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Protéger l'environnement</h3>
                  <p className="text-muted-foreground">
                    Mener des actions de reboisement et de sensibilisation à la protection de notre écosystème.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Renforcer la solidarité</h3>
                  <p className="text-muted-foreground">
                    Créer des liens forts au sein de la communauté et apporter aide aux plus démunis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bureau */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Notre Bureau</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {bureau.map((membre, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-6xl mb-4">{membre.photo}</div>
                    <h3 className="font-semibold text-lg mb-1">{membre.nom}</h3>
                    <p className="text-sm text-primary">{membre.fonction}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous aspirons à étendre notre action à l'échelle régionale et nationale, 
              en créant des antennes dans plusieurs villes du Sénégal. Notre objectif est 
              de devenir un acteur majeur du développement solidaire et communautaire au Sénégal.
            </p>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg">
              <p className="text-xl font-semibold">
                "Ensemble, construisons un Sénégal plus solidaire et prospère"
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
