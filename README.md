# Union Solidaire - Plateforme Web

Plateforme web moderne pour l'association Union Solidaire de Gandiaye, Sénégal.

## 🚀 Fonctionnalités

- **Page d'accueil** avec hero image et dernières actions
- **Nos Actions** - Galerie dynamique d'actions avec filtres
- **À Propos** - Présentation de l'association et du bureau
- **Contribuer** - Carnet Barkélou avec formulaire de contact
- **Actualités** - Blog avec newsletter
- **Contact** - Formulaires de contact et adhésion
- **Base de données** - Gestion dynamique du contenu via Lovable Cloud

## 🎨 Design System

### Couleurs
- **Primary (Vert citron)**: `#C3D600` - Espoir, entraide
- **Secondary (Bleu turquoise)**: `#33B6BB` - Solidarité, confiance
- **Arrière-plans**: Surfaces blanches et gris clair
- **Texte**: Noir pour le contenu principal

### Style
- Design épuré sans dégradés
- Images réelles pour les actions
- Typographie claire et lisible
- Entièrement responsive (mobile, tablette, desktop)

## 📊 Base de Données (Lovable Cloud)

### Accéder à la base de données

1. Cliquez sur l'onglet **"Cloud"** dans l'éditeur Lovable
2. Accédez à la section **"Database"**
3. Vous pouvez voir et modifier toutes les tables

### Tables principales

- **actions** - Actions de l'association (Nos Actions)
- **actualites** - Actualités et événements
- **newsletter_subscribers** - Abonnés newsletter
- **contact_messages** - Messages de contact et adhésion
- **contributions** - Demandes de contribution

### Exemples de requêtes

Ajouter une action:
```sql
INSERT INTO actions (titre, description, categorie, date, impact, media_type)
VALUES ('Titre', 'Description', 'Environnement', 'Mars 2024', '100 bénéficiaires', 'image');
```

Voir les messages reçus:
```sql
SELECT * FROM contact_messages ORDER BY created_at DESC;
```

## 📝 Modification du contenu

### Pages statiques

**Page d'accueil** (`src/pages/Index.tsx`)
- Statistiques: Ligne 36-41

**À Propos** (`src/pages/APropos.tsx`)
- Bureau: Ligne 18-39
- Objectifs: Ligne 41-51

**Contribuer** (`src/pages/Contribuer.tsx`)
- Informations de contact: Ligne 47-53

### Contenu dynamique

Géré via la base de données:
- Nos Actions → Table `actions`
- Actualités → Table `actualites`
- Messages → Tables `contact_messages` et `contributions`

## 🔧 Développement Local

```bash
npm install
npm run dev
```

## 📞 Support

Documentation Lovable: https://docs.lovable.dev/

---

**Union Solidaire** - Unis pour aider, solidaire pour changer 💚
