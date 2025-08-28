-- Fix security vulnerability in event_tickets RLS policy
-- Remove the overly permissive condition that allows any authenticated user to view all tickets
-- Keep only the email matching condition to ensure users can only see their own tickets

DROP POLICY IF EXISTS "Users can view own tickets" ON public.event_tickets;

CREATE POLICY "Users can view own tickets" ON public.event_tickets
  FOR SELECT 
  USING (email = ((current_setting('request.jwt.claims'::text, true))::json ->> 'email'::text));