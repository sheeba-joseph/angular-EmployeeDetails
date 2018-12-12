import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  @Input()
  emp: Employee;

  constructor() { }

  ngOnInit() {
  }

}
