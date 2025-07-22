import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit  {
  constructor(private categoryService:CategoryService,private snack:MatSnackBar){}
  category={
    title:'',
    description:''
  }
  ngOnInit(): void {
      
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this.snack.open("Title Required",'',{duration:3000})
      return;
    }
    // if Detailed provided correctly
    this.categoryService.addCaregory(this.category).subscribe((data:any)=>{
      
      this.category.title='';
      this.category.description='';
      Swal.fire('Success!!','Category Added','success');
    },
    (error)=>{
      console.log("Error !!")
      Swal.fire('Error!!','Server Error','error');
    }
    )
  }

}
