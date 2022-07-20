import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionSearchComponent } from './question-search/question-search.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  {
    path: '', component:QuestionSearchComponent
  },
]

@NgModule({
  declarations: [
    QuestionSearchComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSidenavModule,

  ]
})
export class QuestionSearchModule { }
