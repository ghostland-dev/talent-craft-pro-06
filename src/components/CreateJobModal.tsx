import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Briefcase } from "lucide-react";

const CONTRACT_TYPES = ["CDI", "CDD", "Freelance", "Stage", "Alternance"];
const EXPERIENCE_LEVELS = ["Junior (0-2 ans)", "Intermédiaire (2-5 ans)", "Senior (5+ ans)", "Expert (8+ ans)"];
const REMOTE_OPTIONS = ["Présentiel", "Hybride", "Full remote"];

const REQUIRED_SKILLS = [
  "React", "Vue.js", "Angular", "Node.js", "Python", "Java", "TypeScript", "JavaScript",
  "Docker", "Kubernetes", "AWS", "Azure", "MongoDB", "PostgreSQL", "Git", "CI/CD"
];

interface CreateJobModalProps {
  onCreateJob: (job: {
    title: string;
    company: string;
    contractType: string;
    location: string;
    remoteType: string;
    salaryMin: string;
    salaryMax: string;
    experienceLevel: string;
    description: string;
    requiredSkills: string[];
    niceToHaveSkills: string[];
    benefits: string[];
  }) => void;
}

const CreateJobModal = ({ onCreateJob }: CreateJobModalProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [contractType, setContractType] = useState("");
  const [location, setLocation] = useState("");
  const [remoteType, setRemoteType] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [description, setDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [niceToHaveSkills, setNiceToHaveSkills] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState("");
  const [customBenefit, setCustomBenefit] = useState("");

  const toggleRequiredSkill = (skill: string) => {
    setRequiredSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const addCustomSkill = (isRequired: boolean) => {
    if (customSkill.trim()) {
      if (isRequired) {
        setRequiredSkills(prev => [...prev, customSkill.trim()]);
      } else {
        setNiceToHaveSkills(prev => [...prev, customSkill.trim()]);
      }
      setCustomSkill("");
    }
  };

  const addBenefit = () => {
    if (customBenefit.trim()) {
      setBenefits(prev => [...prev, customBenefit.trim()]);
      setCustomBenefit("");
    }
  };

  const removeBenefit = (benefit: string) => {
    setBenefits(prev => prev.filter(b => b !== benefit));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !company || !contractType || !description) return;

    onCreateJob({
      title,
      company,
      contractType,
      location,
      remoteType,
      salaryMin,
      salaryMax,
      experienceLevel,
      description,
      requiredSkills,
      niceToHaveSkills,
      benefits
    });

    // Reset form
    setTitle("");
    setCompany("");
    setContractType("");
    setLocation("");
    setRemoteType("");
    setSalaryMin("");
    setSalaryMax("");
    setExperienceLevel("");
    setDescription("");
    setRequiredSkills([]);
    setNiceToHaveSkills([]);
    setBenefits([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle offre
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Créer une nouvelle offre d'emploi
          </DialogTitle>
          <DialogDescription>
            Créez une offre détaillée pour attirer les meilleurs candidats.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Intitulé du poste *</Label>
              <Input
                id="title"
                placeholder="ex: Développeur Full-Stack Senior"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Entreprise *</Label>
              <Input
                id="company"
                placeholder="ex: TechCorp"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contractType">Type de contrat *</Label>
              <Select value={contractType} onValueChange={setContractType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  {CONTRACT_TYPES.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Localisation</Label>
              <Input
                id="location"
                placeholder="ex: Paris"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="remoteType">Télétravail</Label>
              <Select value={remoteType} onValueChange={setRemoteType}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  {REMOTE_OPTIONS.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="salaryMin">Salaire min (k€)</Label>
              <Input
                id="salaryMin"
                type="number"
                placeholder="ex: 45"
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salaryMax">Salaire max (k€)</Label>
              <Input
                id="salaryMax"
                type="number"  
                placeholder="ex: 65"
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experienceLevel">Expérience</Label>
              <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent>
                  {EXPERIENCE_LEVELS.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description du poste *</Label>
            <Textarea
              id="description"
              placeholder="Décrivez le poste, les missions, l'environnement technique..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Label>Compétences requises</Label>
            <div className="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
              {REQUIRED_SKILLS.map(skill => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox
                    id={skill}
                    checked={requiredSkills.includes(skill)}
                    onCheckedChange={() => toggleRequiredSkill(skill)}
                  />
                  <Label htmlFor={skill} className="text-xs">{skill}</Label>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Compétence personnalisée..."
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
              />
              <Button type="button" size="sm" onClick={() => addCustomSkill(true)}>
                Ajouter
              </Button>
            </div>
            {requiredSkills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {requiredSkills.map(skill => (
                  <Badge key={skill} className="text-xs">
                    {skill}
                    <button
                      type="button"
                      onClick={() => setRequiredSkills(prev => prev.filter(s => s !== skill))}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Avantages (optionnel)</Label>
            <div className="flex gap-2">
              <Input
                placeholder="ex: Tickets restaurant, mutuelle..."
                value={customBenefit}
                onChange={(e) => setCustomBenefit(e.target.value)}
              />
              <Button type="button" size="sm" onClick={addBenefit}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {benefits.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {benefits.map(benefit => (
                  <Badge key={benefit} variant="secondary" className="text-xs">
                    {benefit}
                    <button
                      type="button"
                      onClick={() => removeBenefit(benefit)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">
              Créer l'offre
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobModal;