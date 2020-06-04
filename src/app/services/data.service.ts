import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList = [];  

  
  constructor() {
    // when the class is created
    var admin = new User();
    admin.firstName = 'OBrien';
    admin.lastName = 'McQuade'; 
    admin.userName = 'Admin';
    admin.password = 'Padres2020';
    this.userList.push(admin);
   }

  public saveUser(user: User) {
    this.userList.push(user);
  }

  public getAllUsers() {
    return this.userList;
  }

  public deleteUser(user) {
    this.userList = this.userList.filter(val => val != user);
  }
}
