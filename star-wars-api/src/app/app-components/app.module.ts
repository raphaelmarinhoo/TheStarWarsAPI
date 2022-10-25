import { PlanetsComponent } from './../components/planets/planets.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from '../components/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from '../components/films/films.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpeciesComponent } from '../components/species/species.component';
import { StarshipsComponent } from '../components/starships/starships.component';
import { PeoplesComponent } from '../components/peoples/peoples.component';
import { VehiclesComponent } from '../components/vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilmsComponent,
    PeoplesComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
