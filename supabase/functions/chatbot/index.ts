import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const eventInfo = `
AFTER CHURCH BLOCKHAUSS - Informations sur l'événement

Date: 31 août 2025
Heure: 08:00
Lieu: BLOCKHAUSS, Paris
Organisateur: Charles Bomban

Description: 
Un événement spécial "After Church" organisé au BLOCKHAUSS. C'est un rassemblement communautaire après les services religieux du dimanche, créant un espace de convivialité et de partage.

Public cible: 
- Jeunes adultes et adultes de 18-40 ans
- Communauté religieuse et leurs amis
- Personnes intéressées par les rencontres communautaires

Activités prévues:
- Moments de partage et de discussion
- Rafraîchissements et collations
- Musique et ambiance conviviale
- Opportunités de networking et nouvelles rencontres

Inscription: 
Les participants peuvent s'inscrire via le formulaire sur le site web en fournissant leur nom, email et numéro de téléphone.

Contact:
Pour toute question, contactez Charles Bomban, l'organisateur de l'événement.
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    console.log('Received message:', message);

    if (!message) {
      throw new Error('Message is required');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: `Tu es un assistant virtuel pour l'événement "AFTER CHURCH BLOCKHAUSS". Tu dois répondre uniquement aux questions concernant cet événement en français. Sois chaleureux, accueillant et informatif. Voici les informations sur l'événement:\n\n${eventInfo}\n\nSi quelqu'un pose une question qui n'est pas liée à l'événement, redirige poliment la conversation vers l'événement et propose ton aide pour toute question à ce sujet.`
          },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', response.status, errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', data);
    
    const botResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});