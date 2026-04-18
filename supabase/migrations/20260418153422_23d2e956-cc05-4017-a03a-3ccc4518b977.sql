
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.assessment_leads;

CREATE POLICY "Public can submit valid leads"
  ON public.assessment_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (company IS NULL OR char_length(company) <= 200)
    AND (message IS NULL OR char_length(message) <= 2000)
  );
