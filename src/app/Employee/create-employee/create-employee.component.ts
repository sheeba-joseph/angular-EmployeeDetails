import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../Models/Department';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    salary: null,
    gender: null,
    isActive: null,
    department: null
  };
  department = 0;
  departments: Department[] = [
    { id: 0, name: 'Select Department' },
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Accounts' }
  ];
  constructor() { }

  ngOnInit() {
  }


  saveEmployee(employee: Employee): void {

    console.log(employee);
  }

  // saveEmployee(empFrom: NgForm): void {

  //   console.log(empFrom.value);
  //  }

}

