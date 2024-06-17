// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];

  // Prompt user for number of employees
  const numberOfEmployees = prompt("Enter number of employees:");

  for (let i = 0; i < numberOfEmployees; i++) {
    const firstName = prompt(`Enter first name for employee ${i + 1}:`);
    const lastName = prompt(`Enter last name for employee ${i + 1}:`);
    const salary = prompt(`Enter salary for employee ${i + 1}:`);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)  // Convert salary to float
    };

    employees.push(employee);
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employeesArray.length;

  const averageSalaryElement = document.createElement("p");
  averageSalaryElement.textContent = `Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`;

  document.body.append(averageSalaryElement);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  const randomEmployeeElement = document.createElement("p");
  randomEmployeeElement.textContent = `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`;

  document.body.append(randomEmployeeElement);
}

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  employeesArray.forEach(currentEmployee => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.querySelector('tbody').append(newTableRow);
  });
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  
  console.table(employees); // Log employees to console
  
  displayEmployees(employees); // Display employees in HTML table
  
  displayAverageSalary(employees); // Display average salary
  
  getRandomEmployee(employees); // Display random employee
}

// Event listener for the addEmployeesBtn
addEmployeesBtn.addEventListener('click', trackEmployeeData);
