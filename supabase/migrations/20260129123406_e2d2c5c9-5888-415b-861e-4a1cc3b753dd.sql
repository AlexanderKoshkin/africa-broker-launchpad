-- Create AGA Contacts table for lead capture
CREATE TABLE public."AGA Contacts" (
  full_name TEXT NOT NULL,
  email TEXT,
  phone_number BIGINT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public."AGA Contacts" ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT for form submissions (anyone can submit a lead)
CREATE POLICY "Allow public insert" 
ON public."AGA Contacts" 
FOR INSERT 
WITH CHECK (true);

-- Restrict SELECT to authenticated users only (for admin access later)
CREATE POLICY "Restrict read access" 
ON public."AGA Contacts" 
FOR SELECT 
USING (auth.role() = 'authenticated');