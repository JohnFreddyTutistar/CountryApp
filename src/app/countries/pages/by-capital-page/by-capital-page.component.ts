import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit {

  

  searchByCapital( term: string): void {
    console.log("desde by capital page");
    console.log({ term });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
