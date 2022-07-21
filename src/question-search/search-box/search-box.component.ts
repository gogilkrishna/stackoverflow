import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {keyframes} from "@angular/animations";

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() public searchEvent = new EventEmitter();

  form!: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      campaignOne: this.fb.group({
        fromdate: [new Date()],
        todate: [new Date()],
      }),

      sortDate:this.fb.group({
        min: [new Date()],
        max: [new Date()],
      }),
      sortOrder: ['asc'],
      tag: [],

      sortBy: ['activity'],
    })

    this.form.valueChanges.subscribe(res => {
      const sortby = res.sortBy;
      if(['activity' ,'creation' ].includes(sortby)) {
        this.form.get('sortDate')?.enable({emitEvent: false, onlySelf: true});
      } else {
        this.form.get('sortDate')?.disable({emitEvent: false, onlySelf: true}  );
      }
       this.searchEvent.emit({
        fromdate: new Date(this.form.get('campaignOne')?.value.fromdate).getTime(),
        todate: new Date(this.form.get('campaignOne')?.value.todate).getTime(),
        min: new Date(this.form.get('sortDate')?.value.min).getTime(),
        max: new Date(this.form.get('sortDate')?.value.max).getTime(),
        sortOrder: this.form.value.sortOrder,
        tag: this.form.value.tag,
        sort:this.form.value.sort
      })
    });
   }


  ngOnInit(): void {
  }


}
