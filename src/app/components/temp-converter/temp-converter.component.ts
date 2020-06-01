import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent {

  celsius = 0;
  fahrenheit = 0;

  constructor() { }

  convertToF() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }

  convertToC() {
    this.celsius = (this.fahrenheit - 32) * (5/9);
  }

}
