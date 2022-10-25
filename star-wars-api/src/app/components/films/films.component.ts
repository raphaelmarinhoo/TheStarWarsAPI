import { Film } from './../../models/films.model';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films: any;
  error: any;

  constructor(private swapiService: SwapiService) {
    this.getFilms()
  }

  ngOnInit(): void {}

  getFilms() {
    this.swapiService.filmGetData().subscribe(
      (data: Film) => {
        this.films = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}
