export interface PokemonSpeciesApiReturn {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GrowthRate;
  pokedex_numbers: PokedexNumber[];
  egg_groups: EggGroup[];
  color: Color;
  shape: Shape;
  evolves_from_species: EvolvesFromSpecies;
  evolution_chain: EvolutionChain;
  habitat: Habitat;
  generation: Generation;
  names: Name[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}

interface GrowthRate {
  name: string;
  url: string;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: {
    name: string;
    url: string;
  };
}

interface EggGroup {
  name: string;
  url: string;
}

interface Color {
  name: string;
  url: string;
}

interface Shape {
  name: string;
  url: string;
}

interface EvolvesFromSpecies {
  name: string;
  url: string;
}

interface EvolutionChain {
  url: string;
}

interface Habitat {
  name: string;
  url: string;
}

interface Generation {
  name: string;
  url: string;
}

interface Language {
  name: string;
  url: string;
}

interface Name {
  name: string;
  language: Language;
}

interface FlavorText {
  flavor_text: string;
  language: Language;
  version: {
    name: string;
    url: string;
  };
}

interface Description {
  description: string;
  language: Language;
}

interface Genus {
  genus: string;
  language: Language;
}

interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };
}
