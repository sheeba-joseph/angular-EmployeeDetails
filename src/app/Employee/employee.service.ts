import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empUrl = 'api/employees';

  constructor(private http: Http) { }

  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.empUrl)
      .toPromise()
      .then(response => response.json().data as Employee[])
      .catch(this.handleError);

  }

  handleError(error: any) {
    console.log('An Error Occurred', error);
    return Promise.reject(error.message || error);
  }
}
