import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Building, 
  Clock, 
  Euro, 
  Briefcase,
  ArrowLeft,
  Heart,
  Share2
} from "lucide-react";
import SearchWithFilters from "@/components/SearchWithFilters";
import LoadingSpinner from "@/components/LoadingSpinner";
import AuthModal from "@/components/AuthModal";

interface SearchFilters {
  locations: string[];
  contractTypes: string[];
  experienceLevels: string[];
  salaryRange: string[];
  companies: string[];
}

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
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    locations: [],
    contractTypes: [],
    experienceLevels: [],
    salaryRange: [],
    companies: []
  });
  const [filteredJobs] = useState(MOCK_JOBS);

  const handleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const handleApplyToJob = () => {
    setIsAuthModalOpen(true);
  };

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
              <Button variant="ghost" onClick={() => setIsAuthModalOpen(true)}>
                Connexion
              </Button>
              <Button asChild>
                <Link to="/candidat">Mon profil</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <SearchWithFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFiltersChange={setFilters}
          resultCount={filteredJobs.length}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {/* Job Cards */}
        {!isLoading && (
          <div className="grid gap-6 mt-8">
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
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSaveJob(job.id)}
                        className="text-muted-foreground hover:text-red-500"
                      >
                        <Heart className={`h-4 w-4 ${savedJobs.includes(job.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
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
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/offre/${job.id}`}>
                          Voir l'offre
                        </Link>
                      </Button>
                      <Button size="sm" onClick={handleApplyToJob}>
                        Postuler
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        {!isLoading && filteredJobs.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={() => setIsLoading(true)}>
              Charger plus d'offres
            </Button>
          </div>
        )}

        {/* Auth Modal */}
        <AuthModal
          open={isAuthModalOpen}
          onOpenChange={setIsAuthModalOpen}
        />
      </div>
    </div>
  );
};

export default JobListings;