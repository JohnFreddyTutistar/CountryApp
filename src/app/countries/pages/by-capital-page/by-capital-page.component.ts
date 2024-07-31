import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit {

  @Output() onValue = new EventEmitter()

  searchByCapital( term: any): void {
    console.log("desde by capital page");
    console.log({ term });
    this.onValue.emit(term)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
