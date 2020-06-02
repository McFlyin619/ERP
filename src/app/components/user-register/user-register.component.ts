import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword = '';

  // in constructor you INJECT the services
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  save() {
    this.dataSrv.saveUser(this.model)// send to service

    // clear the form
    this.model = new User();
    this.retypePassword = '';
  }


}
