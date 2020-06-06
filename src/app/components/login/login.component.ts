import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  isErrorVisible = false;

  // Inject service in this component
  constructor(private dataSrv: DataService, private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // console.log('Login with', this.email, this.password);
    var allUsers = this.dataSrv.getAllUsers();
    var found = false;
    for(let i=0; i < allUsers.length; i++) {
      var user = allUsers[i];

      // decide if the provided credentials match the user
      if (this.email == user.email && this.password == user.password) {
        console.log('Success!', user.userName, 'logged in!');
        found = true;
        this.shared.isUserLoggedIn = true;
        this.shared.userName = user.userName;
        this.email = '';
        this.password = '';
        this.router.navigate(['/user/create']); // NOTE: a navigate works like a return and leaves the function
      }
    }
    // if not found activate alert
    if(!found) {
      this.isErrorVisible = true;
      this.password = '';
      setTimeout(() => this.isErrorVisible = false, 3000);
    }
  }
}
