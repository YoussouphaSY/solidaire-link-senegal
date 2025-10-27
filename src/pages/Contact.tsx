import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formType, setFormType] = useState<"contact" | "adhesion">("contact");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    region: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ ...formData, type: formType }]);

      if (error) throw error;

      toast.success(
        formType === 'adhesion' 
          ? "Demande d'adhésion envoyée avec succès! Nous vous contacterons bientôt." 
          : "Message envoyé avec succès! Nous vous répondrons rapidement."
      );
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        region: "",
        message: ""
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Adhésion</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez-nous ou contactez-nous pour plus d'informations
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium mb-1">Adresse</p>
                  <p className="text-xs text-muted-foreground">Gandiaye, Sénégal</p>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <p className="text-sm font-medium mb-1">Téléphone</p>
                  <p className="text-xs text-muted-foreground">+221 XX XXX XX XX</p>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <p className="text-sm font-medium mb-1">Email</p>
                  <p className="text-xs text-muted-foreground">contact@unionsolidaire.sn</p>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium mb-1">WhatsApp</p>
                  <a href="https://wa.me/221XXXXXXXXX" className="text-xs text-muted-foreground hover:text-primary">
                    Nous contacter
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={formType === "contact" ? "default" : "outline"}
                onClick={() => setFormType("contact")}
              >
                Nous contacter
              </Button>
              <Button
                variant={formType === "adhesion" ? "default" : "outline"}
                onClick={() => setFormType("adhesion")}
              >
                Demande d'adhésion
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {formType === "contact" ? "Envoyez-nous un message" : "Rejoignez Union Solidaire"}
                  </CardTitle>
                  <CardDescription>
                    {formType === "contact" 
                      ? "Nous sommes à votre écoute pour toute question ou suggestion"
                      : "Remplissez ce formulaire pour devenir membre de notre association"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input 
                        id="nom" 
                        placeholder="Votre nom" 
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input 
                        id="telephone" 
                        type="tel" 
                        placeholder="+221 XX XXX XX XX" 
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        required 
                      />
                    </div>

                    {formType === "adhesion" && (
                      <div>
                        <Label htmlFor="region">Région</Label>
                        <Input 
                          id="region" 
                          placeholder="Votre région" 
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder={formType === "contact" 
                          ? "Votre message..." 
                          : "Pourquoi souhaitez-vous rejoindre Union Solidaire ?"}
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={loading}
                    >
                      {loading ? "Envoi en cours..." : (formType === "contact" ? "Envoyer le message" : "Envoyer la demande")}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">
                      {formType === "contact" ? "Horaires d'ouverture" : "Avantages de l'adhésion"}
                    </h3>
                    {formType === "contact" ? (
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Lundi - Vendredi : 9h00 - 18h00</li>
                        <li>• Samedi : 9h00 - 13h00</li>
                        <li>• Dimanche : Fermé</li>
                        <li className="pt-2 text-xs">
                          Pour les urgences, contactez-nous via WhatsApp
                        </li>
                      </ul>
                    ) : (
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Participer à toutes nos actions</li>
                        <li>• Voter lors des assemblées générales</li>
                        <li>• Accès à notre réseau de solidarité</li>
                        <li>• Formations et ateliers gratuits</li>
                        <li>• Carte de membre officielle</li>
                      </ul>
                    )}
                  </CardContent>
                </Card>

                {formType === "adhesion" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Cotisation annuelle</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">5,000 FCFA</div>
                        <p className="text-sm text-muted-foreground">Par an</p>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Cette cotisation permet de financer nos actions et le fonctionnement de l'association
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-primary text-white border-none">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Besoin d'aide ?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Notre coordinateur est disponible sur WhatsApp
                    </p>
                    <a 
                      href="https://wa.me/221XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        Discuter sur WhatsApp
                      </Button>
                    </a>
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

export default Contact;
