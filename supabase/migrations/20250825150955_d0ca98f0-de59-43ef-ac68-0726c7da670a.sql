-- Fix critical security issue: Remove public SELECT access to personal data
DROP POLICY IF EXISTS "Allow public to view their own registration" ON public.event_registrations;
DROP POLICY IF EXISTS "Allow public to insert registrations" ON public.event_registrations;

-- Create new secure policies
-- Allow public to insert registrations (needed for the form)
CREATE POLICY "Allow public registration" 
ON public.event_registrations 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated admin users to view registrations
-- For now, we'll restrict all SELECT access until proper admin system is set up
CREATE POLICY "Restrict all SELECT access" 
ON public.event_registrations 
FOR SELECT 
USING (false);

-- Note: In a real-world scenario, you would want to:
-- 1. Create an admin role system
-- 2. Allow only admins to SELECT: USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()))
-- 3. Or allow users to see only their own registration: USING (auth.uid()::text = some_user_id_column)