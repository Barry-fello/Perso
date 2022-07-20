import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['./pokemon-form.component.css']
 
})
export class PokemonFormComponent implements OnInit {
  //Definition d'une proprieté d'entrée (un contrat d'interface dans ce composant)
  @Input() pokemon!: Pokemon;
  types: string[];

  //Injection des services (PokemonService et Router)
  constructor(private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }
// Methode pour verifier si le type du pokemon passé en parametre existe
  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);

  }
  //Methode pour gerer le pokemon selectionné (si la case est cauché ou non)
  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; 
    
    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      //retiré le type 
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.slice(index, 1);
    }
 
  }
  isTypesValid(type: string): boolean{

    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    
    if(this.pokemon.types.length > 2 && !this.hasType(type)){

      return false;

    }
  
    return true;
  }
  annuler(pokemon: Pokemon){
    this.router.navigate(['/pokemon/:id',pokemon.id]);

  }
  //Message pour dire que le choix est soumis avec une redirection vers le pokemon caucher
  onSubmit(){
    console.log('submit form !');
    this.router.navigate(['/pokemon',this.pokemon.id]);
  }

}
