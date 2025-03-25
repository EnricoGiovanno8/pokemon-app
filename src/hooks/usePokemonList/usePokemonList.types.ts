interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Array<Pokemon>;
}

interface UsePokemonListResult {
  pokemonList: Array<Pokemon>;
  isLoading: boolean;
  error: Error | null;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  isAsc: boolean;
  setIsAsc: (isAsc: boolean) => void;
}

export type { UsePokemonListResult, PokemonListResponse, Pokemon };
