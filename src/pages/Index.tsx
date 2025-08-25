import { CountdownTimer } from '@/components/CountdownTimer';
import { RegistrationForm } from '@/components/RegistrationForm';
import { BackgroundEffects } from '@/components/BackgroundEffects';
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
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <header className="text-center mb-16 animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 leading-tight">
                AFTER CHURCH
                <span className="block text-accent">BLOCKHAUSS</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-medium">
              Un rendez-vous mensuel pour se retrouver, partager et grandir ensemble 
              dans un esprit d'unité et d'amour.
            </p>
          </header>

          {/* Event Details */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center hero-card p-6 rounded-2xl glow-effect">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quand ?</h3>
                <p className="text-muted-foreground">31 Août 2025</p>
                <p className="text-muted-foreground">08h00</p>
              </div>
              
              <div className="text-center hero-card p-6 rounded-2xl glow-effect">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Où ?</h3>
                <p className="text-muted-foreground">Cocody Blockhauss</p>
                <p className="text-muted-foreground">Au bord de l'eau</p>
              </div>
              
              <div className="text-center hero-card p-6 rounded-2xl glow-effect">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Qui ?</h3>
                <p className="text-muted-foreground">Tous les cœurs</p>
                <p className="text-muted-foreground">unis par l'amour</p>
              </div>
            </div>
          </section>

          {/* Countdown Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                <Sparkles className="w-8 h-8 inline mr-3" />
                Compte à rebours
              </h2>
              <p className="text-lg text-muted-foreground">
                Plus que quelques instants avant ce moment magique
              </p>
            </div>
            <CountdownTimer targetDate={eventDate} />
          </section>

          {/* Mission Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="hero-card p-8 md:p-12 rounded-3xl text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6 animate-glow-pulse" />
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

          {/* Registration Section */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="max-w-md mx-auto">
              <RegistrationForm />
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="hero-card p-6 rounded-2xl">
              <p className="text-muted-foreground mb-2">
                Organisé avec ❤️ par
              </p>
              <p className="text-xl font-bold gradient-text">
                Le Môgô De GOD
              </p>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
};

export default Index;