import { AxiosRequestConfig } from 'axios';
import { useMemo, useState } from 'react';
import { LIMIT, POKEMON_URL } from '../../constants/apiConstants';
import { useQuery } from '@tanstack/react-query';
import fetcher from '../../utils/fetcher';
import useDebounce from '../../utils/useDebounce';
import { Pokemon, PokemonListResponse, UsePokemonListResult } from './usePokemonList.types';

const usePokemonList = (): UsePokemonListResult => {
  const config: AxiosRequestConfig = {
    params: {
      limit: LIMIT,
    },
  };
  const { data, isLoading, error } = useQuery<PokemonListResponse>({
    queryKey: ['pokemonList'],
    queryFn: fetcher(POKEMON_URL, config),
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(searchQuery, 300);
  const filteredPokemons: Array<Pokemon> = useMemo(() => {
    const initialList = data?.results || [];

    const filteredList = initialList.filter(({ name }) =>
      name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return filteredList;
  }, [data?.results, debouncedQuery]);

  const [isAsc, setIsAsc] = useState<boolean>(true);
  const sortedPokemons = useMemo<Array<Pokemon>>(() => {
    if (!isAsc) {
      const reversedList = [];

      for (let i = filteredPokemons.length - 1; i >= 0; i--) {
        reversedList.push(filteredPokemons[i]);
      }

      return reversedList;
    }

    return filteredPokemons;
  }, [filteredPokemons, isAsc]);

  return { pokemonList: sortedPokemons, isLoading, error, searchQuery, setSearchQuery, isAsc, setIsAsc };
};

export default usePokemonList;
