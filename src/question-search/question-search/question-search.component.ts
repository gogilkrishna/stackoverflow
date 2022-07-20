import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {QuestionService} from "../../core/questionService/question.service";

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.scss']
})
export class QuestionSearchComponent implements OnInit {


  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent | undefined;

  questionArray: any =[];

  constructor(
    public searchSer: QuestionService,

  ) {
    this.questionSearch()
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  questionSearch(){
    this.searchSer.getAllQuestion()
      .subscribe( (res: any) => {
        this.questionArray = res.items;
        console.log(res);
      })
  }



  ngOnInit(): void {
  }

}
