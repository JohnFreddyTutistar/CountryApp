import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPAgeComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRouterModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPAgeComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRouterModule,
    SharedModule
  ]
})
export class CountriesModule { }
