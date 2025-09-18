import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Building, 
  MapPin, 
  Clock, 
  Euro, 
  Users, 
  Briefcase,
  Heart,
  Share,
  Send,
  CheckCircle,
  Star
} from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock job data (in real app, fetch based on id)
  const job = {
    id: parseInt(id || "1"),
    title: "Développeur Full-Stack Senior",
    company: "TechCorp",
    logo: "/placeholder.svg",
    location: "Paris",
    remoteType: "Hybride",
    contractType: "CDI",
    salaryMin: 55,
    salaryMax: 75,
    experienceLevel: "Senior (5+ ans)",
    postedDate: "Il y a 2 jours",
    applicants: 24,
    description: `Rejoignez notre équipe dynamique en tant que Développeur Full-Stack Senior ! Vous serez responsable du développement d'applications web modernes et évolutives.

Nous recherchons un(e) développeur(se) passionné(e) pour rejoindre notre équipe technique en pleine croissance. Vous travaillerez sur des projets innovants dans un environnement agile et collaboratif.`,
    
    missions: [
      "Développer et maintenir des applications web avec React et Node.js",
      "Collaborer avec l'équipe produit pour définir les spécifications techniques",
      "Optimiser les performances et l'expérience utilisateur",
      "Participer aux code reviews et mentorer les développeurs junior",
      "Contribuer à l'architecture technique et aux choix technologiques"
    ],
    
    requiredSkills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Git"],
    niceToHaveSkills: ["Next.js", "GraphQL", "AWS", "Kubernetes"],
    
    benefits: [
      "Télétravail partiel (2-3 jours/semaine)",
      "Formation continue et budget conférences",
      "Tickets restaurant",
      "Mutuelle entreprise",
      "13ème mois",
      "Participation aux bénéfices"
    ],
    
    companyInfo: {
      name: "TechCorp",
      size: "50-200 employés",
      sector: "Technologies de l'information",
      description: "TechCorp est une entreprise innovante spécialisée dans le développement de solutions logicielles pour les entreprises. Nous accompagnons nos clients dans leur transformation digitale.",
      culture: [
        "Environnement de travail flexible",
        "Équipe passionnée et bienveillante",
        "Innovation et expérimentation encouragées",
        "Équilibre vie professionnelle/personnelle"
      ]
    },
    
    matchPercentage: 92
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/offres">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">Retour aux offres</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-4 w-4" />
              </Button>
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Postuler
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      {job.matchPercentage && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Star className="h-3 w-3 mr-1" />
                          {job.matchPercentage}% match
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location} • {job.remoteType}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.postedDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.applicants} candidatures
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Euro className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{job.salaryMin}k - {job.salaryMax}k€</span>
                      </div>
                      <Badge variant="secondary">{job.contractType}</Badge>
                      <Badge variant="outline">{job.experienceLevel}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Details Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="requirements">Compétences</TabsTrigger>
                <TabsTrigger value="company">Entreprise</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Description du poste</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Missions principales</h4>
                      <ul className="space-y-2">
                        {job.missions.map((mission, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{mission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Avantages</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {job.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements">
                <Card>
                  <CardHeader>
                    <CardTitle>Compétences et prérequis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Compétences requises</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requiredSkills.map((skill) => (
                          <Badge key={skill} className="bg-primary/10 text-primary border-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-muted-foreground">Compétences appréciées</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.niceToHaveSkills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="company">
                <Card>
                  <CardHeader>
                    <CardTitle>À propos de {job.companyInfo.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{job.companyInfo.size}</span>
                      <span>•</span>
                      <span>{job.companyInfo.sector}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {job.companyInfo.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Culture d'entreprise</h4>
                      <div className="space-y-2">
                        {job.companyInfo.culture.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Postuler maintenant
                </Button>
                <Button variant="outline" className="w-full">
                  Générer un dossier personnalisé
                </Button>
                <Button variant="ghost" className="w-full">
                  Contacter le recruteur
                </Button>
              </CardContent>
            </Card>

            {/* Match Analysis */}
            {job.matchPercentage && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Analyse de compatibilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {job.matchPercentage}%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Excellent match avec votre profil
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Compétences techniques</span>
                      <span className="text-green-600">95%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Expérience requise</span>
                      <span className="text-green-600">90%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Localisation</span>
                      <span className="text-yellow-600">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Offres similaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Lead Developer React", company: "StartupInno", match: 85 },
                  { title: "Fullstack Engineer", company: "WebTech", match: 78 },
                ].map((similarJob, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="font-medium text-sm">{similarJob.title}</div>
                    <div className="text-xs text-muted-foreground">{similarJob.company}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {similarJob.match}% match
                    </Badge>
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full text-sm">
                  Voir plus d'offres similaires
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;