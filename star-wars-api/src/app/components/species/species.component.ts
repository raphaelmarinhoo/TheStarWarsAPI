import { Component } from '@angular/core';
import { Species } from 'src/app/models/species.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {
  data: Species[] = [];
  columnsToDisplay = ['title'];

  constructor(private swapiService: SwapiService) {
    this.swapiService.speciesGetData().subscribe(x => {
    this.data = x;
    console.log(this.data);
    })
  }
}
