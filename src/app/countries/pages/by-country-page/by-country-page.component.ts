import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private countryService : CountryService) { }

  searchByCountry( term: string): void {
    this.countryService.searchByCountry( term ).subscribe( country => {
      this.countries = country
    })
  }


  ngOnInit(): void {
  }

}
