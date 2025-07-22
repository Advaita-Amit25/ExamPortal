import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  mycategories: { title: string,
     description: string 
    }[] = [];

  constructor(private categoryservice:CategoryService){}
  ngOnInit(): void {
    this.categoryservice.getCategoriesData().subscribe((data:any)=>{
      console.log(data)
      this.mycategories=data;

    },
    (error)=>{
      console.log(error)
      Swal.fire('Error','Error In Loading Data','error');
    }
    )
      
  }

}
