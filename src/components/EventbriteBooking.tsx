import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Ticket, CreditCard, Users, Check, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface TicketData {
  name: string;
  email: string;
  phone: string;
  ticketType: string;
  quantity: number;
}

const EventbriteBooking = () => {
  const [formData, setFormData] = useState<TicketData>({
    name: '',
    email: '',
    phone: '',
    ticketType: 'standard',
    quantity: 1
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ticketPrices = {
    standard: 0, // Gratuit
    vip: 5000,   // 5000 FCFA
    premium: 10000 // 10000 FCFA
  };

  const handleInputChange = (field: keyof TicketData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotal = () => {
    return ticketPrices[formData.ticketType as keyof typeof ticketPrices] * formData.quantity;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir votre nom et email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const ticketData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        ticket_type: formData.ticketType,
        quantity: formData.quantity,
        total_amount: calculateTotal(),
        payment_status: calculateTotal() === 0 ? 'completed' : 'pending',
      };

      const { error } = await supabase
        .from('event_tickets')
        .insert([ticketData]);

      if (error) {
        console.error('Erreur insertion ticket:', error);
        toast({
          title: "Erreur de réservation",
          description: "Une erreur s'est produite lors de la réservation. Veuillez réessayer.",
          variant: "destructive",
        });
        return;
      }

      setIsSuccess(true);
      toast({
        title: "Réservation confirmée !",
        description: `Votre ticket ${formData.ticketType} a été réservé avec succès.`,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        ticketType: 'standard',
        quantity: 1
      });

    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startNewBooking = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      ticketType: 'standard',
      quantity: 1
    });
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto hero-card glow-effect">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold gradient-text mb-2">
                Réservation Confirmée !
              </h3>
              <p className="text-muted-foreground">
                Votre ticket a été réservé avec succès. Vous recevrez bientôt un email de confirmation.
              </p>
            </div>
            <Button 
              onClick={startNewBooking} 
              variant="outline" 
              className="w-full"
            >
              Nouvelle réservation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto hero-card glow-effect">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl gradient-text">
          <Ticket className="w-6 h-6" />
          Réserver votre ticket
        </CardTitle>
        <CardDescription className="text-base">
          Sécurisez votre place pour After Church Blockhauss
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Votre nom complet"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+225 XX XX XX XX"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ticketType">Type de ticket</Label>
            <Select 
              value={formData.ticketType} 
              onValueChange={(value) => handleInputChange('ticketType', value)}
            >
              <SelectTrigger className="border-primary/20 focus:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">
                  Standard - Gratuit
                </SelectItem>
                <SelectItem value="vip">
                  VIP - 5,000 FCFA
                </SelectItem>
                <SelectItem value="premium">
                  Premium - 10,000 FCFA
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Nombre de tickets</Label>
            <Select 
              value={formData.quantity.toString()} 
              onValueChange={(value) => handleInputChange('quantity', parseInt(value))}
            >
              <SelectTrigger className="border-primary/20 focus:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map(num => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} ticket{num > 1 ? 's' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Prix total */}
          <div className="hero-card p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-accent" />
                <span className="font-medium">Total</span>
              </div>
              <span className="text-xl font-bold gradient-text">
                {calculateTotal().toLocaleString()} FCFA
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{formData.quantity} × {formData.ticketType}</span>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3"
            disabled={isLoading}  
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Réservation en cours...
              </>
            ) : calculateTotal() === 0 ? (
              'Réserver gratuitement'
            ) : (
              'Réserver et payer'
            )}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>
            En réservant, vous acceptez de recevoir des informations sur l'événement.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventbriteBooking;