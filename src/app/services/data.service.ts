import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];  

  
  constructor() { }

  public saveUser(user: User) {
    this.data.push(user);
  }

  public getAllUsers() {
    return this.data;
  }
}
