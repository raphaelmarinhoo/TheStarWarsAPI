import { Film } from './../model/film.model';
import { Vehicle } from './../model/vehicle.model';
import { Starship } from './../model/starship.model';
import { People } from './../model/people.model';
import { Species } from './../model/species.model';
import { Planet } from './../model/planet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PlanetResponse {
  results: Planet[];
}

export interface SpeciesResponse {
  results: Species[];
}

export interface PeopleResponse {
  results: People[];
}

export interface StarshipResponse {
  results: Starship[];
}

export interface VehicleResponse {
  results: Vehicle[];
}

export interface FilmResponse {
  results: Film[];
}

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  public filmGetData(page: number = 1): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
      `https://swapi.dev/api/films/?page=${page}`
    );
  }

  public peopleGetData(page: number = 1): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(
      `https://swapi.dev/api/people/?page=${page}`
    );
  }

  public planetGetData(page: number = 1): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
      `https://swapi.dev/api/planets/?page=${page}`
    );
  }

  public starshipGetData(page: number = 1): Observable<StarshipResponse> {
    return this.http.get<StarshipResponse>(
      `https://swapi.dev/api/starships/?page=${page}`
    );
  }

  public speciesGetData(page: number = 1): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(
      `https://swapi.dev/api/species/?page=${page}`
    );
  }

  public vehicleGetData(page: number = 1): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(
      `https://swapi.dev/api/vehicles/?page=${page}`
    );
  }
}
