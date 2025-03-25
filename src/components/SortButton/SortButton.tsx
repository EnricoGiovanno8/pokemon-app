import React from 'react';
import { SortButtonProps } from './SortButton.types';

const SortButton = ({ isAsc, setIsAsc }: SortButtonProps): React.ReactNode => (
  <button
    className="bg-blue-600 px-4 py-2 rounded-md text-white hover:cursor-pointer"
    onClick={() => setIsAsc(!isAsc)}
  >
    {isAsc ? 'Sort Z-A' : 'Sort A-Z'}
  </button>
);

export default SortButton;
