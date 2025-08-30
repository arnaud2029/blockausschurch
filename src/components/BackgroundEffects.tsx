export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Ultra-dynamic floating neon orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-cyber-float opacity-80 shadow-neon" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/25 rounded-full blur-3xl animate-cyber-float opacity-70 shadow-cyber" 
           style={{ animationDelay: '8s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/35 rounded-full blur-3xl animate-cyber-float opacity-60" 
           style={{ animationDelay: '15s' }} />
      <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl animate-cyber-float opacity-50" 
           style={{ animationDelay: '22s' }} />
      
      {/* Cyberpunk animated particles */}
      <div className="absolute inset-0 floating-particles opacity-40" />
      
      {/* Dynamic gradient overlays with multiple layers */}
      <div className="absolute inset-0 bg-gradient-neon opacity-20" />
      <div className="absolute inset-0 bg-gradient-cyber opacity-15" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Holographic mesh overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-mesh-rotate" />
      
      {/* Scanning effect lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-60" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent to-transparent animate-scan opacity-40" 
           style={{ animationDelay: '1.5s' }} />
    </div>
  );
};