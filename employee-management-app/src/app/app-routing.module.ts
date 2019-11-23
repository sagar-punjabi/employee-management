import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [
  {path:"",redirectTo:"create",pathMatch:"full"},
  {path:"create",component:CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
