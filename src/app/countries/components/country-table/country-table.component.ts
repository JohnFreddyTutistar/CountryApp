import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  @Input() public countries : Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
