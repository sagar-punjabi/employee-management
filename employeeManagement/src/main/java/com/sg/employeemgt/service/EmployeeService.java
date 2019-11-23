package com.sg.employeemgt.service;

import java.util.List;

import com.sg.employeemgt.model.*;

public interface EmployeeService {

	public List<Employee> getAllEmployees();
	
	public Employee saveOrUpload(Employee e);
	
	public Employee GetEmployeeById(Long id);
	
	 
}
