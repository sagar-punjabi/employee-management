package com.sg.employeemgt;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;

import com.sg.employeemgt.model.Employee;
import com.sg.employeemgt.repository.EmployeeRepository;
import com.sg.employeemgt.service.EmployeeService;

@RunWith(SpringRunner.class)
@SpringBootTest
class EmployeeManagementApplicationTests {
	@Autowired
	private EmployeeService service;
	@MockBean
	private EmployeeRepository repository;

	@Test
	public void getAllEmployeesTest() {
		when(repository.findAll(Sort.by(Sort.Direction.ASC,"firstName"))).thenReturn(Stream.of(new Employee(1L,"Aaron","Edison","M",new Date(),"Sales"),new Employee(1L,"Elezabeth","Thomas","F",new Date(),"Human Resource")).collect(Collectors.toList()));
		assertEquals(2,service.getAllEmployees().size());
	}
	
	@Test
	public void saveEmployeeTest() {
		Employee emp = new Employee(1L,"Steven","Edison","M",new Date(),"Sales");
		when(repository.save(emp)).thenReturn(emp);
		assertEquals(emp,service.saveOrUpload(emp));
	}


	
}
