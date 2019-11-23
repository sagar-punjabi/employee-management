import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';


const routes: Routes = [
  {path:"",redirectTo:"create",pathMatch:"full"},
  {path:"create",component:CreateEmployeeComponent},
  {path:"employees",component:ViewEmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
