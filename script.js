// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  
  // Get user input for number of employees
  const numberOfEmployees = parseInt(prompt("Enter the number of employees:"));
  
  for (let i = 0; i < numberOfEmployees; i++) {
    const firstName = prompt(`Enter first name for employee ${i + 1}:`);
    const lastName = prompt(`Enter last name for employee ${i + 1}:`);
    const salary = parseFloat(prompt(`Enter salary for employee ${i + 1}:`));
    
    // Create employee object and add to array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    
    employees.push(employee);
  }
  
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  
  // Display the average salary in a designated HTML element
  const averageSalaryElement = document.querySelector('#average-salary');
  averageSalaryElement.textContent = `Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  
  // Display the random employee in a designated HTML element
  const randomEmployeeElement = document.querySelector('#random-employee');
  randomEmployeeElement.textContent = `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: ${randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);
  displayEmployees(employees);
  getRandomEmployee(employees);
}

// Add event listener to the button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
