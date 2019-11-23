package com.sg.employeemgt.repository;

import org.springframework.data.repository.CrudRepository;

import com.sg.employeemgt.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long>{

}
