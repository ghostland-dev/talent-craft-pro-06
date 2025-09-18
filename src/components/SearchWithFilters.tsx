import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, X, MapPin, Building, Euro } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface SearchFilters {
  locations: string[];
  contractTypes: string[];
  experienceLevels: string[];
  salaryRange: string[];
  companies: string[];
}

interface SearchWithFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  resultCount: number;
}

const LOCATIONS: FilterOption[] = [
  { id: "paris", label: "Paris", count: 45 },
  { id: "lyon", label: "Lyon", count: 12 },
  { id: "toulouse", label: "Toulouse", count: 8 },
  { id: "remote", label: "Full remote", count: 23 },
];

const CONTRACT_TYPES: FilterOption[] = [
  { id: "cdi", label: "CDI", count: 67 },
  { id: "cdd", label: "CDD", count: 15 },
  { id: "freelance", label: "Freelance", count: 6 },
];

const EXPERIENCE_LEVELS: FilterOption[] = [
  { id: "junior", label: "Junior (0-2 ans)", count: 18 },
  { id: "intermediate", label: "Intermédiaire (2-5 ans)", count: 34 },
  { id: "senior", label: "Senior (5+ ans)", count: 26 },
];

const SALARY_RANGES: FilterOption[] = [
  { id: "30-40", label: "30k - 40k€", count: 12 },
  { id: "40-55", label: "40k - 55k€", count: 25 },
  { id: "55-70", label: "55k - 70k€", count: 21 },
  { id: "70+", label: "70k€+", count: 8 },
];

const SearchWithFilters = ({ 
  searchQuery, 
  onSearchChange, 
  filters, 
  onFiltersChange, 
  resultCount 
}: SearchWithFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (category: keyof SearchFilters, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[category] = [...newFilters[category], value];
    } else {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    }
    onFiltersChange(newFilters);
  };

  const removeFilter = (category: keyof SearchFilters, value: string) => {
    handleFilterChange(category, value, false);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      locations: [],
      contractTypes: [],
      experienceLevels: [],
      salaryRange: [],
      companies: []
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(filters).reduce((count, filterArray) => count + filterArray.length, 0);
  };

  const renderFilterSection = (
    title: string,
    icon: React.ReactNode,
    options: FilterOption[],
    category: keyof SearchFilters
  ) => (
    <div className="space-y-3">
      <div className="flex items-center gap-2 font-medium text-sm">
        {icon}
        {title}
      </div>
      <div className="space-y-2 pl-6">
        {options.map((option) => (
          <div key={option.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={filters[category].includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange(category, option.id, checked as boolean)
                }
              />
              <label htmlFor={option.id} className="text-sm cursor-pointer">
                {option.label}
              </label>
            </div>
            {option.count && (
              <span className="text-xs text-muted-foreground">({option.count})</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un poste, une entreprise, une technologie..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="relative">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
              {getActiveFilterCount() > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-4 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Filtres de recherche</h3>
                {getActiveFilterCount() > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                    Tout effacer
                  </Button>
                )}
              </div>

              {renderFilterSection("Localisation", <MapPin className="h-4 w-4" />, LOCATIONS, "locations")}
              <Separator />
              {renderFilterSection("Type de contrat", <Building className="h-4 w-4" />, CONTRACT_TYPES, "contractTypes")}
              <Separator />
              {renderFilterSection("Expérience", <Building className="h-4 w-4" />, EXPERIENCE_LEVELS, "experienceLevels")}
              <Separator />
              {renderFilterSection("Salaire", <Euro className="h-4 w-4" />, SALARY_RANGES, "salaryRange")}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters */}
      {getActiveFilterCount() > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).map(([category, values]) =>
            values.map((value) => {
              const allOptions = [...LOCATIONS, ...CONTRACT_TYPES, ...EXPERIENCE_LEVELS, ...SALARY_RANGES];
              const option = allOptions.find(opt => opt.id === value);
              return (
                <Badge key={`${category}-${value}`} variant="secondary" className="gap-1">
                  {option?.label || value}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-3 w-3 p-0 hover:bg-transparent"
                    onClick={() => removeFilter(category as keyof SearchFilters, value)}
                  >
                    <X className="h-2 w-2" />
                  </Button>
                </Badge>
              );
            })
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{resultCount} offre{resultCount !== 1 ? 's' : ''} trouvée{resultCount !== 1 ? 's' : ''}</span>
        <div className="flex items-center gap-4">
          <span>Trier par :</span>
          <Button variant="ghost" size="sm">
            Pertinence
          </Button>
          <Button variant="ghost" size="sm">
            Date
          </Button>
          <Button variant="ghost" size="sm">
            Salaire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchWithFilters;