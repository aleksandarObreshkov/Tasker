import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/service/task-service.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../task/service/login.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm=new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  });




  constructor(private service:TaskService, private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
    console.log("Login component init-ed");
  }

  //TODO fix this, add error handling
  doSignIn(value){
    this.router.navigate(['./']);
    this.loginService.doRegister(value)
    .then(res =>{
      console.log(res);
      }, err =>{
        console.log(err);
      });
  }

}
