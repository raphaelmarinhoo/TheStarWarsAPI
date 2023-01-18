import { Planet } from './../../model/planet.model';
import { PlanetResponse } from './../../services/swapi.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent {
  dataSource!: MatTableDataSource<Planet>;
  columnsToDisplay: string[] = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'population',
  ];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  planets: Planet[] = [];
  disabled: boolean = false;
  length: number = 60;
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private swapiService: SwapiService) {
    this.swapiService.planetGetData().subscribe((data) => {
      console.log(data);
      this.planets = data.results;
      this.dataSource = new MatTableDataSource(this.planets);
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
    this.swapiService.planetGetData(event.pageIndex + 1).subscribe((data) => {
      this.planets = data.results;
      this.dataSource.data = this.planets;
    });
  }
}
