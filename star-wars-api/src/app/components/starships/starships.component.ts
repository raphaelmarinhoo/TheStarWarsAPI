import { Component } from '@angular/core';
import { Starship } from 'src/app/models/starships.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  data: Starship[] = [];
  columnsToDisplay = ['title'];

  constructor(private swapiService: SwapiService) {
    this.swapiService.starshipGetData().subscribe(x => {
    this.data = x;
    console.log(this.data);
    })
  }
}
