import { Component } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicles.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent {
  data: Vehicle[] = [];
  columnsToDisplay = ['title'];

  constructor(private swapiService: SwapiService) {
    this.swapiService.vehicleGetData().subscribe(x => {
    this.data = x;
    console.log(this.data);
    })
  }
}
