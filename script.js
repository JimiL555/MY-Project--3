// Get the button element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data
const collectEmployees = function() {
  const employees = [];
  const numberOfEmployees = parseInt(prompt("Enter the number of employees:"));

  for (let i = 0; i < numberOfEmployees; i++) {
    const firstName = prompt(`Enter first name for employee ${i + 1}:`);
    const lastName = prompt(`Enter last name for employee ${i + 1}:`);
    const salary = parseFloat(prompt(`Enter salary for employee ${i + 1}:`));

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);
  }

  return employees;
}

// Function to display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;

  const averageSalaryElement = document.querySelector('#average-salary');
  averageSalaryElement.textContent = 'Average Salary: ' + averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

// Function to select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  const randomEmployeeElement = document.querySelector('#random-employee');
  randomEmployeeElement.textContent = 'Random Employee: ' + randomEmployee.firstName + ' ' + randomEmployee.lastName + ', Salary: ' + randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Function to display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table tbody');
  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement('td');
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    newTableRow.appendChild(salaryCell);

    employeeTable.appendChild(newTableRow);
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
