import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent,
    TempConverterComponent,
    AboutComponent,
    UserRegisterComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
