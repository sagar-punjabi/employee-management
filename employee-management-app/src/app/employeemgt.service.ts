import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeemgtService {

  constructor(private http : HttpClient) { }

  public createEmployee (employee : Employee)
  {
    return this.http.post("http://localhost:8081/create",employee);
  }
}
