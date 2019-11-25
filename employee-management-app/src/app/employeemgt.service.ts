import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { RestService } from './rest.service';

enum employeeApiUrls {
  createEmployee = '/create',
  getAllEmployees = '/employees'
}

@Injectable({
  providedIn: 'root'
})

export class EmployeemgtService extends RestService {


  public createEmployee(employee: Employee) {

    return this.post(employeeApiUrls.createEmployee, employee);
  
  }

  public getAllEmployees() {

    return this.get(employeeApiUrls.getAllEmployees);
  
  }

}
