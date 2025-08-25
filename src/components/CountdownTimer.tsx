import { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { value: days, label: 'Jours' },
          { value: hours, label: 'Heures' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Secondes' }
        ]);
      } else {
        setTimeLeft([]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.length === 0) {
    return (
      <div className="text-center animate-glow-pulse">
        <div className="text-4xl font-bold gradient-text mb-2">
          🎉 L'événement a commencé ! 🎉
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8">
      {timeLeft.map((unit, index) => (
        <div
          key={unit.label}
          className="text-center animate-fade-in-up glow-effect rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 p-4 md:p-6 min-w-[80px] md:min-w-[100px]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-muted-foreground font-medium">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};