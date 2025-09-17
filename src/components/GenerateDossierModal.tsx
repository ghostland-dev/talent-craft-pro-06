import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, Sparkles, FileText, Globe } from "lucide-react";

const EXPORT_FORMATS = [
  { value: "pdf", label: "PDF", icon: FileText },
  { value: "web", label: "Lien web interactif", icon: Globe },
  { value: "docx", label: "DOCX", icon: FileText }
];

interface GenerateDossierModalProps {
  onGenerateDossier: (dossier: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    format: string;
    includeProjects: boolean;
    includeSkills: boolean;
    includeExperience: boolean;
    customization: string;
  }) => void;
}

const GenerateDossierModal = ({ onGenerateDossier }: GenerateDossierModalProps) => {
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [format, setFormat] = useState("pdf");
  const [includeProjects, setIncludeProjects] = useState(true);
  const [includeSkills, setIncludeSkills] = useState(true);
  const [includeExperience, setIncludeExperience] = useState(true);
  const [customization, setCustomization] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !jobTitle) return;

    onGenerateDossier({
      companyName,
      jobTitle,
      jobDescription,
      format,
      includeProjects,
      includeSkills,
      includeExperience,
      customization
    });

    // Reset form
    setCompanyName("");
    setJobTitle("");
    setJobDescription("");
    setFormat("pdf");
    setIncludeProjects(true);
    setIncludeSkills(true);
    setIncludeExperience(true);
    setCustomization("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Générer un nouveau dossier
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Générer un dossier personnalisé
          </DialogTitle>
          <DialogDescription>
            L'IA va analyser l'offre d'emploi et personnaliser votre dossier de compétences automatiquement.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Nom de l'entreprise</Label>
            <Input
              id="companyName"
              placeholder="ex: TechCorp, Startup Innovation..."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Intitulé du poste</Label>
            <Input
              id="jobTitle"
              placeholder="ex: Développeur Full-Stack Senior..."
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobDescription">Description du poste (optionnel)</Label>
            <Textarea
              id="jobDescription"
              placeholder="Collez ici la description complète du poste pour une personnalisation optimale..."
              rows={4}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Plus la description est détaillée, plus l'IA pourra personnaliser votre dossier.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Format d'export</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EXPORT_FORMATS.map(({ value, label, icon: Icon }) => (
                  <SelectItem key={value} value={value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Sections à inclure</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="skills" 
                  checked={includeSkills}
                  onCheckedChange={(checked) => setIncludeSkills(checked as boolean)}
                />
                <Label htmlFor="skills" className="text-sm">Compétences techniques</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="experience" 
                  checked={includeExperience}
                  onCheckedChange={(checked) => setIncludeExperience(checked as boolean)}
                />
                <Label htmlFor="experience" className="text-sm">Expériences professionnelles</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="projects" 
                  checked={includeProjects}
                  onCheckedChange={(checked) => setIncludeProjects(checked as boolean)}
                />
                <Label htmlFor="projects" className="text-sm">Projets & réalisations</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customization">Instructions spéciales (optionnel)</Label>
            <Textarea
              id="customization"
              placeholder="ex: Mettre l'accent sur les compétences React, inclure les projets e-commerce..."
              rows={3}
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
            />
          </div>

          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-primary mt-0.5" />
              <div className="text-xs text-muted-foreground">
                <p className="font-medium mb-1">Personnalisation IA incluse :</p>
                <ul className="space-y-1">
                  <li>• Adaptation du vocabulaire à l'entreprise</li>
                  <li>• Mise en avant des compétences pertinentes</li>
                  <li>• Réorganisation des sections par priorité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">
              <Sparkles className="h-4 w-4 mr-2" />
              Générer le dossier
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateDossierModal;