import { Film } from './../../model/film.model';
import { SwapiService } from './../../services/swapi.service';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  dataSource!: MatTableDataSource<Film>;
  columnsToDisplay: string[] = [
    'episode_id',
    'title',
    'opening_crawl'
  ];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  films: Film[] = [];
  disabled: boolean = false;
  length: number = 6;
  pageSize: number = 3;
  pageIndex: number = 0;

  constructor(private swapiService: SwapiService) {
    this.swapiService.filmGetData().subscribe((data) => {
      console.log(data);
      this.films = data.results;
      this.dataSource = new MatTableDataSource(this.films);
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
    this.swapiService.filmGetData(event.pageIndex + 1).subscribe((data) => {
      this.films = data.results;
      this.dataSource.data = this.films;
    });
  }
}
