import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { provideHttpClient } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorPeliculasComponent } from './components/buscador-peliculas/buscador-peliculas.component';
import { MisCriticasComponent } from './mis-criticas/mis-criticas.component';
import { GraficoPeliculasComponent } from './grafico-peliculas/grafico-peliculas.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BuscadorPeliculasComponent,
    MisCriticasComponent,
    GraficoPeliculasComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }