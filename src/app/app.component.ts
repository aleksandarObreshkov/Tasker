import { Component, OnDestroy, ɵConsole, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscription } from 'rxjs';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  authenticated:boolean;
  
  constructor() { }

  ngOnInit(){
    this.authenticated=false;
  }
  
}
