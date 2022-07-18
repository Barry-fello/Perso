import { Injectable } from '@angular/core';
import { POKEMONS } from './list-pokemon';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[]{
    return POKEMONS;

  }
  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);

  }
  getPokemonTypeList(): string[]{
    return ['plante',
    'feu',
    'eau',
    'insetecte',
    'Normale',
    'Feu',
    'vol',
    'combat',
    'Psy']
  }
}
