import { Component, OnInit } from '@angular/core';
import { Department } from '../../Models/Department';

@Component({
  selector: 'app-add-colorcode',
  templateUrl: './add-colorcode.component.html',
  styleUrls: ['./add-colorcode.component.css']
})
export class AddColorcodeComponent implements OnInit {
  name: string;
  color: string;
  depts: Department[];
  dept: Department = new Department();
  test: string;
  constructor() { }

  ngOnInit() {
  }

  AddColor(msg: string): void {
    this.test = 'Name : ' + this.name + ' Color : ' + this.color;

  }



}
