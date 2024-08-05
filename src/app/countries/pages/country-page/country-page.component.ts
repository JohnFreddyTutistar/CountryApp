import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {

  public country? : Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.searchConutry(id);
    });
  }

  searchConutry(code: string) {
    this.countryService.searchCountryByAplphaCode(code).subscribe((country) => {
      if( !country ) return this.router.navigateByUrl('');

      this.country = country

      console.log("Tenemos pais", country);
      return;
    });
  }
}
