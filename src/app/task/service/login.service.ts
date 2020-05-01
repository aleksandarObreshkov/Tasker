import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:AngularFireAuth) { }



  doRegister(value){
    return new Promise<any>((resolve,reject) =>{
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res=>{
        resolve(res);
      },
      err =>{
        reject(err);
      })
    })
  }
}
