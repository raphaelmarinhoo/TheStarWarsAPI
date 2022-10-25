import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/films.model';
import { People } from '../models/peoples.model';
import { Vehicle } from '../models/vehicles.model';
import { Planet } from '../models/planets.model';
import { Starship } from '../models/starships.model';
import { Species } from '../models/species.model';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {

  constructor(private http: HttpClient) {}

  public filmGetData(): Observable<Film> {
    return this.http.get<Film>('https://swapi.dev/api/films');
  }

  public peopleGetData(): Observable<People> {
    return this.http.get<People>('https://swapi.dev/api/people/');
  }

  public planetGetData(): Observable<Planet> {
    return this.http.get<Planet>('https://swapi.dev/api/planets');
  }

  public starshipGetData(): Observable<Starship> {
    return this.http.get<Starship>('https://swapi.dev/api/starships');
  }

  public speciesGetData(): Observable<Species> {
    return this.http.get<Species>('https://swapi.dev/api/species');
  }

  public vehicleGetData(): Observable<Vehicle> {
    return this.http.get<Vehicle>('https://swapi.dev/api/vehicles');
  }
}
