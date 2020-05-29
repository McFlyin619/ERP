import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  count = 0;
  inputText = '';

  test() {
    this.title = "I changed the value of a variable";
    this.inputText = '';
  }

  increaseCount() {
    this.count += 1;
  }


  ///////////////////////////Overview of TypeScript////////////////////////
  tsOverview() {
    // Strong Type, must declare variable type
    var name: string = 'OBrien McQuade';
    var age: number = 32;
    var total: number = 233.97;
    var found: boolean = false;
    var list: number[] = [];

    var oldWay: any; //Allows you to make any variable any type

    oldWay = 1;
    oldWay = [];
    oldWay = true;


    ////////////////////////////////////////////////////////

    var lastName = 'McQuade';
    

  }

}

