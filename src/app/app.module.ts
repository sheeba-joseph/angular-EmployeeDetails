import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { AddColorcodeComponent } from './employee/add-colorcode/add-colorcode.component';
import { ColorPanelComponent } from './employee/add-colorcode/color-panel.component';
import { EmployeeService } from './Employee/employee.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpData } from './Employee/emp-data';



const appRoute: Routes = [

  { path: 'list', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'search', component: ShowDetailsComponent },
  { path: 'colorcode', component: AddColorcodeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ShowDetailsComponent,
    SearchEmpComponent,
    AddColorcodeComponent,
    ColorPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(EmpData)

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
