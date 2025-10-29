import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Union Solidaire" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-lg font-bold">Union Solidaire</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Unis pour aider, solidaire pour changer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="text-muted-foreground hover:text-primary">À Propos</Link></li>
              <li><Link to="/nos-actions" className="text-muted-foreground hover:text-primary">Nos Actions</Link></li>
              <li><Link to="/actualites" className="text-muted-foreground hover:text-primary">Actualités</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Donation combined on mobile */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3 md:mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Gandiaye, Sénégal</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+221771236791" className="hover:text-primary">+221 77 123 67 91</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">contact@unionsolidaire.sn</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-2 text-sm">Faire un don</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>Wave / Orange Money</li>
                <li className="font-medium text-primary">77 123 67 91</li>
                <li className="mt-2">
                  <a 
                    href="https://koparexpress.com/apps/collectes/n3hkz8jth9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Kopar Express
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4">Suivez-nous</h3>
            <div className="flex gap-4 flex-wrap">
              <a href="https://facebook.com/unionsolidaire" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/221771236791" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/unionsolidaire" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@unionsolidaire" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Union Solidaire. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
