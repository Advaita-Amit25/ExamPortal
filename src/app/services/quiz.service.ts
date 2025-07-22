import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  // View All Quizzes
  public quizzes(){
    var token = localStorage.getItem(localStorage.key(0) as string) as string;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:4200/",
    })
    return this.http.get(`${baseUrl}/quiz/`,{headers})
  }
  // Add new Quiz
  public addQuiz(quiz:any){
    var token = localStorage.getItem(localStorage.key(0) as string) as string;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:4200/",
    })
    return this.http.post(`${baseUrl}/quiz/`,quiz,{headers})
  }

  // Delete a Quiz
  public deleteQuiz(qId:any){
    var token = localStorage.getItem(localStorage.key(0) as string) as string;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:4200/",
    })
    return this.http.delete(`${baseUrl}/quiz/${qId}`,{headers});
  }

  // Get Single Quiz
  public getQuiz(qId: any){
    return this.http.get(`${baseUrl}/quiz/${qId}`)
  }

  // Update Quiz
  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/`,quiz);

  }



}
