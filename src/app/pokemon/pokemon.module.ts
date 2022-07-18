import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonColorPipe } from './pokemon-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';


const PokemonRoutes: Routes = [
  {path:'pokemons', component: ListPokemonComponent},
  {path:'pokemon/:id', component: InfoPokemonComponent},

];

@NgModule({
  declarations: [
    ListPokemonComponent,
    InfoPokemonComponent,
    BorderCardDirective,
    PokemonColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PokemonRoutes),
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
