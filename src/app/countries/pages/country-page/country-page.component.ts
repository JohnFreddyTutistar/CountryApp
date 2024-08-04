import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {
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
      if(country === null){
          return this.router.navigateByUrl('');
      }

      console.log("Tenemos pais");
      return;
    });
  }
}
