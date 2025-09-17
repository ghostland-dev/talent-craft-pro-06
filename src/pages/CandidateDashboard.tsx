import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  FileText, 
  Download, 
  Plus, 
  Github, 
  Linkedin,
  Upload,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

const CandidateDashboard = () => {
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
              <Badge variant="secondary">Version candidat</Badge>
              <Button variant="ghost">Déconnexion</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profil de compétences
                </CardTitle>
                <CardDescription>
                  Complétude de votre profil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progression</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Informations personnelles</span>
                    <Badge variant="secondary">✓</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Expériences</span>
                    <Badge variant="secondary">✓</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Compétences techniques</span>
                    <Badge variant="outline">En cours</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Projets</span>
                    <Badge variant="outline">À compléter</Badge>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <Button className="w-full" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Importer LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Importer GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="skills">Compétences</TabsTrigger>
                <TabsTrigger value="projects">Projets</TabsTrigger>
                <TabsTrigger value="dossiers">Dossiers</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                    <CardDescription>
                      Renseignez vos informations de base
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Jean" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Dupont" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jean.dupont@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" placeholder="+33 6 12 34 56 78" />
                    </div>
                    <div>
                      <Label htmlFor="location">Localisation</Label>
                      <Input id="location" placeholder="Paris, France" />
                    </div>
                    <div>
                      <Label htmlFor="summary">Résumé professionnel</Label>
                      <Textarea 
                        id="summary" 
                        placeholder="Développeur full-stack avec 5 ans d'expérience..."
                        rows={4}
                      />
                    </div>
                    <Button>Sauvegarder</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Compétences techniques</CardTitle>
                    <CardDescription>
                      Ajoutez et évaluez vos compétences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Langages de programmation</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">JavaScript</span>
                            <span className="text-sm text-muted-foreground">Avancé</span>
                          </div>
                          <Progress value={85} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Python</span>
                            <span className="text-sm text-muted-foreground">Intermédiaire</span>
                          </div>
                          <Progress value={65} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Frameworks & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>Docker</Badge>
                        <Badge>AWS</Badge>
                        <Badge variant="outline">+ Ajouter</Badge>
                      </div>
                    </div>

                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter une compétence
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Projets & Réalisations</CardTitle>
                    <CardDescription>
                      Présentez vos projets les plus significatifs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">E-commerce Platform</h4>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Développement d'une plateforme e-commerce complète avec React, Node.js et MongoDB
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">React</Badge>
                        <Badge variant="secondary" className="text-xs">Node.js</Badge>
                        <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un projet
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Dossiers Tab */}
              <TabsContent value="dossiers" className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Mes dossiers de compétences</h2>
                    <p className="text-muted-foreground">Générez des dossiers personnalisés pour vos candidatures</p>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Générer un nouveau dossier
                  </Button>
                </div>

                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold">Dossier - Startup TechCorp</h3>
                          <p className="text-sm text-muted-foreground">Développeur Full-Stack Senior</p>
                          <p className="text-xs text-muted-foreground mt-1">Créé le 15 mars 2024</p>
                        </div>
                        <Badge>PDF</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Aperçu
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold">Dossier générique</h3>
                          <p className="text-sm text-muted-foreground">Profil complet standard</p>
                          <p className="text-xs text-muted-foreground mt-1">Mis à jour le 10 mars 2024</p>
                        </div>
                        <Badge variant="secondary">Web</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Voir en ligne
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Exporter PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;