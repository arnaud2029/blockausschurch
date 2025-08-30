import { CountdownTimer } from '@/components/CountdownTimer';
import { RegistrationForm } from '@/components/RegistrationForm';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import Chatbot from '@/components/Chatbot';
import EventbriteBooking from '@/components/EventbriteBooking';
import { Calendar, MapPin, Heart, Users, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  // Event date: 31 août 2025 à 08h00
  const eventDate = new Date('2025-08-31T08:00:00');

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Hero Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/2cb1f843-7427-4c41-bf7d-47fda089b87d.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/95" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <header className="text-center mb-20 animate-fade-in-up">
            <div className="mb-8 floating-element">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black aurora-text mb-8 leading-tight text-shadow-neon">
                AFTER CHURCH
                <span className="block bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow-flow">BLOCKHAUSS</span>
              </h1>
              <div className="w-40 h-3 bg-gradient-aurora mx-auto rounded-full mb-10 shadow-floating animate-aurora-flow"></div>
            </div>
            
            <div className="rainbow-border p-8 max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl text-foreground/95 leading-relaxed font-bold text-shadow-neon">
                Un rendez-vous mensuel pour se retrouver, partager et grandir ensemble 
                dans un esprit d'unité et d'amour.
              </p>
            </div>
          </header>

          {/* Event Details */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="morphing-card p-8 rounded-3xl premium-glow floating-element">
                <Calendar className="w-16 h-16 text-accent mx-auto mb-6 animate-neon-pulse" />
                <h3 className="text-2xl font-black mb-4 aurora-text">Quand ?</h3>
                <p className="text-foreground/80 text-lg font-semibold">31 Août 2025</p>
                <p className="text-foreground/80 text-lg font-semibold">08h00</p>
              </div>
              
              <div className="morphing-card p-8 rounded-3xl premium-glow floating-element" style={{ animationDelay: '0.2s' }}>
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-6 animate-neon-pulse" />
                <h3 className="text-2xl font-black mb-4 aurora-text">Où ?</h3>
                <p className="text-foreground/80 text-lg font-semibold">Cocody Blockhauss</p>
                <p className="text-foreground/80 text-lg font-semibold">Au bord de l'eau</p>
              </div>
              
              <div className="morphing-card p-8 rounded-3xl premium-glow floating-element" style={{ animationDelay: '0.4s' }}>
                <Users className="w-16 h-16 text-tertiary mx-auto mb-6 animate-neon-pulse" />
                <h3 className="text-2xl font-black mb-4 aurora-text">Qui ?</h3>
                <p className="text-foreground/80 text-lg font-semibold">Tous les cœurs</p>
                <p className="text-foreground/80 text-lg font-semibold">unis par l'amour</p>
              </div>
            </div>
          </section>

          {/* Countdown Section */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-16">
              <div className="rainbow-border p-6 max-w-2xl mx-auto mb-8">
                <h2 className="text-4xl md:text-5xl font-black aurora-text mb-4 text-shadow-neon">
                  <Sparkles className="w-12 h-12 inline mr-4 animate-glitch" />
                  Compte à rebours
                </h2>
                <p className="text-xl text-foreground/90 font-bold">
                  Plus que quelques instants avant ce moment magique
                </p>
              </div>
            </div>
            <CountdownTimer targetDate={eventDate} />
          </section>

          {/* Mission Section */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="morphing-card p-12 md:p-16 rounded-3xl text-center premium-glow floating-element">
              <Heart className="w-20 h-20 text-accent mx-auto mb-8 animate-neon-pulse" />
              <h2 className="text-4xl md:text-5xl font-black aurora-text mb-8 text-shadow-neon">
                Notre Mission
              </h2>
              <div className="rainbow-border p-6 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-foreground/95 leading-relaxed font-bold">
                  Trouver le bon espace, assurer une organisation pratique et veiller à la réussite totale 
                  de chaque rencontre. Chaque dernier dimanche du mois, nous nous retrouvons pour partager, 
                  grandir et célébrer ensemble notre unité dans l'amour divin.
                </p>
              </div>
            </div>
          </section>

          {/* Ticket Booking Section */}
          <section className="animate-fade-in-up mb-20" style={{ animationDelay: '1s' }}>
            <div className="text-center mb-16">
              <div className="rainbow-border p-8 max-w-3xl mx-auto mb-8">
                <h2 className="text-4xl md:text-5xl font-black aurora-text mb-4 text-shadow-neon">
                  <Sparkles className="w-12 h-12 inline mr-4 animate-glitch" />
                  Réservez votre place
                </h2>
                <p className="text-xl text-foreground/90 font-bold">
                  Sécurisez votre participation à cet événement unique
                </p>
              </div>
            </div>
            <EventbriteBooking />
          </section>

          {/* Registration Section */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="morphing-card p-10 rounded-3xl premium-glow">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-black aurora-text mb-4">
                  Ou inscrivez-vous à notre liste
                </h2>
                <p className="text-foreground/80 text-lg font-semibold">
                  Recevez les dernières informations sur l'événement
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <RegistrationForm />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="rainbow-border p-10 floating-element">
              <p className="text-foreground/80 mb-4 text-xl font-semibold">
                Organisé avec ❤️ par
              </p>
              <p className="text-3xl font-black aurora-text text-shadow-neon">
                Le Môgô De GOD
              </p>
            </div>
          </footer>

        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </main>
  );
};

export default Index;