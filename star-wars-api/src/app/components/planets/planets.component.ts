import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  data: Planet[] = [];
  columnsToDisplay = ['title'];

  constructor(private swapiService: SwapiService) {
    this.swapiService.planetGetData().subscribe(x => {
    this.data = x;
    console.log(this.data);
    })
  }
}
