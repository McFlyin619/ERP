import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public shared: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  onIconClick() {
    this.shared.logOut();
    this.router.navigate(['/user/login']);
  }

}
