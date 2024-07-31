import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];

  
  constructor( private countryService : CountryService) { }

  searchByCapital( term: string): void {
    this.countryService.searchByCapital( term ).subscribe( countries => {
      this.countries = countries
    } );
  }


  ngOnInit(): void {

  }

}
