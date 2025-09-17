import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Filter, X } from "lucide-react";

const EXPERIENCE_LEVELS = [
  "Junior (0-2 ans)",
  "Intermédiaire (2-5 ans)", 
  "Senior (5+ ans)",
  "Expert (8+ ans)"
];

const LOCATIONS = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Remote"
];

const TECHNOLOGIES = [
  "React", "Vue.js", "Angular", "Node.js", "Python", "Java", "TypeScript", "JavaScript",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP", "MongoDB", "PostgreSQL", "MySQL"
];

interface FilterModalProps {
  onApplyFilters: (filters: {
    technologies: string[];
    experienceLevel: string;
    location: string;
    salaryRange: number[];
    availability: string;
  }) => void;
  currentFilters: {
    technologies: string[];
    experienceLevel: string;
    location: string;
    salaryRange: number[];
    availability: string;
  };
}

const FilterModal = ({ onApplyFilters, currentFilters }: FilterModalProps) => {
  const [open, setOpen] = useState(false);
  const [technologies, setTechnologies] = useState<string[]>(currentFilters.technologies);
  const [experienceLevel, setExperienceLevel] = useState(currentFilters.experienceLevel);
  const [location, setLocation] = useState(currentFilters.location);
  const [salaryRange, setSalaryRange] = useState(currentFilters.salaryRange);
  const [availability, setAvailability] = useState(currentFilters.availability);

  const toggleTechnology = (tech: string) => {
    setTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleApply = () => {
    onApplyFilters({
      technologies,
      experienceLevel,
      location,
      salaryRange,
      availability
    });
    setOpen(false);
  };

  const clearFilters = () => {
    setTechnologies([]);
    setExperienceLevel("");
    setLocation("");
    setSalaryRange([30, 120]);
    setAvailability("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtres
          {(technologies.length > 0 || experienceLevel || location || availability) && (
            <Badge variant="secondary" className="ml-2">
              {technologies.length + (experienceLevel ? 1 : 0) + (location ? 1 : 0) + (availability ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Filtres de recherche</DialogTitle>
          <DialogDescription>
            Affinez votre recherche de candidats avec des critères précis.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Technologies */}
          <div className="space-y-3">
            <Label>Technologies</Label>
            <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
              {TECHNOLOGIES.map(tech => (
                <div key={tech} className="flex items-center space-x-2">
                  <Checkbox
                    id={tech}
                    checked={technologies.includes(tech)}
                    onCheckedChange={() => toggleTechnology(tech)}
                  />
                  <Label htmlFor={tech} className="text-sm">{tech}</Label>
                </div>
              ))}
            </div>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                    <button
                      onClick={() => toggleTechnology(tech)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <Label htmlFor="experience">Niveau d'expérience</Label>
            <Select value={experienceLevel} onValueChange={setExperienceLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Tous niveaux</SelectItem>
                {EXPERIENCE_LEVELS.map(level => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Localisation</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une ville" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Toutes localisations</SelectItem>
                {LOCATIONS.map(loc => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Salary Range */}
          <div className="space-y-3">
            <Label>Fourchette salariale (k€/an)</Label>
            <div className="px-3">
              <Slider
                value={salaryRange}
                onValueChange={setSalaryRange}
                max={150}
                min={20}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>{salaryRange[0]}k€</span>
                <span>{salaryRange[1]}k€</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-2">
            <Label htmlFor="availability">Disponibilité</Label>
            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger>
                <SelectValue placeholder="Toute disponibilité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Toute disponibilité</SelectItem>
                <SelectItem value="immediate">Immédiatement</SelectItem>
                <SelectItem value="1month">Préavis 1 mois</SelectItem>
                <SelectItem value="2months">Préavis 2 mois</SelectItem>
                <SelectItem value="3months">Préavis 3+ mois</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={clearFilters}>
            Effacer tout
          </Button>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleApply}>
              Appliquer les filtres
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;