import { TestBed } from '@angular/core/testing';

import { EmployeemgtService } from './employeemgt.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { Employee } from './Employee';
describe('EmployeemgtService', () => {


  beforeEach(() => TestBed.configureTestingModule({
    providers:[EmployeemgtService],
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: EmployeemgtService = TestBed.get(EmployeemgtService);
    expect(service).toBeTruthy();
  });

  it('Should have getAllEmployees method',()=>{
    const service: EmployeemgtService = TestBed.get(EmployeemgtService);
    expect(service.getAllEmployees).toBeTruthy();
  })

  it('Should have createEmployee method',()=>{
    const service: EmployeemgtService = TestBed.get(EmployeemgtService);
    expect(service.createEmployee).toBeTruthy();
  })

  it('Should retrive All Employees from the API via GET',()=>{
    const dummyEmployees : Employee[] = [
      {
          "id": 1,
          "firstName": "ASD",
          "lastName": "FGH",
          "dob": "1995-10-21T00:00:00.000+0000",
          "department": "Marketing",
          "gender": "F"
      },
      {
          "id": 2,
          "firstName": "QAZ",
          "lastName": "ZAQ",
          "dob": "1992-10-31T00:00:00.000+0000",
          "department": "HR",
          "gender": "M"
      }
    ];
    const service: EmployeemgtService = TestBed.get(EmployeemgtService);
    const httpMock = TestBed.get(HttpTestingController);
    expect(service.getAllEmployees).toBeTruthy();
    service.getAllEmployees().subscribe((data:Employee[])=>expect(data.length).toEqual(2))
    const request = httpMock.expectOne('http://localhost:8081/employees');
    expect(request.request.method).toBe('GET');
    request.flush(dummyEmployees);
  });

  it('Should create a new Employee via the API using POST',()=>{
    const dummyEmployee : Employee = [
      {
          "id": 1,
          "firstName": "ASD",
          "lastName": "FGH",
          "dob": "1995-10-21T00:00:00.000+0000",
          "department": "Marketing",
          "gender": "F"
      }
    ];
    const service: EmployeemgtService = TestBed.get(EmployeemgtService);
    const httpMock = TestBed.get(HttpTestingController);
    expect(service.createEmployee).toBeTruthy();
    service.createEmployee(dummyEmployee).subscribe((data:Employee)=>expect(data).toEqual(dummyEmployee))
    const request = httpMock.expectOne('http://localhost:8081/create');
    expect(request.request.method).toBe('POST');
    request.flush(dummyEmployee);
  });

});
