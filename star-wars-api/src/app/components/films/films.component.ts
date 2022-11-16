import { Film } from './../../models/films.model';
import { SwapiService } from './../../services/swapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  data: Film[] = [];
  columnsToDisplay = ['title'];

  constructor(private swapiService: SwapiService) {
    this.swapiService.filmGetData().subscribe(x => {
    this.data = x.results;
    console.log(this.data);
    })
  }
}
