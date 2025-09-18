import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LogIn, UserPlus, Mail, Lock, Github, Chrome } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthAction = async (type: 'login' | 'register' | 'oauth') => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      // This is where real authentication would happen
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center">Rejoignez CompétencesPro</DialogTitle>
          <DialogDescription className="text-center">
            Connectez-vous pour accéder à toutes les fonctionnalités
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="register">Inscription</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <LogIn className="h-5 w-5" />
                  Connexion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="votre@email.com" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => handleAuthAction('login')}
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>

                <div className="text-center">
                  <Button variant="link" size="sm">
                    Mot de passe oublié ?
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Inscription
                </CardTitle>
                <CardDescription>
                  Créez votre compte en quelques secondes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Dupont" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registerEmail">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="registerEmail" type="email" placeholder="votre@email.com" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="registerPassword">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="registerPassword" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => handleAuthAction('register')}
                  disabled={isLoading}
                >
                  {isLoading ? "Création du compte..." : "Créer mon compte"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            onClick={() => handleAuthAction('oauth')}
            disabled={isLoading}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleAuthAction('oauth')}
            disabled={isLoading}
          >
            <Chrome className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          En vous connectant, vous acceptez nos{" "}
          <Button variant="link" size="sm" className="p-0 h-auto text-xs">
            conditions d'utilisation
          </Button>{" "}
          et notre{" "}
          <Button variant="link" size="sm" className="p-0 h-auto text-xs">
            politique de confidentialité
          </Button>
          .
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;