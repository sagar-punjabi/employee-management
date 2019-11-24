package com.sg.employeemgt.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sg.employeemgt.model.Employee;
import com.sg.employeemgt.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository emprepo;
	
	@Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return (List<Employee>) (emprepo.findAll(Sort.by(Sort.Direction.ASC,"firstName")));
	}

	@Override
	public Employee saveOrUpload(Employee e) {
		// TODO Auto-generated method stub
		emprepo.save(e);
		return e;
	}

	@Override
	public Employee GetEmployeeById(Long id) {
		// TODO Auto-generated method stub
		return emprepo.findById(id).get();
	}

}
