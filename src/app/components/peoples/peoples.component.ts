import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetInformation, SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent {
  dataSource!: MatTableDataSource<GetInformation>;
  columnsToDisplay: string[] = ['name', 'birth_year', 'height', 'gender', 'mass', 'hair_color', 'skin_color', 'eye_color'];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  posts: any;

  constructor(private swapiService: SwapiService) {
    this.swapiService.peopleGetData().subscribe((data) => {
      console.log(data);
      this.posts = data.results;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
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
}
