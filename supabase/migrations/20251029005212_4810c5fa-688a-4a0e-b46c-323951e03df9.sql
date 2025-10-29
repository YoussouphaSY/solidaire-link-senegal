-- Create storage bucket for action media
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'actions-media',
  'actions-media',
  true,
  52428800,
  ARRAY['image/jpeg', 'image/png', 'image/jpg', 'video/mp4', 'video/webm']
);

-- Create storage policy for public read access
CREATE POLICY "Public Access to Action Media"
ON storage.objects FOR SELECT
USING (bucket_id = 'actions-media');

-- Create storage policy for authenticated upload
CREATE POLICY "Authenticated users can upload action media"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'actions-media' AND auth.role() = 'authenticated');

-- Create storage policy for authenticated update
CREATE POLICY "Authenticated users can update action media"
ON storage.objects FOR UPDATE
USING (bucket_id = 'actions-media' AND auth.role() = 'authenticated');