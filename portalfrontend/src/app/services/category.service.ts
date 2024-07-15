import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getCategoriesData(){
    var token = localStorage.getItem(localStorage.key(0) as string) as string;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:4200/",
    })
    return this.http.get(`${baseUrl}/category/`,{headers})
  }

  public addCaregory(category: any){
    var token = localStorage.getItem(localStorage.key(0) as string) as string;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:4200/",
    })
    return this.http.post(`${baseUrl}/category/`,category,{headers});

  }
}
