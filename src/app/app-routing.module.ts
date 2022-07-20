import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPokemonComponent } from './pokemon/info-pokemon/info-pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './pokemon/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'pokemons', component: ListPokemonComponent},
  {path:'pokemon/:id', component: InfoPokemonComponent},
  {path: '', redirectTo:'pokemons', pathMatch: 'full'},
  //{path: '**', component: PageNotFoundComponent} A voir pourquoi il recupère le chemin fils 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
