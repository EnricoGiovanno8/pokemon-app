import PokemonCard from '../../components/PokemonCard/PokemonCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortButton from '../../components/SortButton/SortButton';
import usePokemonList from '../../hooks/usePokemonList/usePokemonList';

const HomePage = () => {
  const { pokemonList, isLoading, error, searchQuery, setSearchQuery, isAsc, setIsAsc } = usePokemonList();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{`Error: ${error.message}`}</h2>;
  }

  return (
    <div className="flex-1 p-4">
      <div className="flex flex-1 flex-row items-center gap-2 mb-2">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortButton isAsc={isAsc} setIsAsc={setIsAsc} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemonList.length > 0 ? (
          pokemonList.map(({ name, url }) => {
            const id = url.split('/').filter(Boolean).pop() || '';

            return <PokemonCard id={id} name={name} />;
          })
        ) : (
          <h2>No Pokemon Found</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
