import { CountdownTimer } from '@/components/CountdownTimer';
import { RegistrationForm } from '@/components/RegistrationForm';
import { IvorianBackground } from '@/components/IvorianBackground';
import { FestiveElements } from '@/components/FestiveElements';
import Chatbot from '@/components/Chatbot';
import EventbriteBooking from '@/components/EventbriteBooking';
import { Calendar, MapPin, Heart, Users, Sparkles, Music, PartyPopper, Palmtree } from 'lucide-react';

const Index = () => {
  // Event date: 31 août 2025 à 08h00
  const eventDate = new Date('2025-08-31T08:00:00');

  return (
    <main className="min-h-screen relative overflow-hidden african-pattern">
      {/* Arrière-plan ivoirien festif */}
      <IvorianBackground />
      
      {/* Éléments festifs flottants */}
      <FestiveElements className="fixed inset-0 pointer-events-none z-5" />

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section d'en-tête avec style ivoirien */}
          <header className="text-center mb-20 animate-fade-in-up">
            <div className="mb-8 relative">
              {/* Emoji ivoiriens décoratifs */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl animate-celebration-bounce">
                🇨🇮
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black gradient-text-festive mb-8 leading-none tracking-tight">
                AFTER CHURCH
                <span className="block text-transparent bg-gradient-secondary bg-clip-text animate-wave">BLOCKHAUSS</span>
              </h1>
              
              {/* Ligne décorative avec motifs africains */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-1 bg-gradient-primary rounded-full animate-shimmer"></div>
                <Music className="w-8 h-8 text-accent animate-dance" />
                <div className="w-20 h-1 bg-gradient-secondary rounded-full animate-shimmer"></div>
              </div>
            </div>
            
            <div className="hero-card p-8 rounded-3xl max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-foreground font-bold leading-relaxed mb-4">
                🎉 Un rendez-vous mensuel EXTRAORDINAIRE ! 🎊
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Pour se retrouver, partager et grandir ensemble dans un esprit d'unité et d'amour à l'ivoirienne ! 
                <span className="text-accent font-semibold"> Ambiance garantie ! </span>
                ✨🎵🙏
              </p>
            </div>
          </header>

          {/* Détails de l'événement avec style festif */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
                <PartyPopper className="w-10 h-10 animate-celebration-bounce" />
                Infos Pratiques
                <Palmtree className="w-10 h-10 animate-wave" />
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center hero-card p-8 rounded-3xl glow-effect group">
                <div className="mb-6 relative">
                  <Calendar className="w-16 h-16 text-accent mx-auto animate-festive-pulse" />
                  <div className="absolute -top-2 -right-2 text-2xl animate-celebration-bounce">📅</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Quand ?</h3>
                <p className="text-xl text-foreground font-semibold">31 Août 2025</p>
                <p className="text-lg text-accent">08h00 pile ⏰</p>
                <p className="text-sm text-muted-foreground mt-2">Soyez ponctuels !</p>
              </div>
              
              <div className="text-center hero-card p-8 rounded-3xl glow-effect group">
                <div className="mb-6 relative">
                  <MapPin className="w-16 h-16 text-secondary mx-auto animate-dance" />
                  <div className="absolute -top-2 -right-2 text-2xl animate-wave">🏝️</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Où ?</h3>
                <p className="text-xl text-foreground font-semibold">Cocody Blockhauss</p>
                <p className="text-lg text-secondary">Au bord de l'eau 🌊</p>
                <p className="text-sm text-muted-foreground mt-2">Cadre paradisiaque !</p>
              </div>
              
              <div className="text-center hero-card p-8 rounded-3xl glow-effect group">
                <div className="mb-6 relative">
                  <Users className="w-16 h-16 text-festive mx-auto animate-wave" />
                  <div className="absolute -top-2 -right-2 text-2xl animate-celebration-bounce">❤️</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Qui ?</h3>
                <p className="text-xl text-foreground font-semibold">Tous les cœurs ❤️</p>
                <p className="text-lg text-festive">unis par l'amour 🤝</p>
                <p className="text-sm text-muted-foreground mt-2">Famille spirituelle !</p>
              </div>
            </div>
          </section>

          {/* Section compte à rebours avec style ivoirien */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text-festive mb-6 flex items-center justify-center gap-4">
                <Sparkles className="w-12 h-12 animate-festive-pulse" />
                Compte à rebours
                <Music className="w-12 h-12 animate-dance" />
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Plus que quelques instants avant ce moment MAGIQUE ! ✨
              </p>
              <div className="text-6xl mb-6 animate-celebration-bounce">⏰</div>
            </div>
            <CountdownTimer targetDate={eventDate} />
          </section>

          {/* Section mission avec cœur ivoirien */}
          <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="hero-card p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
              {/* Motifs décoratifs de fond */}
              <div className="absolute top-4 left-4 text-4xl opacity-30 animate-wave">🎵</div>
              <div className="absolute top-4 right-4 text-4xl opacity-30 animate-dance">🙏</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-30 animate-celebration-bounce">🌟</div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-30 animate-wave">❤️</div>
              
              <div className="relative z-10">
                <Heart className="w-20 h-20 text-festive mx-auto mb-8 animate-festive-pulse" />
                <h2 className="text-4xl md:text-5xl font-bold gradient-text-festive mb-8">
                  Notre Mission Ivoirienne 🇨🇮
                </h2>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto mb-6">
                  Trouver le BON espace, assurer une organisation PARFAITE et veiller à la réussite TOTALE 
                  de chaque rencontre ! 🎯
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Chaque dernier dimanche du mois, nous nous retrouvons pour partager, 
                  grandir et célébrer ensemble notre unité dans l'amour divin avec la JOIE ivoirienne ! 
                  <span className="text-accent font-bold">Ambiance assurée ! 🎊🎉</span>
                </p>
              </div>
            </div>
          </section>

          {/* Section réservation de billets avec style festif */}
          <section className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animate-celebration-bounce">🎫</div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text-festive mb-6 flex items-center justify-center gap-4">
                <Sparkles className="w-10 h-10 animate-shimmer" />
                Réservez votre place VIP !
                <PartyPopper className="w-10 h-10 animate-celebration-bounce" />
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Sécurisez votre participation à cet événement UNIQUE en Côte d'Ivoire ! 🇨🇮
              </p>
              <p className="text-lg text-accent font-semibold">
                ⚡ Places limitées - Réservez maintenant ! ⚡
              </p>
            </div>
            <EventbriteBooking />
          </section>

          {/* Section d'inscription avec style chaleureux */}
          <section className="mt-20 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="hero-card p-8 rounded-3xl">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4 animate-wave">📧</div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                  Ou inscrivez-vous à notre liste VIP ! 💎
                </h2>
                <p className="text-lg text-muted-foreground">
                  Recevez les dernières informations et surprises de l'événement 🎁
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <RegistrationForm />
              </div>
            </div>
          </section>

          {/* Pied de page avec fierté ivoirienne */}
          <footer className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
            <div className="hero-card p-8 rounded-3xl relative overflow-hidden">
              {/* Drapeau ivoirien décoratif */}
              <div className="absolute top-4 right-4 text-3xl animate-wave">🇨🇮</div>
              <div className="absolute top-4 left-4 text-3xl animate-celebration-bounce">🙏</div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 animate-festive-pulse">❤️</div>
                <p className="text-xl text-muted-foreground mb-4">
                  Organisé avec AMOUR et PASSION par
                </p>
                <p className="text-3xl font-bold gradient-text-festive mb-2">
                  Le Môgô De GOD
                </p>
                <p className="text-lg text-accent font-semibold">
                  🌟 Ensemble pour la gloire de Dieu ! 🌟
                </p>
              </div>
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