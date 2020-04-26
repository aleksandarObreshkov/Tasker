import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/service/task-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticated=false;


  constructor(private service:TaskService) { }

  ngOnInit(): void {
    console.log("Login component init-ed");
  }

  onEnter(input:HTMLInputElement){
    this.service.email=input.value;
    console.log(input.value);
    input.value='';
    this.authenticated=true;
  }

}
