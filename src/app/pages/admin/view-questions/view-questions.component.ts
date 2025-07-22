import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  qId=0;
  qTitle:any;
  questions: { 
    content: string,
    answer:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    


   }[] = [];

  constructor(
    private route:ActivatedRoute,
    private question:QuestionService
  ){}

    ngOnInit(): void {
      this.qId = this.route.snapshot.params['qid'];
      this.qTitle = this.route.snapshot.params['title'];
      this.question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
        console.log(data);
        this.questions=data;
      },
      (error:any)=>{
        console.log(error);
      }
    )
      console.log(this.qId);
      console.log(this.qTitle);
        
    }

}
