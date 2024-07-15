import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
isLoggedin = false;
user=null;

  constructor(public login:LoginService){}
  ngOnInit(): void {
      this.isLoggedin= this.login.isLoggedin();
      this.user = this.login.getUser();
      // console.log(this.user);
      this.login.loginStatusSubject.asObservable().subscribe((data)=>{
        this.isLoggedin = this.login.isLoggedin();
        this.user = this.login.getUser();
      });
  }
  public logOut(){
    this.login.logOut();
    window.location.reload();
  }


}
