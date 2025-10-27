import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contribuer = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contributions')
        .insert([formData]);

      if (error) throw error;

      toast.success("Merci pour votre contribution! Nous vous contacterons bientôt.");
      setFormData({ nom: "", email: "", telephone: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = {
    nom: "Amadou Diallo",
    telephone: "+221 77 123 45 67",
    email: "contact@unionsolidaire.org",
    wave: "+221 77 123 45 67",
    orangeMoney: "+221 77 123 45 67"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Carnet Barkélou</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Votre contribution fait la différence. Contactez-nous pour participer à nos actions solidaires.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations de Contact</CardTitle>
                  <CardDescription>
                    Contactez notre coordinateur pour toute contribution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">{contactInfo.nom}</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.telephone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3">Moyens de paiement mobile</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium">Wave Money</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.wave}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Orange Money</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.orangeMoney}</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => window.open(`https://wa.me/${contactInfo.telephone.replace(/\s/g, '')}`, '_blank')}
                  >
                    Contacter via WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Contribution Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Nous vous recontacterons rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Parlez-nous de votre souhait de contribution..."
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Envoi en cours..." : "Envoyer"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contribuer;
