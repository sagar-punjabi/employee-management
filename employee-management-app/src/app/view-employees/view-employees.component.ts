import { Component, OnInit } from '@angular/core';
import { EmployeemgtService } from '../employeemgt.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees:any;
  constructor(private service:EmployeemgtService) { }

  ngOnInit() {

    let resp = this.service.getAllEmployees();
    resp.subscribe((data)=>this.employees=data);
  }

}
