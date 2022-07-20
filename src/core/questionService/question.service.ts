import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    public http: HttpClient
  ) { }

  getAllQuestion(){
    return this.http.get(`${environment.API}2.3/questions?order=desc&sort=activity&site=stackoverflow`,)
  }

}
