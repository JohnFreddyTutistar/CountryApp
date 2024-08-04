import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPAgeComponent implements OnInit {

  public countries : Country[] = [];

  constructor(private countryService: CountryService) { }

  searchByRegion(region: string): void{
    this.countryService.searchByRegion(region).subscribe( countries => {
      this.countries = countries;
    })
  }


  ngOnInit(): void {
  }

}
