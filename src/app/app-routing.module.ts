import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';

// the list of valid routes for the page
const routes: Routes = [
  { path:'todo', component: TodoListComponent },
  { path: 'converter', component: TempConverterComponent },
  { path: 'about', component: AboutComponent},
  { path: 'user/create', component: UserRegisterComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
