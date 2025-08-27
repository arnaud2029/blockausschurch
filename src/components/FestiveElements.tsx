import { Music, Sparkles, Heart, PartyPopper } from 'lucide-react';
import africanMusicIcon from '@/assets/african-music-icon.jpg';

interface FestiveElementsProps {
  className?: string;
}

export const FestiveElements = ({ className = "" }: FestiveElementsProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Éléments musicaux flottants */}
      <div className="absolute top-10 left-10 animate-wave">
        <Music className="w-8 h-8 text-accent/70" />
      </div>
      
      <div className="absolute top-1/4 right-20 animate-dance">
        <PartyPopper className="w-10 h-10 text-primary/60" />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 animate-celebration-bounce">
        <Sparkles className="w-6 h-6 text-festive/80" />
      </div>
      
      <div className="absolute top-1/2 right-1/4 animate-festive-pulse">
        <Heart className="w-7 h-7 text-secondary/70" />
      </div>
      
      {/* Icône d'instrument africain */}
      <div className="absolute bottom-20 right-10 animate-wave">
        <div 
          className="w-16 h-16 rounded-full bg-cover bg-center opacity-60 glow-effect"
          style={{ backgroundImage: `url(${africanMusicIcon})` }}
        />
      </div>
      
      {/* Étoiles scintillantes */}
      <div className="absolute top-1/3 left-1/3 animate-shimmer">
        <div className="w-2 h-2 bg-accent rounded-full shadow-accent-glow"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 animate-shimmer" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-primary rounded-full shadow-glow"></div>
      </div>
      
      <div className="absolute top-3/4 left-1/2 animate-shimmer" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-festive rounded-full shadow-festive-glow"></div>
      </div>
    </div>
  );
};