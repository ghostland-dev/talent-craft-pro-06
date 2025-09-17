import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Users, 
  FileText, 
  Star,
  Download,
  Eye,
  MessageSquare,
  BarChart3,
  Plus
} from "lucide-react";

const RecruteurDashboard = () => {
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
              <Badge variant="secondary">Version recruteur</Badge>
              <Button variant="ghost">Déconnexion</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Candidats actifs</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Dossiers consultés</p>
                  <p className="text-2xl font-bold">342</p>
                </div>
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Candidats notés</p>
                  <p className="text-2xl font-bold">89</p>
                </div>
                <Star className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Offres publiées</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recherche" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recherche">Recherche candidats</TabsTrigger>
            <TabsTrigger value="offres">Mes offres</TabsTrigger>
            <TabsTrigger value="favoris">Candidats favoris</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Recherche Tab */}
          <TabsContent value="recherche" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recherche de candidats</CardTitle>
                <CardDescription>
                  Trouvez les profils qui correspondent à vos besoins
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input 
                      placeholder="Rechercher par compétences, technologies..." 
                      className="w-full"
                    />
                  </div>
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Rechercher
                  </Button>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Senior (5+ ans)</Badge>
                  <Badge variant="secondary">Paris</Badge>
                  <Badge variant="outline">+ Ajouter un filtre</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Résultats de recherche */}
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">Marie Dubois</h3>
                        <Badge>Développeur Senior</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm">4.8</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        7 ans d'expérience en développement full-stack, spécialisée React/Node.js
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">React</Badge>
                        <Badge variant="outline" className="text-xs">Node.js</Badge>
                        <Badge variant="outline" className="text-xs">TypeScript</Badge>
                        <Badge variant="outline" className="text-xs">AWS</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Paris • Disponible immédiatement</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Voir dossier
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                      <Button size="sm" variant="outline">
                        <Star className="h-4 w-4 mr-2" />
                        Favoris
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-muted-foreground border-t pt-3">
                    <span>Match: 92% avec votre recherche</span>
                    <span>Dernière mise à jour: Il y a 2 jours</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">Thomas Martin</h3>
                        <Badge>Développeur Full-Stack</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm">4.6</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        5 ans d'expérience, expert en architecture microservices et DevOps
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">React</Badge>
                        <Badge variant="outline" className="text-xs">Python</Badge>
                        <Badge variant="outline" className="text-xs">Docker</Badge>
                        <Badge variant="outline" className="text-xs">Kubernetes</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Lyon • Préavis 1 mois</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Voir dossier
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                      <Button size="sm" variant="outline">
                        <Star className="h-4 w-4 mr-2" />
                        Favoris
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-muted-foreground border-t pt-3">
                    <span>Match: 87% avec votre recherche</span>
                    <span>Dernière mise à jour: Il y a 1 semaine</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Offres Tab */}
          <TabsContent value="offres" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Mes offres d'emploi</h2>
                <p className="text-muted-foreground">Gérez vos offres et suivez les candidatures</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle offre
              </Button>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">Développeur Full-Stack Senior</h3>
                      <p className="text-sm text-muted-foreground">CDI • Paris • 55-70k€</p>
                      <p className="text-xs text-muted-foreground mt-1">Publiée le 10 mars 2024</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex gap-4 text-sm mb-4">
                    <span>47 candidatures</span>
                    <span>12 profils correspondants</span>
                    <span>3 entretiens planifiés</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Voir les candidats</Button>
                    <Button size="sm" variant="outline">Modifier l'offre</Button>
                    <Button size="sm" variant="outline">Analytics</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">DevOps Engineer</h3>
                      <p className="text-sm text-muted-foreground">CDI • Remote • 60-80k€</p>
                      <p className="text-xs text-muted-foreground mt-1">Publiée le 5 mars 2024</p>
                    </div>
                    <Badge variant="secondary">Brouillon</Badge>
                  </div>
                  <div className="flex gap-4 text-sm mb-4">
                    <span>0 candidature</span>
                    <span>8 profils correspondants</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Publier</Button>
                    <Button size="sm" variant="outline">Modifier</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Favoris Tab */}
          <TabsContent value="favoris" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Candidats favoris</h2>
              <p className="text-muted-foreground">Profils que vous avez sauvegardés</p>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">Sophie Laurent</h3>
                        <Badge>Tech Lead</Badge>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Expert en architecture React et management d'équipe
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">React</Badge>
                        <Badge variant="outline" className="text-xs">Leadership</Badge>
                        <Badge variant="outline" className="text-xs">Architecture</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Dossier
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Analytics de recrutement</h2>
              <p className="text-muted-foreground">Suivez vos performances de recrutement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Taux de conversion</CardTitle>
                  <CardDescription>Candidatures → Entretiens → Embauches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Candidatures vues</span>
                      <span className="font-medium">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Entretiens programmés</span>
                      <span className="font-medium">23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Embauches réalisées</span>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compétences les plus demandées</CardTitle>
                  <CardDescription>Dans vos recherches récentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React</span>
                      <Badge variant="secondary">67%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Node.js</span>
                      <Badge variant="secondary">54%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">TypeScript</span>
                      <Badge variant="secondary">43%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AWS</span>
                      <Badge variant="secondary">38%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecruteurDashboard;