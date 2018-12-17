import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  rbtnValue: string = 'All';

  @Output()
  RbtnClick: EventEmitter<string> = new EventEmitter<string>(); // custom event

  @Output() radioValue: string;
  constructor() { }

  ngOnInit() {
  }


  OnRbtnClick() {
    this.RbtnClick.emit(this.rbtnValue);
    console.log(this.rbtnValue);

  }
}
