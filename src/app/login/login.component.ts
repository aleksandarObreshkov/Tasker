import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/service/task-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:TaskService) { }

  ngOnInit(): void {
  }

  onEnter(input:HTMLInputElement){
    this.service.email=input.value;
    console.log(input.value);
    input.value='';
  }

}
