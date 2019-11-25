Employee-Management-Application
==========================

-------------------------------------------------------------------------------------
App hosted here => https://sagar-punjabi.github.io/employee-management/
-------------------------------------------------------------------------------------

## What is it?

Employee-Management-Application is an interesting project, that aims at managing emoloyee data in an organization. At this point, though the application features are limited to creating new employees and accessing details of existing employees, these can be easily extended in future to include updating existing details, deleting employee records, etc.

An application designed to serve the below requirements :

* Use Case 1: Employee Registration
	* As a user, one should be able to Register an employee with following details:
	* First Name 
	* Last Name 
	* Gender 
	* Date of Birth 
	* Department
	
* Use Case 2: Employee List 
	* As a user, I should be able to see all the employee details in a tabular form (or any other way) in ascending order by first name 

 The application is developed using the following technologies as per the requirements :
 
 •	Back End  : Java 8, Spring Boot,Spring Data JPA, Rest APIs, Junit, Mockito
 
 •	Front End : Angular 7 , Typescript, Jasmine, Karma 
 

 
## How to run it?

In order to run the application, it is required to build and run the Spring Boot App (which exposes the REST APIs) and the Angular App (provides UI and consumes REST APIs).
The repository consists of two directiries :

Directory|Description
---------|------------
employeeManagement|Spring Boot Application directory
employee-management-app|Angular App root directory

Please follow the below steps to build and start the application.


**Step 1 :** 
Download this repository or you can also clone it using the following command 
<pre>git clone https://github.com/sagar-punjabi/employee-management.git</pre>


**Step 2 :**
### Build and Run Spring Boot Applocation
##### Prerequisites
    * Java 8+
    
  * Inside the direcotry `employeeManagement`, run the below command which is applicable for you.


    * For windows without gradle installed
    <pre>gradlew.bat bootRun</pre>
    * If you have gradle installed and under linux/mac/Windows:
    <pre>gradle bootRun</pre>
    * If gradle is not installed, and under linux/mac
    <pre>gradlew bootRun</pre>
    
    The Spring Boot application has embedded Tomcat server and in-memory H2 Database. Hence, executing the above command will start the applocation on the embedded tomcat server on configured port `8081`.
    You may notice that `gradle bootRun` compiles the sources and starts the application, but the completion percentage halts at [75-80%].That is because the server then keeps running until you terminate it. Closing down the server is what makes the Gradle task actually finish.
    
    To confirm if the server is running as expected at port 8081, launch a browser and visit the following url :
    <pre>http://localhost:8081/employees</pre>
    The above URL is the API to get a JSON object of all the employees, since ititially there are no records, you will see an empty set `[]`.
    
**Step 3 :**
### Build and Run Angular Applocation
##### Prerequisites
    * Angular CLI v7+
    
  * Inside the direcotry `employee-management-app`, run the below command to update the application and its dependencies:
  <pre>ng update</pre>
  
  * Once updated, compile and run the application using the command:
  <pre>ng serve</pre>
  
  Navigate to `http://localhost:4200/` , which is the default port used by angular to serve for developemnt environment.
    



  


