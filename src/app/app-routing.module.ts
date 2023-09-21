import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'bienvenido', component: AppComponent},
  { path: 'búsqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent},
  { path: 'actor/alta', component: ActorAltaComponent},
  { path: 'peliculas/listado', component: ActorAltaComponent},
  { path: 'actor/listado', component: ActorAltaComponent},
  { path: '', redirectTo : 'bienvenido', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
