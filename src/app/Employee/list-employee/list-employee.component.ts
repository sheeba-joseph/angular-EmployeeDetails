import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [
    { id: 1, name: 'Tom', salary: 3400, gender: 'Male', isActive: true, department: 2 },
    { id: 2, name: 'Mary', salary: 4000, gender: 'Female', isActive: true, department: 2 },
    { id: 3, name: 'Mark', salary: 4400, gender: 'Female', isActive: true, department: 2 },

  ];
  constructor() { }

  ngOnInit() {
  }

}
