import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';




const appRoute: Routes = [

  { path: 'list', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'search', component: ShowDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ShowDetailsComponent,
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
