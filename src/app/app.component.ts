import { Component, OnDestroy, ɵConsole, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscription } from 'rxjs';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  
  constructor( private loginComponent:LoginComponent) { }

  login=this.loginComponent;

  ngOnInit(){
    console.log("App component init-ed");
  }
  
}
