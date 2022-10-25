import { VehiclesComponent } from './../components/vehicles/vehicles.component';
import { StarshipsComponent } from './../components/starships/starships.component';
import { SpeciesComponent } from './../components/species/species.component';
import { PlanetsComponent } from './../components/planets/planets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from '../components/films/films.component';
import { IndexComponent } from '../components/index/index.component';
import { PeoplesComponent } from '../components/peoples/peoples.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'peoples',
    component: PeoplesComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'species',
    component: SpeciesComponent,
  },
  {
    path: 'starships',
    component: StarshipsComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
