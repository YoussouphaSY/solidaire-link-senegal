# Plateforme Union Solidaire

Plateforme web communautaire et solidaire pour l'association Union Solidaire basée à Gandiaye, Sénégal.

## 🎯 Description

Cette plateforme permet à Union Solidaire de :
- Promouvoir leurs actions sociales et solidaires
- Gérer les adhésions et cotisations des membres
- Faciliter les contributions externes (Carnet Barkélou)
- Valoriser l'impact à travers médias et témoignages

## 🎨 Design System

### Couleurs
Les couleurs de la plateforme sont définies dans `src/index.css` :

```css
--primary: 70 100% 42%      /* Vert citron (#C3D600) - Espoir, entraide */
--secondary: 183 56% 47%    /* Bleu turquoise (#33B6BB) - Solidarité, confiance */
--foreground: 0 0% 0%       /* Noir - Texte principal */
--background: 0 0% 100%     /* Blanc - Fond */
--muted: 0 0% 96.1%         /* Gris clair - Sections et bordures */
```

### Modifier les couleurs
Pour changer les couleurs de l'application, éditez le fichier `src/index.css` :

1. Ouvrez `src/index.css`
2. Modifiez les valeurs HSL dans la section `:root`
3. Les changements s'appliqueront automatiquement à toute l'application

## 📱 Pages de la Plateforme

### 1. **Page d'Accueil** (`src/pages/Index.tsx`)
- Hero avec slogan "Unis pour aider, solidaire pour changer"
- Statistiques d'impact (actions menées, bénéficiaires, etc.)
- Section "Nos Dernières Actions" avec vidéos, photos et témoignages
- Boutons CTA : "Rejoindre" et "Faire un don"

**Modifier :**
- Les statistiques : Cherchez `const stats =` ligne 12
- Les actions récentes : Cherchez `const recentActions =` ligne 20
- Le texte du hero : Lignes 54-64

### 2. **À Propos** (`src/pages/APropos.tsx`)
- Histoire de l'association
- Membres du bureau directeur
- Valeurs et objectifs
- Vision d'expansion régionale

**Modifier :**
- Membres du bureau : Cherchez `const bureau =` ligne 7
- Valeurs : Cherchez `const valeurs =` ligne 16
- Texte de l'histoire : Section ligne 33-53

### 3. **Nos Actions** (`src/pages/NosActions.tsx`)
- Liste des actions avec filtres (Tout, Vidéos, Photos, Témoignages)
- Galerie multimédia
- Témoignages de bénéficiaires
- Statistiques d'impact détaillées

**Modifier :**
- Actions : Cherchez `const actions =` ligne 8
- Témoignages : Cherchez `const temoignages =` ligne 44
- Statistiques : Cherchez `const stats =` ligne 60

### 4. **Contribuer / Carnet Barkélou** (`src/pages/Contribuer.tsx`)
- Formulaire de don
- Montants suggérés
- Moyens de paiement (Wave, Orange Money, PayDunya)
- Liste des contributeurs récents
- Transparence sur l'utilisation des fonds

**Modifier :**
- Montants suggérés : Cherchez `const montantsSuggeres =` ligne 14
- Contributeurs récents : Cherchez `const contributeurs =` ligne 22
- Répartition des fonds : Ligne 143-148

### 5. **Actualités** (`src/pages/Actualites.tsx`)
- Articles et news
- Événements à venir avec calendrier
- Inscription newsletter

**Modifier :**
- Articles : Cherchez `const actualites =` ligne 7
- Événements : Cherchez `const evenements =` ligne 52

### 6. **Contact & Adhésion** (`src/pages/Contact.tsx`)
- Formulaire de contact
- Formulaire d'adhésion
- Informations de contact (adresse, téléphone, email)
- Lien WhatsApp
- Avantages de l'adhésion

**Modifier :**
- Informations de contact : Lignes 38-73
- Montant de cotisation : Ligne 202

## 🧩 Composants Partagés

### Header (`src/components/Header.tsx`)
Navigation responsive avec menu mobile.

**Modifier :**
- Menu de navigation : Cherchez `const navLinks =` ligne 10

### Footer (`src/components/Footer.tsx`)
Footer avec liens rapides et réseaux sociaux.

**Modifier :**
- Informations de contact : Lignes 36-54
- Liens réseaux sociaux : Lignes 58-68

## 🚀 Développement

### Installation
```bash
npm install
```

### Lancer le serveur de développement
```bash
npm run dev
```

### Build pour production
```bash
npm run build
```

## 📱 Responsive Design

La plateforme est entièrement responsive et s'adapte aux :
- 📱 Téléphones mobiles (< 768px)
- 📲 Tablettes (768px - 1024px)
- 💻 Desktop (> 1024px)

Les composants utilisent Tailwind CSS avec des classes responsive (`md:`, `lg:`, etc.).

## 🛠️ Technologies Utilisées

- **React 18** - Framework frontend
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Shadcn/ui** - Composants UI
- **React Router** - Navigation
- **Lucide React** - Icônes
- **Vite** - Build tool

## 📝 Guide de Modification Rapide

### Changer le logo
1. Remplacez le `div` avec gradient dans `Header.tsx` ligne 22
2. Utilisez une image : `<img src="/logo.png" alt="Union Solidaire" />`

### Ajouter une nouvelle page
1. Créez un fichier dans `src/pages/` (ex: `NouvelePage.tsx`)
2. Ajoutez la route dans `src/App.tsx`
3. Ajoutez le lien dans `Header.tsx` et `Footer.tsx`

### Modifier les couleurs du bouton
Les boutons utilisent automatiquement la couleur `primary`. Pour changer :
- Éditez `--primary` dans `src/index.css`

### Ajouter des images/vidéos réelles
Pour remplacer les placeholders :
1. Ajoutez vos images dans `public/images/`
2. Remplacez les placeholders avec : `<img src="/images/votre-image.jpg" />`

## 🔧 Configuration

### SEO
Éditez `index.html` pour modifier :
- Le titre de la page
- La meta description
- Les balises Open Graph

### Moyens de paiement
Les intégrations de paiement (Wave, Orange Money, PayDunya) nécessitent :
1. Création de comptes marchands
2. Obtention des API keys
3. Configuration dans les variables d'environnement

## 📞 Support

Pour toute question ou assistance, contactez :
- Email : contact@unionsolidaire.sn
- WhatsApp : +221 XX XXX XX XX

## 📄 Licence

© 2024 Union Solidaire. Tous droits réservés.

---

**Slogan :** Unis pour aider, solidaire pour changer 💚💙
