import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Starship } from 'src/app/model/starship.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent {
  dataSource!: MatTableDataSource<Starship>;
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
  starships: Starship[] = [];
  disabled: boolean = false;
  length: number = 36;
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private swapiService: SwapiService) {
    this.swapiService.starshipGetData().subscribe((data) => {
      console.log(data);
      this.starships = data.results;
      this.dataSource = new MatTableDataSource(this.starships);
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
    this.swapiService.starshipGetData(event.pageIndex + 1).subscribe((data) => {
      this.starships = data.results;
      this.dataSource.data = this.starships;
    });
  }
}
