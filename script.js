// The application should have an input form that collects 
// employee first name, last name, ID number, job title, annual salary.
// A 'Submit' button should collect the form information, 
// store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and 
// append this to the to DOM. If the total monthly cost exceeds 
// $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. 
// For Base mode, it does not need to remove that Employee's salary from the reported total.

// to do list
  // XX register click 
  // XX make click respond to inputs
  // XX log inputs on console
  // XX get values from inputs and store information in object (in array)
  // XX append values into DOM table
  // XX append employeeObject to DOM
  // XX Get object values from array and append them to the DOM using 
  // XX target inputs and clear field
  // 
  // compare total salary values to salary limit
  // create "total monthly costs" field below table
  // add total year salaries inputs stored in "employees" object and... 
  // divide by 12.
  // if resultant number exceeds $20,000, add red background color to total monthly cost


console.log('JS sauce');

$(readyNow);
console.log('jq ready');

function readyNow(){
  console.log('jq onReady');
  $('#submitButton').on('click', onSubmit);
  // $('#submitButton').on('click', appendEmployee);
} 

let employees = [];
// let monthlyCost = [];

function onSubmit() { 
  let employeeOject = {
  firstName: $('#firstName').val(), 
  lastName: $('#lastName').val(),
  employeeID: $('#employeeID').val(),
  title: $('#title').val(),
  annualSalary: $('#annualSalary').val(),
  }
  employees.push(employeeOject);
  // monthlyCost.push(employeeOject);
  console.log('Added employee is:', employees);
  $('#firstName').val(''), 
  $('#lastName').val(''),
  $('#employeeID').val(''),
  $('#title').val(''),
  $('#annualSalary').val('')
  appendEmployee(employeeOject);
  // calcMonthlyCost()
}
  

function appendEmployee(newEmployee) {
  console.log('in appendEmployee');
  
  // for (let employee of employees){
    $('#employeeList').append(`
      <tr>
        <td>${newEmployee.firstName}</td>
        <td>${newEmployee.lastName}</td>
        <td>${newEmployee.employeeID}</td>
        <td>${newEmployee.title}</td>
        <td>${newEmployee.annualSalary}</td>
        <button class="">(delete button)</button>
      </tr> 
  `);
      
  // }
  // employees = [];
}

// function calcMonthlyCost() {
//   console.log('in calcMonthlyCost, total salary cost is:', monthlyCost);
//   monthlyCost.push();
  // if (monthlyCost > $20,000){
    
  // }
// }