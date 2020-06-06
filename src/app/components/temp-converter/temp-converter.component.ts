import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent implements OnInit {

  celsius = 0;
  fahrenheit = 0;

  constructor(private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
    if(!this.shared.isUserLoggedIn) {
      this.router.navigate(['/user/login']);
    }
  }

  convertToF() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }

  convertToC() {
    this.celsius = (this.fahrenheit - 32) * (5/9);
  }

}
