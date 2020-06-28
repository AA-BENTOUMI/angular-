import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   users = JSON.parse(localStorage.getItem('users')) || [];
   connecusers = JSON.parse(localStorage.getItem('connecusers')) || {};
  
  table =JSON.parse(localStorage.getItem('tab')) || [];
  
  constructor(private http: HttpClient) { }

adding(profileForm){
  this.table.push(profileForm);
  localStorage.setItem('tab', JSON.stringify(this.table));

}
Deleting(i){
  this.table.splice(i,1);
  localStorage.setItem('tab', JSON.stringify(this.table));

  };
 update(i,form){
this.table[i] = form ;
localStorage.setItem('tab', JSON.stringify(this.table));

 }
 weather(ta9s){
  return this.http.get('http://api.weatherstack.com/current?access_key=5dfa08e0ca83f0eea04f5d1e9c9e20fd&query='+ta9s)
 }
 logout(){
  localStorage.removeItem('connecusers')
}
 isloged(){
  return !! localStorage.getItem('connecusers');
 }

 register(user) {
  this.users.push(user);
  localStorage.setItem('users', JSON.stringify(this.users));
    }
    login(loginForm){
      for (let i=0;i<this.users.length;i++){
      if ((loginForm.username==this.users[i].username)&&(loginForm.password==this.users[i].password)){
        // this.connecusers.push(loginForm);
        localStorage.setItem('connecusers', JSON.stringify(this.connecusers));
      }
    } 
  }
}
