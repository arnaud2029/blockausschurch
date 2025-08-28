import { serve } from 'https://deno.land/std@0.190.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TicketData {
  name: string
  email: string
  phone?: string
  ticket_type: string
  quantity: number
  total_amount: number
  ticket_id: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const ticketData = await req.json() as TicketData

    // Create HTML template for the ticket
    const ticketHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #ff6b35, #f7931e, #ffd700);
            color: #333;
          }
          .ticket {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border: 3px solid #ff6b35;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px dashed #ff6b35;
            padding-bottom: 20px;
          }
          .event-title {
            font-size: 28px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
            text-transform: uppercase;
          }
          .event-subtitle {
            font-size: 18px;
            color: #f7931e;
            margin-bottom: 20px;
          }
          .ticket-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }
          .info-item {
            background: #fff5f0;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #ff6b35;
          }
          .info-label {
            font-weight: bold;
            color: #ff6b35;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
          .info-value {
            font-size: 16px;
            color: #333;
          }
          .ticket-type {
            text-align: center;
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 15px;
            border-radius: 25px;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          .qr-placeholder {
            text-align: center;
            background: #f0f0f0;
            padding: 40px;
            border-radius: 10px;
            margin-bottom: 20px;
            color: #666;
          }
          .event-details {
            background: #fff5f0;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
          .date-time {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
          }
          .location {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 20px;
          }
          .festive-pattern {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #ffd700, #ff6b35);
            opacity: 0.1;
            border-radius: 0 15px 0 100px;
          }
        </style>
      </head>
      <body>
        <div class="ticket">
          <div class="festive-pattern"></div>
          
          <div class="header">
            <div class="event-title">🎉 After Church Blockhauss 🎊</div>
            <div class="event-subtitle">Événement Festif Ivoirien</div>
          </div>

          <div class="ticket-type">
            ${ticketData.ticket_type === 'standard' ? '🎫 TICKET STANDARD' : 
              ticketData.ticket_type === 'vip' ? '👑 TICKET VIP' : '💎 TICKET PREMIUM'}
          </div>

          <div class="ticket-info">
            <div class="info-item">
              <div class="info-label">Nom du participant</div>
              <div class="info-value">${ticketData.name}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Email</div>
              <div class="info-value">${ticketData.email}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Téléphone</div>
              <div class="info-value">${ticketData.phone || 'Non fourni'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Quantité</div>
              <div class="info-value">${ticketData.quantity} ticket(s)</div>
            </div>
          </div>

          <div class="qr-placeholder">
            <div style="font-size: 48px; margin-bottom: 10px;">📱</div>
            <div>Code QR - ID: ${ticketData.ticket_id}</div>
            <div style="font-size: 12px; margin-top: 10px;">Présentez ce ticket à l'entrée</div>
          </div>

          <div class="event-details">
            <div class="date-time">📅 Dimanche 29 Décembre 2024 - 15h00</div>
            <div class="location">📍 Blockhauss, Abidjan - Côte d'Ivoire</div>
            <div style="margin-top: 15px; font-weight: bold; color: #ff6b35;">
              ${ticketData.total_amount === 0 ? '🎁 ENTRÉE GRATUITE' : `💰 ${ticketData.total_amount.toLocaleString()} FCFA`}
            </div>
          </div>

          <div class="footer">
            <p><strong>Instructions importantes :</strong></p>
            <p>• Présentez ce ticket (imprimé ou sur mobile) à l'entrée</p>
            <p>• Arrivez 30 minutes avant le début de l'événement</p>
            <p>• Ce ticket est personnel et non transférable</p>
            <p style="margin-top: 15px; color: #ff6b35; font-weight: bold;">
              🎊 Merci de votre participation ! Préparez-vous à vivre une expérience inoubliable ! 🎊
            </p>
          </div>
        </div>
      </body>
    </html>
    `

    // Convert HTML to PDF using a service or return HTML for now
    const response = new Response(ticketHtml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
        'Content-Disposition': `attachment; filename="ticket-${ticketData.name.replace(/\s+/g, '-')}-${ticketData.ticket_id}.html"`
      }
    })

    return response

  } catch (error) {
    console.error('Ticket generation error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate ticket', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})