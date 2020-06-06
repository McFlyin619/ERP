import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword = undefined;
  isAlertVisible = false;

 
  // in constructor you INJECT the services
  constructor(private dataSrv: DataService, private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
    if(!this.shared.isUserLoggedIn) {
      this.router.navigate(['/user/login']);
    }
  }

  save() {
    this.dataSrv.saveUser(this.model)// send to service

    // clear the form
    this.model = new User();
    this.retypePassword = undefined;
    this.isAlertVisible = true;
    setTimeout(() => {
      this.isAlertVisible = false;
    }, 2000);
  }

}
