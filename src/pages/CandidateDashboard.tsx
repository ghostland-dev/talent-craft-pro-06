import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import AddSkillModal from "@/components/AddSkillModal";
import AddProjectModal from "@/components/AddProjectModal";
import GenerateDossierModal from "@/components/GenerateDossierModal";
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
  Trash2,
  X
} from "lucide-react";

const CandidateDashboard = () => {
  const { toast } = useToast();
  
  // Profile state
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    summary: ""
  });

  // Skills state
  const [skills, setSkills] = useState([
    { name: "JavaScript", category: "Langages de programmation", level: "advanced", levelLabel: "Avancé", progress: 85 },
    { name: "Python", category: "Langages de programmation", level: "intermediate", levelLabel: "Intermédiaire", progress: 65 }
  ]);

  // Technologies state
  const [technologies, setTechnologies] = useState(["React", "Node.js", "Docker", "AWS"]);

  // Projects state
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Développement d'une plateforme e-commerce complète avec React, Node.js et MongoDB",
      technologies: ["React", "Node.js", "MongoDB"],
      url: "",
      githubUrl: ""
    }
  ]);

  // Dossiers state
  const [dossiers, setDossiers] = useState([
    {
      id: 1,
      companyName: "Startup TechCorp",
      jobTitle: "Développeur Full-Stack Senior",
      format: "PDF",
      createdAt: "15 mars 2024"
    },
    {
      id: 2,
      companyName: "Profil générique",
      jobTitle: "Profil complet standard",
      format: "Web",
      createdAt: "10 mars 2024"
    }
  ]);

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleAddSkill = (skill: any) => {
    setSkills(prev => [...prev, skill]);
    toast({
      title: "Compétence ajoutée",
      description: `${skill.name} a été ajouté à votre profil.`
    });
  };

  const handleRemoveSkill = (skillName: string) => {
    setSkills(prev => prev.filter(s => s.name !== skillName));
    toast({
      title: "Compétence supprimée",
      description: `${skillName} a été retiré de votre profil.`
    });
  };

  const handleAddTechnology = (tech: string) => {
    if (tech.trim() && !technologies.includes(tech.trim())) {
      setTechnologies(prev => [...prev, tech.trim()]);
    }
  };

  const handleRemoveTechnology = (tech: string) => {
    setTechnologies(prev => prev.filter(t => t !== tech));
  };

  const handleAddProject = (project: any) => {
    const newProject = { ...project, id: Date.now() };
    setProjects(prev => [...prev, newProject]);
    toast({
      title: "Projet ajouté",
      description: `${project.title} a été ajouté à votre profil.`
    });
  };

  const handleRemoveProject = (projectId: number) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
    toast({
      title: "Projet supprimé",
      description: "Le projet a été retiré de votre profil."
    });
  };

  const handleGenerateDossier = (dossierData: any) => {
    const newDossier = {
      id: Date.now(),
      companyName: dossierData.companyName,
      jobTitle: dossierData.jobTitle,
      format: dossierData.format.toUpperCase(),
      createdAt: new Date().toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      })
    };
    setDossiers(prev => [...prev, newDossier]);
    toast({
      title: "Dossier généré !",
      description: `Votre dossier pour ${dossierData.companyName} est prêt.`
    });
  };

  const calculateProfileCompletion = () => {
    let completion = 0;
    if (profile.firstName && profile.lastName && profile.email) completion += 25;
    if (profile.summary) completion += 25;
    if (skills.length > 0) completion += 25;
    if (projects.length > 0) completion += 25;
    return completion;
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
                    <span>{calculateProfileCompletion()}%</span>
                  </div>
                  <Progress value={calculateProfileCompletion()} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Informations personnelles</span>
                    <Badge variant={profile.firstName && profile.lastName && profile.email ? "secondary" : "outline"}>
                      {profile.firstName && profile.lastName && profile.email ? "✓" : "À compléter"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Résumé professionnel</span>
                    <Badge variant={profile.summary ? "secondary" : "outline"}>
                      {profile.summary ? "✓" : "À compléter"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Compétences techniques</span>
                    <Badge variant={skills.length > 0 ? "secondary" : "outline"}>
                      {skills.length > 0 ? "✓" : "À compléter"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Projets</span>
                    <Badge variant={projects.length > 0 ? "secondary" : "outline"}>
                      {projects.length > 0 ? "✓" : "À compléter"}
                    </Badge>
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
                        <Input 
                          id="firstName" 
                          placeholder="Jean"
                          value={profile.firstName}
                          onChange={(e) => handleProfileChange('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Dupont"
                          value={profile.lastName}
                          onChange={(e) => handleProfileChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jean.dupont@email.com"
                        value={profile.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        placeholder="+33 6 12 34 56 78"
                        value={profile.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Localisation</Label>
                      <Input 
                        id="location" 
                        placeholder="Paris, France"
                        value={profile.location}
                        onChange={(e) => handleProfileChange('location', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="summary">Résumé professionnel</Label>
                      <Textarea 
                        id="summary" 
                        placeholder="Développeur full-stack avec 5 ans d'expérience..."
                        rows={4}
                        value={profile.summary}
                        onChange={(e) => handleProfileChange('summary', e.target.value)}
                      />
                    </div>
                    <Button onClick={() => toast({ title: "Profil sauvegardé", description: "Vos informations ont été mises à jour." })}>
                      Sauvegarder
                    </Button>
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
                      <h4 className="font-medium">Compétences par catégorie</h4>
                      {Array.from(new Set(skills.map(s => s.category))).map(category => (
                        <div key={category} className="space-y-3">
                          <h5 className="text-sm font-medium text-muted-foreground">{category}</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills.filter(s => s.category === category).map(skill => (
                              <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">{skill.name}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">{skill.levelLabel}</span>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleRemoveSkill(skill.name)}
                                      className="h-6 w-6 p-0"
                                    >
                                      <X className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                                <Progress value={skill.progress} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Technologies & Outils</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map(tech => (
                          <Badge key={tech} className="cursor-pointer" onClick={() => handleRemoveTechnology(tech)}>
                            {tech}
                            <X className="h-3 w-3 ml-1" />
                          </Badge>
                        ))}
                        <Badge variant="outline" className="cursor-pointer">
                          + Ajouter
                        </Badge>
                      </div>
                    </div>

                    <AddSkillModal onAddSkill={handleAddSkill} />
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
                    {projects.map(project => (
                      <div key={project.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">{project.title}</h4>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleRemoveProject(project.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map(tech => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}

                    <AddProjectModal onAddProject={handleAddProject} />
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
                  <GenerateDossierModal onGenerateDossier={handleGenerateDossier} />
                </div>

                <div className="grid gap-4">
                  {dossiers.map(dossier => (
                    <Card key={dossier.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold">Dossier - {dossier.companyName}</h3>
                            <p className="text-sm text-muted-foreground">{dossier.jobTitle}</p>
                            <p className="text-xs text-muted-foreground mt-1">Créé le {dossier.createdAt}</p>
                          </div>
                          <Badge variant={dossier.format === "Web" ? "secondary" : "default"}>
                            {dossier.format}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            {dossier.format === "Web" ? "Voir en ligne" : "Aperçu"}
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            {dossier.format === "Web" ? "Exporter PDF" : "Télécharger"}
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Modifier
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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