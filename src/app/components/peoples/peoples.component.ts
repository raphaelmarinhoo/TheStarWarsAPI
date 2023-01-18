import { People } from './../../model/people.model';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent {
  dataSource!: MatTableDataSource<People>;
  columnsToDisplay: string[] = [
    'name',
    'birth_year',
    'height',
    'gender',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
  ];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  peoples: People[] = [];
  disabled: boolean = false;
  length: number = 82;
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private swapiService: SwapiService) {
    this.swapiService.peopleGetData().subscribe((data) => {
      console.log(data);
      this.peoples = data.results;
      this.dataSource = new MatTableDataSource(this.peoples);
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
    this.swapiService.peopleGetData(event.pageIndex + 1).subscribe((data) => {
      this.peoples = data.results;
      this.dataSource.data = this.peoples;
    });
  }
}
