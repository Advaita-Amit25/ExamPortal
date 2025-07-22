import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _quiz: QuizService,
    private _category: CategoryService,
    private _router : Router
  ) {}

  qId = 0;
  quiz: any;
  categories: any;

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
      }
    );
    this._category.getCategoriesData().subscribe((data: any) => {
      this.categories = data;
    });
  }

  public updateQuizData() {
    // we Can validate dTa Later
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data: any) => {
        Swal.fire('Sucess!', 'Quiz Updated', 'success').then((e)=>{
          this._router.navigate(['/admin/viewQuizzes'])
        });
      },
      (error) => {
        Swal.fire('Error!', 'Error in Updating Quiz', 'error');
        console.log(error);
      }
    );
  }
}
