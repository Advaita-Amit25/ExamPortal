import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes = [
    {
      qId: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
      category: {
        title: ''
      }
    },

  ]

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(data);
      },
      (error) => {
        console.log("Error Occured");
        Swal.fire('Erroe!!', 'Error While Loading The Data', 'error');
      }
    )

  }

  deleteQuiz(qId: any) {
    Swal.fire({ icon: 'info', title: "Are You sure?You want to delete this Quiz!", confirmButtonText: 'Delete', showCancelButton: true }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(qId).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qId != qId);
            Swal.fire('Success', 'Quiz deleted successfully', 'success');
          },
          (error) => {
            Swal.fire('Error!!', 'Error While deleting The Quiz', 'error');
          }
        )

      }
    })







  }

}
