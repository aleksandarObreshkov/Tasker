import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase} from '@angular/fire/database';
// for AngularFireAuth
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/service/task-service.service';
import { Task } from './task/model/task.model';

const config={
    apiKey: "AIzaSyCapnqfLUSo1dfGWTvdkIM9voPeq-64_vY",
    authDomain: "tasker-f707a.firebaseapp.com",
    databaseURL: "https://tasker-f707a.firebaseio.com",
    projectId: "tasker-f707a",
    storageBucket: "tasker-f707a.appspot.com",
    messagingSenderId: "594553417185",
    appId: "1:594553417185:web:0c7cf74cf3dec63758f6a0"
}

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
