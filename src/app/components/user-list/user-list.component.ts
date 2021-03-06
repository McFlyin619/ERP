import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsers = [];
  editField: string;

  constructor(private dataSrv: DataService, private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.allUsers = this.dataSrv.getAllUsers();
    console.log("Users loaded ", this.allUsers);
    if(!this.shared.isUserLoggedIn) {
      this.router.navigate(['/user/login']);
    }
  }

  removeUser(user) {
    console.log('Deleting', user.userName);
    // remove user from component array
    this.allUsers = this.allUsers.filter(val => val != user);
    //  remove user from service array
    this.dataSrv.deleteUser(user);
  }

  changeValue(property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
