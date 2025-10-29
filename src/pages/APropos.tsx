import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart, BookOpen, TreePine } from "lucide-react";

const APropos = () => {
  const bureau = [
    { nom: "Abdoulaye Sy", fonction: "Président", photo: "👤" },
    { nom: "Bigué Ndiaye", fonction: "Vice-Présidente", photo: "👤" },
    { nom: "Ndèye Khady Diouf", fonction: "Secrétaire Générale", photo: "👤" },
    { nom: "Aladji Sarr", fonction: "Coordinateur", photo: "👤" },
    { nom: "Mariama Sy", fonction: "Chargée de la Trésorerie", photo: "👤" },
    { nom: "Latsouck Faye", fonction: "Chargée de la Trésorerie", photo: "👤" },
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
        <section className="py-16 px-4 bg-muted">
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
                Le Mouvement Union Solidaire est un mouvement régi par la loi n°68-08 du 26 mars 1968. 
                Fondé entre les adhérents aux statuts, notre association s'est donnée pour mission de 
                promouvoir la solidarité, l'entraide sociale, et de mener des actions sociales.
              </p>
              <p>
                Notre siège social se trouve à Gandiaye, mais des antennes peuvent être créées dans 
                d'autres régions du Sénégal. Au fil des années, nous avons su mobiliser de plus en plus 
                de membres et de sympathisants, nous permettant de mener des actions concrètes dans 
                divers domaines : distributions de dons, campagnes de reboisements, et soutiens 
                pédagogiques aux enfants en difficultés.
              </p>
              <p>
                L'an deux mille vingt-cinq, le deux janvier, s'est tenue à Dakar (Parcelles Assainies) 
                l'Assemblée Générale constitutive du Mouvement dénommé Union Solidaire. Les membres, 
                dûment convoqués, étaient présents à cette assemblée constitutive qui a permis de 
                mettre en place le bureau exécutif actuel.
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Objectifs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Promouvoir l'éducation</h3>
                  <p className="text-muted-foreground">
                    Soutenir les élèves dans leur parcours scolaire en fournissant du matériel 
                    et un accompagnement adapté.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <TreePine className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Protéger l'environnement</h3>
                  <p className="text-muted-foreground">
                    Mener des actions de reboisement et de sensibilisation à la protection de notre écosystème.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Renforcer la solidarité</h3>
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
            <div className="bg-primary text-primary-foreground p-10 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">
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
