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

    console.log("Task component init-ed");

    let current=new Date();
    let month:string=current.getMonth()+1+"";
    if(current.getMonth()+1<10)month="0"+month;
    
    let today=current.getFullYear()+'-'+(month)+"-"+current.getDate();

    this.taskService.getTasks()
      .subscribe(data => {
        this.tasks=data.map(e =>{

          if(today===e.payload.doc.get("due")){
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
            priority:{code:e.payload.doc.get('priority.code'),value:p},
            due:e.payload.doc.get("due")
          } as Task;
        }
       
        
      });
        

        this.sort(this.tasks);
    });


  }


  create(task:HTMLInputElement, dateInput:HTMLInputElement){
    let taskPriority:string, nameValue:string,due:string=dateInput.value;
    try{
      taskPriority=task.value.match("p:([a-z])")[1];
    }catch(e){
      taskPriority='l';
    }
    nameValue=task.value.match("([a-zA-z ]+)")[1].substring(0,task.value.match("([a-zA-z ]+)")[1].length-1);

    
    if(due===''){
    let current=new Date();
    let month:string=current.getMonth()+1+"";
    if(current.getMonth()+1<10)month="0"+month;
    due=current.getFullYear()+'-'+(month)+"-"+current.getDate();
    }
    let newTask:Task={id:task.id,name:nameValue,priority:{code:taskPriority,value:""},due:due};
    this.taskService.createTask(newTask);
    task.value='';
    dateInput.value='';

    
  }

  delete(taskid:string){
    this.taskService.deleteTask(taskid);
  }

  update(task:Task, input:HTMLInputElement){
    input.value=task.name+' p:'+task.priority.code;
    this.delete(task.id);
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

  isUndefined(){
    return this.tasks===undefined ? 1 : -1;
  }



  



}
