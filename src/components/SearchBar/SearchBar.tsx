import React from 'react';
import { SearchBarProps } from './SearchBar.types';

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps): React.ReactNode => (
  <input
    type="text"
    placeholder="Search Pokemon"
    className="flex-1 px-4 py-2 border rounded-md"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
);

export default SearchBar;
