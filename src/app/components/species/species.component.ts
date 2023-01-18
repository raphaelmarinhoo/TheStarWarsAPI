import { Species } from './../../model/species.model';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
})
export class SpeciesComponent {
  dataSource!: MatTableDataSource<Species>;
  columnsToDisplay: string[] = [
    'name',
    'classification',
    'designation',
    'average_height',
    'average_lifespan',
    'language',
  ];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  species: Species[] = [];
  disabled: boolean = false;
  length: number = 37;
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private swapiService: SwapiService) {
    this.swapiService.speciesGetData().subscribe((data) => {
      console.log(data);
      this.species = data.results;
      this.dataSource = new MatTableDataSource(this.species);
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
    this.swapiService.speciesGetData(event.pageIndex + 1).subscribe((data) => {
      this.species = data.results;
      this.dataSource.data = this.species;
    });
  }
}
