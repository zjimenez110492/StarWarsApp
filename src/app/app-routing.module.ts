import { VerNavesComponent } from './Componentes/ver-naves/ver-naves.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPeliculasComponent } from './Componentes/list-peliculas/list-peliculas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListPeliculasComponent,
    data: {
      title: 'Listar Peliculas'
    }
  },
  {
    path: 'ver',
    component: VerNavesComponent,
    data: {
      title: 'Ver Naves'
    }
  },
  {
    path: '**',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

}
