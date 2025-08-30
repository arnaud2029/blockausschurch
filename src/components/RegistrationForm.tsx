import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle, User, Mail, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('event_registrations')
        .insert([formData]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email déjà utilisé",
            description: "Cette adresse email est déjà enregistrée pour l'événement.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast({
          title: "Inscription réussie ! 🎉",
          description: "Votre inscription à After Church Blockhauss a été confirmée.",
        });
        
        // Reset form after success
        setFormData({ name: '', email: '', phone: '' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="hero-card animate-fade-in-up">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4 animate-glow-pulse" />
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Inscription confirmée !
            </h3>
            <p className="text-muted-foreground">
              Merci de vous joindre à nous pour After Church Blockhauss. 
              Vous recevrez bientôt plus d'informations par email.
            </p>
          </div>
          <Button 
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="glow-effect"
          >
            Nouvelle inscription
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hero-card animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-center text-2xl gradient-text">
          Rejoignez-nous
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              <User className="w-4 h-4 inline mr-2" />
              Nom complet
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="glow-effect focus:shadow-glow transition-all duration-300"
              placeholder="Votre nom complet"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="glow-effect focus:shadow-glow transition-all duration-300"
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              <Phone className="w-4 h-4 inline mr-2" />
              Téléphone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="glow-effect focus:shadow-glow transition-all duration-300"
              placeholder="+225 XX XX XX XX XX"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full glow-effect bg-gradient-primary hover:shadow-glow text-lg py-6 font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Inscription en cours...
              </>
            ) : (
              <>
                🎯 Je m'inscris maintenant
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};