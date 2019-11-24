import { Component, OnInit } from '@angular/core';
import { EmployeemgtService } from '../employeemgt.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Employee[];
  constructor(private service: EmployeemgtService) { }

  ngOnInit() {

    let resp = this.service.getAllEmployees();
    resp.subscribe((data : Employee[]) => this.employees = data);
  }

}
