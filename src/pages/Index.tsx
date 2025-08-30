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
          <header className="text-center mb-16 animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold cyber-text mb-6 leading-tight animate-neon-pulse">
                AFTER CHURCH
                <span className="block gradient-text animate-glitch">BLOCKHAUSS</span>
              </h1>
              <div className="w-32 h-2 bg-gradient-neon mx-auto rounded-full mb-8 shadow-neon animate-pulse-glow"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-medium scan-line">
              Un rendez-vous mensuel pour se retrouver, partager et grandir ensemble 
              dans un esprit d'unité et d'amour.
            </p>
          </header>

          {/* Event Details */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center cyber-card p-6 rounded-2xl cyber-glow holographic">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4 animate-neon-pulse" />
                <h3 className="text-xl font-bold mb-2 gradient-text">Quand ?</h3>
                <p className="text-muted-foreground">31 Août 2025</p>
                <p className="text-muted-foreground">08h00</p>
              </div>
              
              <div className="text-center cyber-card p-6 rounded-2xl cyber-glow holographic" style={{ animationDelay: '0.1s' }}>
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4 animate-neon-pulse" />
                <h3 className="text-xl font-bold mb-2 gradient-text">Où ?</h3>
                <p className="text-muted-foreground">Cocody Blockhauss</p>
                <p className="text-muted-foreground">Au bord de l'eau</p>
              </div>
              
              <div className="text-center cyber-card p-6 rounded-2xl cyber-glow holographic" style={{ animationDelay: '0.2s' }}>
                <Users className="w-12 h-12 text-tertiary mx-auto mb-4 animate-neon-pulse" />
                <h3 className="text-xl font-bold mb-2 gradient-text">Qui ?</h3>
                <p className="text-muted-foreground">Tous les cœurs</p>
                <p className="text-muted-foreground">unis par l'amour</p>
              </div>
            </div>
          </section>

          {/* Countdown Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4 animate-neon-pulse">
                <Sparkles className="w-8 h-8 inline mr-3 animate-glitch" />
                Compte à rebours
              </h2>
              <p className="text-lg text-muted-foreground scan-line">
                Plus que quelques instants avant ce moment magique
              </p>
            </div>
            <CountdownTimer targetDate={eventDate} />
          </section>

          {/* Mission Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="cyber-card p-8 md:p-12 rounded-3xl text-center cyber-glow holographic">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6 animate-neon-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Notre Mission
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Trouver le bon espace, assurer une organisation pratique et veiller à la réussite totale 
                de chaque rencontre. Chaque dernier dimanche du mois, nous nous retrouvons pour partager, 
                grandir et célébrer ensemble notre unité dans l'amour divin.
              </p>
            </div>
          </section>

          {/* Ticket Booking Section */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4 animate-neon-pulse">
                <Sparkles className="w-8 h-8 inline mr-3 animate-glitch" />
                Réservez votre place
              </h2>
              <p className="text-lg text-muted-foreground scan-line">
                Sécurisez votre participation à cet événement unique
              </p>
            </div>
            <EventbriteBooking />
          </section>

          {/* Registration Section */}
          <section className="mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                Ou inscrivez-vous à notre liste
              </h2>
              <p className="text-muted-foreground">
                Recevez les dernières informations sur l'événement
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <RegistrationForm />
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="cyber-card p-6 rounded-2xl neon-glow">
              <p className="text-muted-foreground mb-2">
                Organisé avec ❤️ par
              </p>
              <p className="text-xl font-bold cyber-text">
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