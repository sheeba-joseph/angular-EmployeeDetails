import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this._empService.getEmployees()
      .then(employees => this.employees = employees);
  }

}
