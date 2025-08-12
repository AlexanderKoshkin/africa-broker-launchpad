-- Secure AGA Contacts: restrict SELECT to service role only
-- 1) Drop overly permissive SELECT policy (if present)
DROP POLICY IF EXISTS "Allow service role to read contacts" ON public."AGA Contacts";

-- 2) Create least-privilege SELECT policy for service role only
CREATE POLICY "Only service role can read contacts"
ON public."AGA Contacts"
FOR SELECT
TO service_role
USING (true);

-- NOTE: Keep existing public INSERT policy to not break the contact form
-- (No changes to INSERT policy)
