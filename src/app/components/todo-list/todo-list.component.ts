import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoText = '';
  todos: string[] = [];
  completed: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todos.push(this.todoText);
    console.log(this.todos);
    this.todoText = '';
  }

  remove(item) {
    console.log('wants to remove', item);
    this.todos = this.todos.filter(val => val != item);
  }

  addComplete(item) {
    this.completed.push(item);
    this.remove(item);
  }

  removeCompleted(item) {
    this.completed = this.completed.filter(val => val != item);
  }

}
