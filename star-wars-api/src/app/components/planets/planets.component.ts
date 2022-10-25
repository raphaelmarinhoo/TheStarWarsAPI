import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: any;
  error: any;

  constructor(private swapiService: SwapiService) {
    this.getPlanets()
  }

  ngOnInit(): void {}

  getPlanets() {
    this.swapiService.planetGetData().subscribe(
      (data: Planet) => {
        this.planets = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}
