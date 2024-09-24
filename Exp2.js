const fs = require('fs');

// Load employees from file
const loadEmployees = () => {                                   //arrow function created to read file
  try {
    const data = fs.readFileSync('employees.json');                    //reading the file
    return JSON.parse(data);              //converts string data from json format to javascript object
  } catch (error) {
    console.error('Error reading Employees.json:', error);
    return [];
  }
};

// Function to print all employees
const printEmployees = (employees) => {
  console.log('Employee List:');
  employees.forEach(emp => {
    console.log(`ID: ${emp.id}\nName: ${emp.name}\nSalary: ${emp.salary}\n`);
  });
};

// Function to print employees with salary greater than 5,000
const printHighEarners = (employees) => {
  console.log('Employees with salary greater than ₹5,000:');
  employees.filter(emp => emp.salary > 5000).forEach(emp => {
    console.log(`ID: ${emp.id}\nName: ${emp.name}\nSalary: ${emp.salary}`);
  });
};

// Function to calculate total salary for employees with salary greater than 5,000
const calculateHighEarnerTotalSalary = (employees) => {
  return employees
    .filter(emp => emp.salary > 5000)
    .reduce((total, emp) => total + emp.salary, 0);
};

// Main logic
const main = () => {
  const employees = loadEmployees();
  if (employees.length === 0) 
    {
    console.log('No employees found.');
    return;
  }

  printEmployees(employees);
  printHighEarners(employees);
  const totalSalary = calculateHighEarnerTotalSalary(employees);
  console.log(`Total Salary for employees earning more than ₹5,000: ₹${totalSalary}`);
};

main();