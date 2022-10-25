import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/models/species.model';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species: any;
  error: any;

  constructor(private swapiService: SwapiService) {
    this.getSpecies()
  }

  ngOnInit(): void {}

  getSpecies() {
    this.swapiService.speciesGetData().subscribe(
      (data: Species) => {
        this.species = data;
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}
