import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId:any;
  title:any;
  question={
    quiz:{
      qId: {} as { [key: string]: any }, 
    },
    content: '',
    answer:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
  };
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];
    this.title = this.route.snapshot.params['title'];
    console.log(this.qId)
    console.log(this.title)
    this.question.quiz['qId'] = this.qId;
  }

}
