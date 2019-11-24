package com.sg.employeemgt.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sg.employeemgt.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
