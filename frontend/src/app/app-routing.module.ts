import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPeliculasComponent } from './components/buscador-peliculas/buscador-peliculas.component';

const routes: Routes = [
  { path: '', component: BuscadorPeliculasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }