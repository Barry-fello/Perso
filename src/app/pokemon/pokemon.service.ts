import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

 
  getPokemonList(): Observable<Pokemon[]>{
    //return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => console.table(pokemonList)),
       //Refactoring du code
      /*
      catchError((error) => {
        console.log(error);
        return of([]);
      })*/
      catchError((error) => this.handleError(error, []))
    );
  }
  
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.table(pokemon)),
      //Refactoring du code
      /*catchError((error) => {
        console.log(error);
        return of(undefined);
      })*/
      catchError((error) => this.handleError(error, undefined))
      );
  }
  searchPokemonList(term: string): Observable<Pokemon[]>{
     if(term.length <= 1){
      return of([]);
      
     }
    return this.http.get<Pokemon>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,[]))
    );
  }


  updatePokememon(pokemon: Pokemon): Observable<Pokemon|undefined>{
    const httpOptions = {
       headers: new HttpHeaders({ 'Content-type': 'application/json'})
    };

    return this.http.put('api/pokemons',pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );
  }
  createPokemon(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json'})
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }

  deletePokemon(pokemonId: number): Observable<null>{
    return this.http.delete<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any){
    console.table(response);

  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
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
