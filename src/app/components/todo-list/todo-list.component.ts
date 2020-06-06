import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoText = '';
  todos: string[] = [];
  completed: string[] = [];

  constructor(private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
    if(!this.shared.isUserLoggedIn) {
      this.router.navigate(['/user/login']);
    }
  }

  addTodo() {
    this.todos.push(this.todoText);
    console.log(this.todos);
    this.todoText = '';
  }

  remove(item) {
    console.log('wants to remove', item);
    this.todos = this.todos.filter(id => id != item);
  }

  addComplete(item) {
    this.completed.push(item);
    this.remove(item);
  }

  removeCompleted(item) {
    this.completed = this.completed.filter(id => id != item);
  }

}
