import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

const SKILL_CATEGORIES = [
  "Langages de programmation",
  "Frameworks & Librairies", 
  "Base de données",
  "Cloud & DevOps",
  "Outils & Technologies",
  "Soft Skills"
];

const SKILL_LEVELS = [
  { value: "beginner", label: "Débutant", progress: 25 },
  { value: "intermediate", label: "Intermédiaire", progress: 50 },
  { value: "advanced", label: "Avancé", progress: 75 },
  { value: "expert", label: "Expert", progress: 90 }
];

interface AddSkillModalProps {
  onAddSkill: (skill: {
    name: string;
    category: string; 
    level: string;
    levelLabel: string;
    progress: number;
  }) => void;
}

const AddSkillModal = ({ onAddSkill }: AddSkillModalProps) => {
  const [open, setOpen] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName || !category || !level) return;

    const levelData = SKILL_LEVELS.find(l => l.value === level);
    if (!levelData) return;

    onAddSkill({
      name: skillName,
      category,
      level,
      levelLabel: levelData.label,
      progress: levelData.progress
    });

    // Reset form
    setSkillName("");
    setCategory("");
    setLevel("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une compétence
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter une compétence</DialogTitle>
          <DialogDescription>
            Ajoutez une nouvelle compétence à votre profil avec son niveau de maîtrise.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="skillName">Nom de la compétence</Label>
            <Input
              id="skillName"
              placeholder="ex: React, Python, Docker..."
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Catégorie</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {SKILL_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="level">Niveau de maîtrise</Label>
            <Select value={level} onValueChange={setLevel} required>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner votre niveau" />
              </SelectTrigger>
              <SelectContent>
                {SKILL_LEVELS.map((lvl) => (
                  <SelectItem key={lvl.value} value={lvl.value}>
                    {lvl.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">
              Ajouter
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillModal;