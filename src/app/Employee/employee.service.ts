import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployee: Employee[] = [
    { id: 1, name: 'Tom', salary: 3400, gender: 'Male', isActive: true, department: 2 },
    { id: 2, name: 'Mary', salary: 4000, gender: 'Female', isActive: true, department: 2 },
    { id: 3, name: 'Mark', salary: 4400, gender: 'Female', isActive: true, department: 2 },
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.listEmployee;
  }
}
