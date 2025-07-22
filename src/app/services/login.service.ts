import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  // Generate Token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/Examportal/auth1`,loginData);
  }


  // Set token using local storage and login
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  

  // check wether user is login or not
  public isLoggedin(){
    let tokenStr= localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr==null || tokenStr=='' ){
      return false;
    }
    else{
      return true;
    }
  }

  // Logout , Remove Token from local storage
  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // get Token
  public getToken(){
    
    return localStorage.getItem('token');
  }

  // set User Deatails
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logOut()
      return null;
    }

  }
   // Get Current User from backend
   public getCurrentUser(){
    var token = localStorage.getItem(localStorage.key(0) as string) as string;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:4200/",
    })
    return this.http.get(`${baseUrl}/current-user`,{headers});
  }

  // get User Role
  public getUserRole(){
    let user = this.getUser()
    return user.authorities[0].authority;
  }




}
