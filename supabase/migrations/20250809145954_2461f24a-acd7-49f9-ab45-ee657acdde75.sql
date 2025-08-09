-- Create policies for the AGA Contacts table to allow public form submissions
-- This is a public contact form, so we allow anyone to insert contact information

-- Policy to allow anyone to insert into AGA Contacts (for public contact form)
CREATE POLICY "Allow public contact form submissions" 
ON public."AGA Contacts" 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Policy to allow service role to read contacts (for admin purposes)
CREATE POLICY "Allow service role to read contacts" 
ON public."AGA Contacts" 
FOR SELECT 
TO service_role
USING (true);