import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userservice:UserService,private snack:MatSnackBar){}
  // Lets Create User Object and Store Values Of In This Object
  public User={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };


  ngOnInit(): void {
  }

formSubmit(){
  alert("submit");
  console.log(this.User);
  if(this.User.username=='' || this.User.username== null ){
    // alert('User Name Is Empty');
    this.snack.open("Username is required","OK",{duration:3000,verticalPosition:'top',});
    return;
  }
  // Add User
  this.userservice.addUser(this.User).subscribe(
    (data:any)=>{
      //for Success
      // console.log(data);  
      Swal.fire('SUCCESS','Task','success');
    },
    (error)=>{
      // For Error Occur
      this.snack.open("Error Occured","",{duration:3000});
      Swal.fire('Error','Task Failed','error');
    }
  );


}

}
