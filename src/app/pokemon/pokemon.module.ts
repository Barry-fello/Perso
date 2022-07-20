import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonColorPipe } from './pokemon-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const PokemonRoutes: Routes = [
  {path:'edit/pokemon/:id', component: EditPokemonComponent},
  {path:'pokemons', component: ListPokemonComponent},
  {path:'pokemon/:id', component: InfoPokemonComponent},

];

@NgModule({
  declarations: [
    ListPokemonComponent,
    InfoPokemonComponent,
    BorderCardDirective,
    PokemonColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PokemonRoutes),
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
