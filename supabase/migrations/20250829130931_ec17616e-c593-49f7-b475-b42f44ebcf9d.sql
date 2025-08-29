-- Fix RLS policies for event_tickets table
-- The issue is that INSERT requires public access but SELECT should be restricted

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public ticket creation" ON public.event_tickets;
DROP POLICY IF EXISTS "Users can view own tickets" ON public.event_tickets;

-- Create new policies with proper restrictions
CREATE POLICY "Allow public ticket creation" 
ON public.event_tickets 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view own tickets" 
ON public.event_tickets 
FOR SELECT 
USING (
  -- Allow viewing if the email matches the authenticated user's email
  CASE 
    WHEN auth.uid() IS NOT NULL THEN 
      email = ((current_setting('request.jwt.claims'::text, true))::json ->> 'email'::text)
    ELSE 
      false
  END
);