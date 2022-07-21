import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SearchBoxComponent } from './search-box/search-box.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";

const routes: Routes = [
  {
    path: '', component:QuestionListComponent
  },
]

@NgModule({
  declarations: [
    QuestionListComponent,
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
        FlexModule,
        MatCardModule,
        MatToolbarModule,

    ]
})
export class QuestionsModule { }
