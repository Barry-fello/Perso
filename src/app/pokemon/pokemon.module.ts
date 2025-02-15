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
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';


const PokemonRoutes: Routes = [
  { path:'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path:'pokemon/create', component: CreatePokemonComponent,  canActivate: [AuthGuard]},
  { path:'pokemons', component: ListPokemonComponent,  canActivate: [AuthGuard]},
  { path:'pokemon/:id', component: InfoPokemonComponent, canActivate: [AuthGuard] },


];

@NgModule({
  declarations: [
    ListPokemonComponent,
    InfoPokemonComponent, 
    BorderCardDirective,
    PokemonColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    CreatePokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PokemonRoutes),
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
