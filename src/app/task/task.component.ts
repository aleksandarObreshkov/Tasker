import { Component, OnInit, Inject } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Task } from './model/task.model';
import { TaskService } from './service/task-service.service';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  
  tasks: Task[];
  priorityClass:string;

  

  constructor(private taskService:TaskService){}

  ngOnInit(): void {

    this.taskService.getTasks()
      .subscribe(data => {
        this.tasks=data.map(e =>{
          let p:string;
          switch(e.payload.doc.get('priority.code')){
            case 'u':{p="badge badge-danger";break;}
            case 'h':{p="badge badge-warning";break;}
            case 'm':{p="badge badge-primary";break;}
            default:{p="badge badge-light";break;}
          }
          return {
            id:e.payload.doc.id,
            name:e.payload.doc.get("name"),
            priority:{code:e.payload.doc.get('priority.code'),value:p}
          } as Task;
        });

        this.sort(this.tasks);
        
        
      });

  }


  create(task:HTMLInputElement){
    let taskPriority:string, nameValue:string;
    try{
      taskPriority=task.value.match("p:([a-z])")[1];
    }catch(e){
      taskPriority='l';
    }
    nameValue=task.value.match("([a-zA-z]+ [a-zA-z]*) *")[1];

    
    this.taskService.createTask({id:task.id,name:nameValue,priority:{code:taskPriority,value:""}});
    task.value='';
  }

  delete(taskid:string){
    this.taskService.deleteTask(taskid);
  }

  update(task:Task){
    this.taskService.updateTask(task);
  }

  sort(t:Task[]){
    t.sort(function(a,b){
      
      let aCode=a.priority.code;
      let bCode=b.priority.code;
      let imp=[
        {id:1,value:'u'},
        {id:2,value:'h'},
        {id:3,value:'m'},
        {id:4,value:'l'}];

     

      if(aCode == bCode){
        return (a.name < b.name) ? -1 :1;
      }
      else{
        let tempA, tempB;
        for(let i=0;i<4;i++){
          if(aCode==imp[i].value) tempA=imp[i].id;
          if(bCode==imp[i].value) tempB=imp[i].id;
        }

        return (tempA>tempB) ? 1: -1;
      }
    });
  }



  



}
