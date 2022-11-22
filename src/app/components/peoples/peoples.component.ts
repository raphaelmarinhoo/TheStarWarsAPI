import { Component } from '@angular/core';
import { People } from 'src/app/models/peoples.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent {
  data: People[] = [];
  columnsToDisplay = ['title'];

  constructor(private swapiService: SwapiService) {
    this.swapiService.peopleGetData().subscribe(x => {
    this.data = x;
    console.log(this.data);
    })
  }
}
