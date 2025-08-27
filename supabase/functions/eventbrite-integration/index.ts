import { serve } from 'https://deno.land/std@0.190.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CreateOrderRequest {
  event_id: string
  name: string
  email: string
  phone?: string
  ticket_class_id: string
  quantity: number
}

interface EventbriteResponse {
  id: string
  status: string
  attendees?: Array<{
    id: string
    profile: {
      name: string
      email: string
    }
  }>
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const eventbriteApiKey = Deno.env.get('EVENTBRITE_API_KEY')
    if (!eventbriteApiKey) {
      console.error('EVENTBRITE_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { action, ...requestData } = await req.json() as { action: string } & CreateOrderRequest

    console.log('Eventbrite API request:', { action, requestData })

    const baseUrl = 'https://www.eventbriteapi.com/v3'
    const headers = {
      'Authorization': `Bearer ${eventbriteApiKey}`,
      'Content-Type': 'application/json',
    }

    if (action === 'create_order') {
      const { event_id, name, email, phone, ticket_class_id, quantity } = requestData

      // Create order payload
      const orderPayload = {
        order: {
          event_id,
          attendees: Array(quantity).fill(null).map(() => ({
            profile: {
              name,
              email,
              phone: phone || undefined
            },
            ticket_class_id,
            quantity: 1
          }))
        }
      }

      console.log('Creating Eventbrite order:', JSON.stringify(orderPayload, null, 2))

      const response = await fetch(`${baseUrl}/orders/`, {
        method: 'POST',
        headers,
        body: JSON.stringify(orderPayload)
      })

      const responseText = await response.text()
      console.log('Eventbrite API response status:', response.status)
      console.log('Eventbrite API response:', responseText)

      if (!response.ok) {
        return new Response(
          JSON.stringify({ 
            error: 'Eventbrite API error', 
            details: responseText,
            status: response.status 
          }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      let responseData: EventbriteResponse
      try {
        responseData = JSON.parse(responseText)
      } catch {
        return new Response(
          JSON.stringify({ error: 'Invalid response from Eventbrite' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          order: responseData,
          order_id: responseData.id 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (action === 'get_event_info') {
      const { event_id } = requestData
      
      // Get event details
      const eventResponse = await fetch(`${baseUrl}/events/${event_id}/`, {
        headers
      })

      if (!eventResponse.ok) {
        const errorText = await eventResponse.text()
        console.error('Error fetching event:', errorText)
        return new Response(
          JSON.stringify({ error: 'Failed to fetch event details', details: errorText }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      const eventData = await eventResponse.json()

      // Get ticket classes
      const ticketResponse = await fetch(`${baseUrl}/events/${event_id}/ticket_classes/`, {
        headers
      })

      let ticketClasses = []
      if (ticketResponse.ok) {
        const ticketData = await ticketResponse.json()
        ticketClasses = ticketData.ticket_classes || []
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          event: eventData,
          ticket_classes: ticketClasses
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { 
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Eventbrite integration error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})