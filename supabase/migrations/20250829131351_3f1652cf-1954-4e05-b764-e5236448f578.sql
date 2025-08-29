-- Fix security issues

-- 1. Fix OTP expiry time (reduce from default to recommended 10 minutes)
UPDATE auth.config 
SET value = '600' 
WHERE parameter = 'otp_expiry';

-- 2. Improve event_tickets RLS policy for better security
-- Drop existing policy and create a more secure one
DROP POLICY IF EXISTS "Users can view own tickets" ON public.event_tickets;

-- Create a profiles table to properly link tickets to users
CREATE TABLE IF NOT EXISTS public.profiles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    email text NOT NULL,
    name text,
    phone text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create profile policies
CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Add user_id column to event_tickets for proper user linking
ALTER TABLE public.event_tickets 
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

-- Create a more secure RLS policy for event_tickets
CREATE POLICY "Users can view own tickets"
ON public.event_tickets
FOR SELECT
USING (
    -- Allow viewing if user is authenticated and either:
    -- 1. They own the ticket (user_id matches)
    -- 2. For legacy tickets without user_id, fall back to email matching
    auth.uid() IS NOT NULL AND (
        user_id = auth.uid() OR 
        (user_id IS NULL AND email = auth.email())
    )
);

-- Create trigger for updating updated_at on profiles
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();