import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../model/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  email="aleks.yasuo@gmail.com";
  constructor(private firestore: AngularFirestore) {}

  getTasks(){
    return this.firestore.collection(this.email).snapshotChanges();
  }

  createTask(task: Task){
    return this.firestore.collection(this.email).add(task);
  }

  updateTask(task: Task){
    delete task.id;
    this.firestore.doc(this.email+'/'+task.id).update(task);  
  }

  deleteTask(taskId:string){
    this.firestore.doc(this.email+'/'+taskId).delete();
  }
}
