import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/form-elements/label";
import { Select } from "@/components/form-elements/select";
import { MultiSelect } from "@/components/form-elements/select/MultiSelect";
import { SearchableSelect } from "@/components/form-elements/select/SearchableSelect";
import { FiChevronDown } from "react-icons/fi";

export default function SelectInputs() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = useCallback((value: string) => {
    console.log("Selected value:", value);
  }, []);

  const multiOptions = [
    { value: "1", text: "Option 1", selected: false },
    { value: "2", text: "Option 2", selected: false },
    { value: "3", text: "Option 3", selected: false },
    { value: "4", text: "Option 4", selected: false },
    { value: "5", text: "Option 5", selected: false },
  ];

  const handleMultiSelectChange = useCallback((values: string[]) => {
    setSelectedValues(values);
  }, []);

  const searchableOptions = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "nextjs", label: "Next.js" },
    { value: "nuxtjs", label: "Nuxt.js" },
  ];

  const handleSearchableChange = useCallback((value: string) => {
    console.log("Searchable selected value:", value);
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Select Inputs</h2>
      <div className="space-y-6">
        <div>
          <Label htmlFor="single-select">Select Input</Label>
          <div className="relative">
            <Select
              id="single-select"
              options={options}
              placeholder="Select Option"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
              aria-label="Single select input"
            />
            <FiChevronDown 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none dark:text-gray-400" 
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="relative">
          <MultiSelect
            label="Multiple Select Options"
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={handleMultiSelectChange}
            aria-label="Multiple select input"
          />
          <p className="sr-only" role="status">
            Selected Values: {selectedValues.join(", ")}
          </p>
        </div>

        <div>
          <Label htmlFor="searchable-select">Searchable Select</Label>
          <SearchableSelect
            id="searchable-select"
            options={searchableOptions}
            placeholder="Search frameworks..."
            onChange={handleSearchableChange}
            aria-label="Searchable framework select"
          />
        </div>
      </div>
    </Card>
  );
}
