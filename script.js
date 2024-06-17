/ Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const numEmployees = prompt("Enter the number of employees you want to add:");
  const employeesArray = [];

  for (let i = 0; i < numEmployees; i++) {
    const firstName = prompt("Enter the first name of employee " + (i + 1));
    const lastName = prompt("Enter the last name of employee " + (i + 1));
    const salary = parseFloat(prompt("Enter the salary of employee " + (i + 1)));

    employeesArray.push({ firstName, lastName, salary });
  }

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  const averageSalaryText = document.createElement("p");
  averageSalaryText.textContent = "Average Salary: " + averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  document.querySelector('.card-body').appendChild(averageSalaryText);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  const randomEmployeeText = document.createElement("p");
  randomEmployeeText.textContent = "Random Employee: " + randomEmployee.firstName + " " + randomEmployee.lastName + " - Salary: " + randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  document.querySelector('.card-body').appendChild(randomEmployeeText);
}

// Event listener for 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

// Additional functionality to display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  employeesArray.forEach(employee => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = employee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    newTableRow.appendChild(salaryCell);

    employeeTable.appendChild(newTableRow);
  });
}