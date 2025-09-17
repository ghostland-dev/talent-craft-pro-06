import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import FilterModal from "@/components/FilterModal";
import CreateJobModal from "@/components/CreateJobModal";
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
  Plus,
  X
} from "lucide-react";

const RecruteurDashboard = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    technologies: ["React"],
    experienceLevel: "Senior (5+ ans)",
    location: "Paris",
    salaryRange: [45, 70],
    availability: ""
  });

  const [candidates] = useState([
    {
      id: "1",
      name: "Marie Dubois",
      title: "Développeur Senior",
      experience: "7 ans d'expérience en développement full-stack, spécialisée React/Node.js",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      location: "Paris",
      availability: "Disponible immédiatement", 
      rating: 4.8,
      matchPercentage: 92,
      lastUpdated: "Il y a 2 jours"
    },
    {
      id: "2", 
      name: "Thomas Martin",
      title: "Développeur Full-Stack",
      experience: "5 ans d'expérience, expert en architecture microservices et DevOps",
      technologies: ["React", "Python", "Docker", "Kubernetes"],
      location: "Lyon",
      availability: "Préavis 1 mois",
      rating: 4.6,
      matchPercentage: 87,
      lastUpdated: "Il y a 1 semaine"
    }
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Développeur Full-Stack Senior",
      company: "TechCorp",
      contractType: "CDI",
      location: "Paris",
      salaryRange: "55-70k€",
      status: "Active",
      publishedDate: "10 mars 2024",
      applications: 47,
      matches: 12,
      interviews: 3
    },
    {
      id: 2,
      title: "DevOps Engineer", 
      company: "StartupXYZ",
      contractType: "CDI",
      location: "Remote",
      salaryRange: "60-80k€",
      status: "Brouillon",
      publishedDate: "5 mars 2024",
      applications: 0,
      matches: 8,
      interviews: 0
    }
  ]);

  const handleApplyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
    toast({
      title: "Filtres appliqués",
      description: "La recherche a été mise à jour avec vos nouveaux critères."
    });
  };

  const handleCreateJob = (jobData: any) => {
    const newJob = {
      id: Date.now(),
      title: jobData.title,
      company: jobData.company,
      contractType: jobData.contractType,
      location: jobData.location || "Non spécifié",
      salaryRange: jobData.salaryMin && jobData.salaryMax ? `${jobData.salaryMin}-${jobData.salaryMax}k€` : "Non spécifié",
      status: "Brouillon",
      publishedDate: new Date().toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      applications: 0,
      matches: Math.floor(Math.random() * 20) + 5,
      interviews: 0
    };
    
    setJobs(prev => [...prev, newJob]);
    toast({
      title: "Offre créée !",
      description: `L'offre "${jobData.title}" a été créée en mode brouillon.`
    });
  };

  const removeFilter = (type: string, value?: string) => {
    if (type === 'technologies' && value) {
      setFilters(prev => ({
        ...prev,
        technologies: prev.technologies.filter(t => t !== value)
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [type]: type === 'technologies' ? [] : ""
      }));
    }
  };

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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Rechercher
                  </Button>
                  <FilterModal onApplyFilters={handleApplyFilters} currentFilters={filters} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {filters.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="cursor-pointer">
                      {tech}
                      <button
                        onClick={() => removeFilter('technologies', tech)} 
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {filters.experienceLevel && (
                    <Badge variant="secondary" className="cursor-pointer">
                      {filters.experienceLevel}
                      <button
                        onClick={() => removeFilter('experienceLevel')}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {filters.location && (
                    <Badge variant="secondary" className="cursor-pointer">
                      {filters.location}
                      <button
                        onClick={() => removeFilter('location')}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Résultats de recherche */}
            <div className="grid gap-4">
              {candidates.map(candidate => (
                <Card key={candidate.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <Badge>{candidate.title}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm">{candidate.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {candidate.experience}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {candidate.technologies.map(tech => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">{candidate.location} • {candidate.availability}</p>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button size="sm" asChild>
                          <Link to={`/candidat-profil/${candidate.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            Voir dossier
                          </Link>
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
                      <span>Match: {candidate.matchPercentage}% avec votre recherche</span>
                      <span>Dernière mise à jour: {candidate.lastUpdated}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Offres Tab */}
          <TabsContent value="offres" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Mes offres d'emploi</h2>
                <p className="text-muted-foreground">Gérez vos offres et suivez les candidatures</p>
              </div>
              <CreateJobModal onCreateJob={handleCreateJob} />
            </div>

            <div className="grid gap-4">
              {jobs.map(job => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.contractType} • {job.location} • {job.salaryRange}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {job.status === "Active" ? "Publiée" : "Créée"} le {job.publishedDate}
                        </p>
                      </div>
                      <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm mb-4">
                      <span>{job.applications} candidature{job.applications !== 1 ? 's' : ''}</span>
                      <span>{job.matches} profils correspondants</span>
                      {job.interviews > 0 && <span>{job.interviews} entretiens planifiés</span>}
                    </div>
                    <div className="flex gap-2">
                      {job.status === "Active" ? (
                        <>
                          <Button size="sm" variant="outline">Voir les candidats</Button>
                          <Button size="sm" variant="outline">Modifier l'offre</Button>
                          <Button size="sm" variant="outline">Analytics</Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm">Publier</Button>
                          <Button size="sm" variant="outline">Modifier</Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
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