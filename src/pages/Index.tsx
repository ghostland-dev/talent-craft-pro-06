import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Users, Clock, FileText, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <FileText className="h-4 w-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">CompétencesPro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Connexion</Button>
              <Button>Commencer</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            Révolutionnez vos recrutements IT
          </Badge>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Fini les dossiers de compétences chronophages
          </h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-3xl mx-auto">
            Générez automatiquement des dossiers de compétences personnalisés pour chaque entreprise. 
            Gagnez du temps, candidats et recruteurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link to="/candidat">
                <UserCheck className="mr-2 h-4 w-4" />
                Je suis candidat
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link to="/recruteur">
                <Users className="mr-2 h-4 w-4" />
                Je suis recruteur
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Le problème actuel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Candidats et recruteurs perdent un temps précieux avec des dossiers répétitifs et non standardisés
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-destructive">Pour les candidats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <p className="text-sm">Ressaisie répétitive pour chaque entreprise</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <p className="text-sm">Personnalisation manuelle chronophage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <p className="text-sm">Formats hétérogènes difficiles à maintenir</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-destructive">Pour les recruteurs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <p className="text-sm">Dossiers non standardisés</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <p className="text-sm">Analyse longue et fastidieuse</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <p className="text-sm">Difficulté de comparaison des profils</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre solution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une plateforme intelligente qui automatise la création et la personnalisation des dossiers de compétences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Génération automatique</CardTitle>
                <CardDescription>
                  Créez votre profil une fois, générez des dossiers personnalisés en 2 minutes
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Formats multiples</CardTitle>
                <CardDescription>
                  Export PDF, DOCX ou lien web interactif selon les besoins
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>IA intégrée</CardTitle>
                <CardDescription>
                  Matching intelligent candidat-offre et suggestions personnalisées
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités clés</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Pour les candidats</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Importation automatique depuis LinkedIn, GitHub</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Templates configurables par secteur/entreprise</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Personnalisation IA selon l'offre d'emploi</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Gestion centralisée de tous vos projets</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Pour les recruteurs</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Base standardisée de dossiers comparables</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Filtres de recherche avancés</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Comparateur de profils en parallèle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Système de notation rapide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à révolutionner vos recrutements ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez les professionnels IT qui ont déjà simplifié leur processus de recrutement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link to="/candidat">
                Essai gratuit - Candidat
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link to="/recruteur">
                Démo recruteur
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <FileText className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-semibold">CompétencesPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CompétencesPro. Simplifiez vos recrutements IT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
