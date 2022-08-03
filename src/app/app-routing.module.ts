import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoPokemonComponent } from './pokemon/info-pokemon/info-pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './pokemon/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path:'pokemons', component: ListPokemonComponent},
  { path:'login', component: LoginComponent},
  //{ path: '**', component: PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 