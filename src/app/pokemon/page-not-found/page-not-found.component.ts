import { Component} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class='center'>
  <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
  <h2>Bonjour !  cette page n'existe pas !</h2>
  <a routerLink="/pokemons">
    Retourner à l' accueil
  </a> 
</div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent  {

}
