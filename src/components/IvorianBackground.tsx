import ivorianCelebration from '@/assets/ivorian-celebration.jpg';
import africanPatterns from '@/assets/african-patterns.jpg';

export const IvorianBackground = () => {
  return (
    <>
      {/* Image de célébration principale */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${ivorianCelebration})` }}
      />
      
      {/* Motifs africains en superposition */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 african-pattern"
        style={{ backgroundImage: `url(${africanPatterns})` }}
      />
      
      {/* Dégradé de superposition ivoirien */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 via-transparent to-festive/15" />
      
      {/* Effets de lumière festifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-dance opacity-60" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-secondary/25 rounded-full blur-3xl animate-celebration-bounce opacity-50" />
      <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-accent/35 rounded-full blur-3xl animate-festive-pulse opacity-70" />
      
      {/* Points flottants festifs */}
      <div className="absolute inset-0 floating-dots opacity-40" />
    </>
  );
};