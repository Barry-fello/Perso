import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  debounceTime,distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  //{.."a"..."ab"......"abz"......abc...}
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //{...."a"."ab"."abz".."ab"..."abc".......}
    this.pokemons$ = this.searchTerms.pipe(
    debounceTime(300),
    
    //{..."a"."ab"..."ab"..."abc".......}
    distinctUntilChanged(),
  
        //{..."a"."ab"..."ab"..."abc".......}
    switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string){
    return this.searchTerms.next(term);
  }
  goToDetaille(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link);
  }
}
