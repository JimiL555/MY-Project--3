/ Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Event listener for 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

// Function to handle adding employees
function trackEmployeeData() {
  const employeesArray = collectEmployees();
  displayEmployees(employeesArray);
  displayAverageSalary(employeesArray);
  getRandomEmployee(employeesArray);
}

// Collect employee data
function collectEmployees() {
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
function displayAverageSalary(employeesArray) {
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
function getRandomEmployee(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  const randomEmployeeText = document.createElement("p");
  randomEmployeeText.textContent = "Random Employee: " + randomEmployee.firstName + " " + randomEmployee.lastName + " - Salary: " + randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  document.querySelector('.card-body').appendChild(randomEmployeeText);
}

// Display employees in the HTML table
function displayEmployees(employeesArray) {
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
