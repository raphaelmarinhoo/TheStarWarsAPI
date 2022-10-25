import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicles.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: any;
  error: any;

  constructor(private swapiService: SwapiService) {
    this.getVehicles()
  }

  ngOnInit(): void {}

  getVehicles() {
    this.swapiService.vehicleGetData().subscribe(
      (data: Vehicle) => {
        this.vehicles = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}
