import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPeliculasComponent } from './components/buscador-peliculas/buscador-peliculas.component';
import { MisCriticasComponent } from './mis-criticas/mis-criticas.component';

const routes: Routes = [
  { path: 'buscar', component: BuscadorPeliculasComponent },
  { path: 'mis-criticas', component: MisCriticasComponent },

  { path: '', component: BuscadorPeliculasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }