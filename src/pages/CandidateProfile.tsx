import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  FileText, 
  Star,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  MessageSquare,
  Download,
  Heart,
  Award,
  Briefcase
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const CANDIDATE_DATA = {
  "1": {
    id: "1",
    firstName: "Marie",
    lastName: "Dubois",
    title: "Développeur Senior Full-Stack",
    email: "marie.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    availability: "Disponible immédiatement",
    summary: "Développeuse full-stack passionnée avec 7 ans d'expérience dans la création d'applications web modernes. Spécialisée dans l'écosystème React/Node.js avec une expertise approfondie en architecture microservices et DevOps. J'aime résoudre des problèmes complexes et encadrer des équipes techniques.",
    experience: [
      {
        title: "Lead Developer",
        company: "TechStart",
        period: "2022 - Présent",
        description: "Direction technique d'une équipe de 5 développeurs, architecture de solutions scalables, migration vers le cloud AWS."
      },
      {
        title: "Senior Full-Stack Developer", 
        company: "WebCorp",
        period: "2020 - 2022",
        description: "Développement d'applications e-commerce haute performance, optimisation des performances, mentorat d'équipe."
      },
      {
        title: "Full-Stack Developer",
        company: "StartupXYZ",
        period: "2018 - 2020", 
        description: "Développement MVP, intégration APIs externes, mise en place CI/CD."
      }
    ],
    skills: [
      { name: "React", level: "Expert", progress: 95, category: "Frontend" },
      { name: "Node.js", level: "Expert", progress: 90, category: "Backend" },
      { name: "TypeScript", level: "Avancé", progress: 85, category: "Langages" },
      { name: "AWS", level: "Avancé", progress: 80, category: "Cloud" },
      { name: "Docker", level: "Avancé", progress: 85, category: "DevOps" },
      { name: "PostgreSQL", level: "Avancé", progress: 75, category: "Base de données" }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Plateforme e-commerce complète avec paiements Stripe, gestion d'inventaire en temps réel et tableau de bord administrateur.",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
        url: "https://example-ecommerce.com",
        highlights: ["50k+ utilisateurs actifs", "99.9% uptime", "Temps de réponse < 200ms"]
      },
      {
        title: "API Management System",
        description: "Système de gestion d'APIs avec authentification JWT, rate limiting et monitoring en temps réel.",
        technologies: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes"],
        githubUrl: "https://github.com/marie/api-management",
        highlights: ["Architecture microservices", "Auto-scaling", "Monitoring Prometheus"]
      }
    ],
    rating: 4.8,
    matchPercentage: 92,
    lastUpdated: "Il y a 2 jours",
    profileViews: 47,
    applicationsSent: 12
  }
};

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = id ? CANDIDATE_DATA[id as keyof typeof CANDIDATE_DATA] : null;

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Profil non trouvé</h2>
            <p className="text-muted-foreground mb-4">Ce profil candidat n'existe pas ou a été supprimé.</p>
            <Button asChild>
              <Link to="/recruteur">Retour à la recherche</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const skillsByCategory = candidate.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof candidate.skills>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/recruteur">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à la recherche
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold">CompétencesPro</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Version recruteur</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl font-bold">{candidate.firstName} {candidate.lastName}</h1>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-medium">{candidate.rating}</span>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-3">{candidate.title}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {candidate.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {candidate.availability}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {candidate.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {candidate.phone}
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">Compatibilité avec votre recherche</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={candidate.matchPercentage} className="flex-1" />
                        <span className="font-semibold text-primary">{candidate.matchPercentage}%</span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed">{candidate.summary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Expérience professionnelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {candidate.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                    {index < candidate.experience.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Compétences techniques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-medium mb-3 text-primary">{category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skills.map(skill => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}</span>
                          </div>
                          <Progress value={skill.progress} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Projets & Réalisations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {candidate.projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <Globe className="h-4 w-4 mr-2" />
                              Démo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    
                    {project.highlights && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium mb-2">Points clés :</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {index < candidate.projects.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contacter le candidat
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le dossier
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="h-4 w-4 mr-2" />
                  Ajouter aux favoris
                </Button>
                <Button variant="outline" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Noter le profil
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Vues du profil</span>
                  <span className="font-medium">{candidate.profileViews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Candidatures envoyées</span>
                  <span className="font-medium">{candidate.applicationsSent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Dernière mise à jour</span>
                  <span className="font-medium">{candidate.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Profiles */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profils similaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center py-4">
                  <p className="text-sm text-muted-foreground">
                    Découvrez d'autres profils correspondant à vos critères de recherche.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <Link to="/recruteur">
                      Voir plus de profils
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;