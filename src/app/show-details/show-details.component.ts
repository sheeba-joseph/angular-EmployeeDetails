import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  employees: Employee[] = [
    { id: 1, name: 'Tom', salary: 2300, gender: 'male', isActive: true, department: 2 },
    { id: 2, name: 'Mark', salary: 3300, gender: 'male', isActive: true, department: 2 },
    { id: 3, name: 'Luck', salary: 3400, gender: 'male', isActive: true, department: 2 },
    { id: 4, name: 'Perry', salary: 5000, gender: 'male', isActive: true, department: 2 },
    { id: 5, name: 'Ryan', salary: 5500, gender: 'male', isActive: true, department: 2 },
    { id: 6, name: 'Jacob', salary: 4500, gender: 'male', isActive: true, department: 2 }
  ];

  // tslint:disable-next-line:no-inferrable-types
  SelectedSalary: string = 'All';

  constructor() { }

  ngOnInit() {
  }

  OnRbtnChange(RbtnValue: string): void {
    this.SelectedSalary = RbtnValue;

  }

}
