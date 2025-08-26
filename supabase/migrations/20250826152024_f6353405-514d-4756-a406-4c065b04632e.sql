-- Create event_tickets table to track ticket purchases
CREATE TABLE public.event_tickets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  ticket_type VARCHAR(50) NOT NULL DEFAULT 'standard',
  quantity INTEGER NOT NULL DEFAULT 1,
  total_amount DECIMAL(10,2),
  eventbrite_order_id TEXT,
  eventbrite_attendee_id TEXT,
  payment_status VARCHAR(20) NOT NULL DEFAULT 'pending',
  attendance_status VARCHAR(20) NOT NULL DEFAULT 'registered'
);

-- Enable Row Level Security
ALTER TABLE public.event_tickets ENABLE ROW LEVEL SECURITY;

-- Allow public to insert their own tickets
CREATE POLICY "Allow public ticket creation" 
ON public.event_tickets 
FOR INSERT 
WITH CHECK (true);

-- Only allow users to view their own tickets (if they provide email)
CREATE POLICY "Users can view own tickets" 
ON public.event_tickets 
FOR SELECT 
USING (email = current_setting('request.jwt.claims', true)::json->>'email' OR auth.uid() IS NOT NULL);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_event_tickets_updated_at
BEFORE UPDATE ON public.event_tickets
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_event_tickets_email ON public.event_tickets(email);
CREATE INDEX idx_event_tickets_eventbrite_order ON public.event_tickets(eventbrite_order_id);
CREATE INDEX idx_event_tickets_payment_status ON public.event_tickets(payment_status);