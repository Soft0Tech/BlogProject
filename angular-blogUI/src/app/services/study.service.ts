import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor(private http:HttpClient) { }
  getQuizes(){
    return this.http.get<any>("assets/questions.json")
  }
  quizeByCategory(){
    return this.http.get<any>("assets/questions.json")
  }
  // createQuizes(){    
  //   return this.http.get<any>("assets/questions.json")
  // }
  // editQuizes(){
  //   return this.http.get<any>("assets/questions.json")
  // }
}
