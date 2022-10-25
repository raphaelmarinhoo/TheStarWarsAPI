import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starships.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  starships: any;
  error: any;

  constructor(private swapiService: SwapiService) {
    this.getStarships()
  }

  ngOnInit(): void {}

  getStarships() {
    this.swapiService.starshipGetData().subscribe(
      (data: Starship) => {
        this.starships = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}
