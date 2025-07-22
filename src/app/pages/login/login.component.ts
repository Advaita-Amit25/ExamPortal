import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={
  username:'',
  password:'',

};

  constructor(private snack:MatSnackBar,private login:LoginService,private route:Router){}

  ngOnInit(): void {
      
  }
  formSubmit(){
    console.log('Submit form Is working');
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open('Username is Invalid','',{duration:3000});
      return ;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open('Password required','',{duration:3000});
      return ;
    }

    // Generate Token Using Valid Authentication
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('Success');
        console.log(data);
        // console.log(this.login.getToken()+" Hello");
        // Login 
        this.login.loginUser(data.jwt)
        // console.log(data.jwt)
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            console.log(this.login.getUserRole());
            if(this.login.getUserRole()=='ADMIN'){
              // window.location.href='/admin';
              this.route.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            

            }
            else if(this.login.getUserRole()=='NORMAL'){
              // window.location.href='/user-dashboard';
              this.route.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }
            else{
              this.login.logOut();
              // location.reload();
            }

          }
        )


      },
    (error)=>{
      console.log('Eroor Occured!');
      console.log(error);
    }

    );

  }

}
