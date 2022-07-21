import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {QuestionService} from "../../core/questionService/question.service";
@Component({
  selector: 'app-question-search',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {


  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 0;
  calDate:number = 0;

  pageEvent: PageEvent| any;

  questionArray: any =[];
  pageLength: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    public searchSer: QuestionService,
  ) {
    this.questionSearch();
  }

  ngOnInit(): void {

  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.questionSearch();
  }


  search(search: any) {
    console.log(search);
  }

  searchParams(newParams = {}){
    return  {
      pagesize: this.pageSize,
      site: 'stackoverflow',
      ...newParams
    }
  }



  questionSearch(params = {}){
    const urlObj = this.searchParams(params);
    this.searchSer.getAllQuestion(urlObj)
      .subscribe( (res: any) => {
        this.questionArray = res.items;
        this.pageLength = res.quota_max;
      })
  }



}
