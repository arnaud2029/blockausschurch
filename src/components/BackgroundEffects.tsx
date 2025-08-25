export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-70" 
           style={{ animationDelay: '0s', animationDuration: '25s' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-60" 
           style={{ animationDelay: '5s', animationDuration: '30s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float opacity-50" 
           style={{ animationDelay: '10s', animationDuration: '35s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 floating-dots opacity-30" />
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-primary/5" />
    </div>
  );
};