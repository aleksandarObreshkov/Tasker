import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase} from '@angular/fire/database';
// for AngularFireAuth
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import {Route, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const config={
    apiKey: "AIzaSyCapnqfLUSo1dfGWTvdkIM9voPeq-64_vY",
    authDomain: "tasker-f707a.firebaseapp.com",
    databaseURL: "https://tasker-f707a.firebaseio.com",
    projectId: "tasker-f707a",
    storageBucket: "tasker-f707a.appspot.com",
    messagingSenderId: "594553417185",
    appId: "1:594553417185:web:0c7cf74cf3dec63758f6a0"
}

const ROUTES:Route[]=[
  {path:'',component:TaskComponent},
  {path:'login', component:LoginComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
