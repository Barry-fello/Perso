import { Component} from '@angular/core';
import { POKEMONS } from './list-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`
  
})
export class AppComponent /*implements OnInit */{
  /*pokemonList : Pokemon [] = POKEMONS
  pokemonSelected : Pokemon |undefined;

  ngOnInit(){
    console.log(this.pokemonList);
  }

  selectPokemon(pokemonId:string){
    const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    

    if(pokemon){
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous rechercher un pokemon qui n'existe pas }`);
      this.pokemonSelected = pokemon;

    }
    
  }*/
}
