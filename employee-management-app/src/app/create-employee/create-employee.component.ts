import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../Employee';
import { EmployeemgtService } from '../employeemgt.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee :  Employee = {
    firstName : "",
    lastName : "",
    gender : "M",
    dob : "",
    department : ""
  }; 
  
  emptyEmployee : Employee = {
    firstName : "",
    lastName : "",
    gender : "M",
    dob : "",
    department : ""
  };

  

  constructor(private service : EmployeemgtService) { }

  public OnCreateEmp ()
  {
    let resp = this.service.createEmployee(this.employee);
    resp.subscribe((data)=> this.employee = this.emptyEmployee);
  }

  ngOnInit() {

  }

}
