import React from 'react';
import { PokemonCardProps } from './PokemonCard.types';

const PokemonCard = ({ id, name }: PokemonCardProps): React.ReactNode => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <img src={imageUrl} alt={name} className="w-24 h-24 mx-auto" />
      <h2 className="capitalize">{name}</h2>
    </div>
  );
};

export default PokemonCard;
