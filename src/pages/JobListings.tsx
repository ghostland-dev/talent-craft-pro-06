import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Building, 
  Clock, 
  Euro, 
  Search, 
  Filter,
  Briefcase,
  ArrowLeft
} from "lucide-react";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Développeur Full-Stack Senior",
    company: "TechCorp",
    location: "Paris",
    remoteType: "Hybride",
    contractType: "CDI",
    salaryMin: 55,
    salaryMax: 75,
    experienceLevel: "Senior (5+ ans)",
    postedDate: "2 jours",
    description: "Rejoignez notre équipe pour développer des applications web modernes avec React et Node.js.",
    requiredSkills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    matchPercentage: 92
  },
  {
    id: 2,
    title: "Lead Developer React",
    company: "StartupInno",
    location: "Lyon",
    remoteType: "Full remote",
    contractType: "CDI",
    salaryMin: 60,
    salaryMax: 80,
    experienceLevel: "Senior (5+ ans)",
    postedDate: "1 semaine",
    description: "Menez une équipe de développeurs front-end dans un environnement dynamique.",
    requiredSkills: ["React", "JavaScript", "Leadership", "Scrum"],
    matchPercentage: 85
  },
  {
    id: 3,
    title: "Développeur Python Backend",
    company: "DataTech Solutions",
    location: "Toulouse",
    remoteType: "Hybride",
    contractType: "CDI",
    salaryMin: 45,
    salaryMax: 65,
    experienceLevel: "Intermédiaire (2-5 ans)",
    postedDate: "3 jours",
    description: "Développement d'APIs robustes et scalables pour nos solutions data.",
    requiredSkills: ["Python", "Django", "Docker", "AWS"],
    matchPercentage: 78
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudFirst",
    location: "Bordeaux",
    remoteType: "Full remote",
    contractType: "CDI",
    salaryMin: 50,
    salaryMax: 70,
    experienceLevel: "Intermédiaire (2-5 ans)",
    postedDate: "5 jours",
    description: "Automatisation et optimisation de nos infrastructures cloud.",
    requiredSkills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    matchPercentage: 71
  }
];

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs] = useState(MOCK_JOBS);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Offres d'emploi</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Connexion</Button>
              <Button asChild>
                <Link to="/candidat">Mon profil</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un poste, une entreprise, une technologie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredJobs.length} offres trouvées
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Trier par :</span>
              <Button variant="ghost" size="sm">
                Pertinence
              </Button>
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl hover:text-primary cursor-pointer">
                        <Link to={`/offre/${job.id}`}>
                          {job.title}
                        </Link>
                      </CardTitle>
                      {job.matchPercentage && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                          {job.matchPercentage}% match
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-4 text-base">
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
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requiredSkills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {job.requiredSkills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{job.requiredSkills.length - 4} autres
                    </Badge>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Euro className="h-4 w-4 text-muted-foreground" />
                      <span>{job.salaryMin}k - {job.salaryMax}k€</span>
                    </div>
                    <Badge variant="secondary">{job.contractType}</Badge>
                    <span className="text-muted-foreground">{job.experienceLevel}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Sauvegarder
                    </Button>
                    <Button size="sm" asChild>
                      <Link to={`/offre/${job.id}`}>
                        Voir l'offre
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Charger plus d'offres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobListings;