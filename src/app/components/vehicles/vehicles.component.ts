import { Vehicle } from './../../model/vehicle.model';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  dataSource!: MatTableDataSource<Vehicle>;
  columnsToDisplay: string[] = [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'passengers',
  ];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  vehicles: Vehicle[] = [];
  disabled: boolean = false;
  length: number = 39;
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private swapiService: SwapiService) {
    this.swapiService.vehicleGetData().subscribe((data) => {
      console.log(data);
      this.vehicles = data.results;
      this.dataSource = new MatTableDataSource(this.vehicles);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changePage(event: PageEvent) {
    this.swapiService.vehicleGetData(event.pageIndex + 1).subscribe((data) => {
      this.vehicles = data.results;
      this.dataSource.data = this.vehicles;
    });
  }
}
