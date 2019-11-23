package com.sg.employeemgt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sg.employeemgt.model.Employee;
import com.sg.employeemgt.service.EmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService empservice;
	@PostMapping("/create")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee)
	{
		empservice.saveOrUpload(employee);
		return new ResponseEntity<>(employee,HttpStatus.CREATED);
		
	}
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployees()
	{
		return (new ResponseEntity<>(empservice.getAllEmployees(),HttpStatus.OK));
	}

}
