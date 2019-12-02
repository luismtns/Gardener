import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => {
          firebase.database().ref('usuarios').child(res.user.uid).set({
            'nome': value.nome,
            'telefone': value.telefone.replace('(','').replace(')','').replace('-','').substring(2),
            'ddd': value.telefone.replace('(','').replace(')','').replace('-','').substring(0,2),
            'ladding': true
          }).then(
            res=>resolve(res),
            error=>reject(error)
          )
        },
        err => reject(err)
       )
    })
   }
  
   updateUser(value){
    return new Promise<any>((resolve, reject) => {
      const uid = firebase.auth().currentUser.uid;
      firebase.database().ref('usuarios').child(uid).update({
        'nome': value.nome,
        'telefone': value.telefone.replace('(','').replace(')','').replace('-','').substring(2),
        'ddd': value.telefone.replace('(','').replace(')','').replace('-','').substring(0,2)
      }, error=>{
        if(error){
          reject(error)
        }else{
          resolve();
        }
      })
    })
   }

   updateLadding(value){
    return new Promise<any>((resolve, reject) => {
      const uid = firebase.auth().currentUser.uid;
      firebase.database().ref('usuarios').child(uid).update({
        'ladding': value,
      }, error=>{
        if(error){
          reject(error)
        }else{
          resolve();
        }
      })
    })
   }
  
   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  
   resetPassword(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(value.email)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }
  
   userDetails(){
    return new Promise((resolve, reject) => {
      const uid = firebase.auth().currentUser.uid;
      if(uid){
        firebase.database().ref('usuarios').child(uid).once('value').then((snapshot)=>{
          resolve(snapshot.val());
        }).catch((error) => {
          reject();
        });
      }
    })
   }

}
