import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories=[
    {
      cid:'',
      title:''
    },
  ]
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:''
    }

  }

  constructor(private category:CategoryService,private snack:MatSnackBar,private quizService:QuizService){}

  ngOnInit(): void {
      this.category.getCategoriesData().subscribe(
        (data:any)=>{
          this.categories=data;
          console.log(this.categories);
      },
      (error)=>{
        console.log("Error Occured");
        Swal.fire('Error!!','Error While Loading The Data','error');
      }
      )
  }
  addQuiz(){
    // Title Validation, We can do it For All elements
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this.snack.open("Title Required",'',{duration:3000});

    }
    // console.log(this.quizData);
    // after All The Validations
    this.quizService.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire('Success','Quiz Added Succesfully👍','success');
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            cid:''
          }
        }
    },
    (error)=>{
      Swal.fire('Error!','Error Occured while Adding Quiz','error');
      console.log(error);
    }
    )
  }


}
