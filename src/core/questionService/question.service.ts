import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    public http: HttpClient
  ) {
  }

  createUrlParams(obj: any) {
    let params = new URLSearchParams();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.set(key, obj[key])
      }
    }
    return params.toString();
  }

  getAllQuestion(searchParams: any) {
    const url = this.createUrlParams(searchParams);
    return this.http.get(`${environment.API}2.3/questions?${url}`)
  }


}
