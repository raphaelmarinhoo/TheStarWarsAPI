import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GetInformation {
  results: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  public filmGetData(): Observable<GetInformation> {
    return this.http.get<GetInformation>('https://swapi.dev/api/films');
  }

  public peopleGetData(): Observable<GetInformation> {
    return this.http.get<GetInformation>('https://swapi.dev/api/people');
  }

  public planetGetData(): Observable<GetInformation> {
    return this.http.get<GetInformation>('https://swapi.dev/api/planets');
  }

  public starshipGetData(): Observable<GetInformation> {
    return this.http.get<GetInformation>('https://swapi.dev/api/starships');
  }

  public speciesGetData(): Observable<GetInformation> {
    return this.http.get<GetInformation>('https://swapi.dev/api/species');
  }

  public vehicleGetData(): Observable<GetInformation> {
    return this.http.get<GetInformation>('https://swapi.dev/api/vehicles');
  }
}
