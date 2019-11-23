import { TestBed } from '@angular/core/testing';

import { EmployeemgtService } from './employeemgt.service';

describe('EmployeemgtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeemgtService = TestBed.get(EmployeemgtService);
    expect(service).toBeTruthy();
  });
});
