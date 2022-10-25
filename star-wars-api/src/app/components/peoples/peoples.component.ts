import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/peoples.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  peoples: any;
  error: any;

  constructor(private swapiService: SwapiService) {
    this.getPeoples()
  }

  ngOnInit(): void {}

  getPeoples() {
    this.swapiService.peopleGetData().subscribe(
      (data: People) => {
        this.peoples = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}
