-- Create actions table for dynamic content management
CREATE TABLE public.actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre TEXT NOT NULL,
  description TEXT NOT NULL,
  categorie TEXT NOT NULL,
  date TEXT NOT NULL,
  impact TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('video', 'image', 'testimonial')),
  media_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create actualites table
CREATE TABLE public.actualites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT now()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  region TEXT,
  message TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('contact', 'adhesion')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create contributions table (for Carnet Barkélou)
CREATE TABLE public.contributions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.actualites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contributions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Actions are viewable by everyone"
  ON public.actions FOR SELECT
  USING (true);

CREATE POLICY "Actualites are viewable by everyone"
  ON public.actualites FOR SELECT
  USING (true);

-- Allow anyone to insert contact messages, newsletter subscriptions, and contributions
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contributions"
  ON public.contributions FOR INSERT
  WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for timestamp updates
CREATE TRIGGER update_actions_updated_at
  BEFORE UPDATE ON public.actions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_actualites_updated_at
  BEFORE UPDATE ON public.actualites
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for actions
INSERT INTO public.actions (titre, description, categorie, date, impact, media_type) VALUES
  ('Reboisement de Gandiaye', 'Plantation de 500 arbres avec la participation de 100 bénévoles', 'Environnement', 'Mars 2024', '500 arbres plantés', 'video'),
  ('Distribution de fournitures scolaires', '200 élèves ont reçu des kits scolaires complets', 'Éducation', 'Octobre 2023', '200 élèves équipés', 'image'),
  ('Aide aux familles démunies', 'Distribution de denrées alimentaires à 50 familles', 'Social', 'Décembre 2023', '50 familles aidées', 'image'),
  ('Campagne de sensibilisation', 'Sensibilisation sur l''hygiène et la prévention des maladies', 'Santé', 'Janvier 2024', '300 personnes sensibilisées', 'video');

-- Insert sample data for actualites
INSERT INTO public.actualites (titre, description, date) VALUES
  ('Nouvelle campagne de reboisement', 'Rejoignez-nous le 15 juin pour planter 1000 arbres dans la région', 'Juin 2024'),
  ('Assemblée générale annuelle', 'Notre AG se tiendra le 20 mai au siège de l''association', 'Mai 2024'),
  ('Formation des bénévoles', 'Session de formation prévue pour nos nouveaux bénévoles', 'Avril 2024');