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
  // add total year salaries entered and... 
  // divide by 12.
  // if resultant number exceeds $20,000, add red background color to total monthly cost


console.log('JS sauce');

$(readyNow);
console.log('jq ready');

function readyNow(){
  console.log('jq onReady');
  $('#submitButton').on('click', onSubmit);
  $('#submitButton').on('click', appendEmployee);
} 

let employees = [];

function onSubmit() { 
  let employeeOject = {
  firstName: $('#firstName').val(), 
  lastName: $('#lastName').val(),
  employeeID: $('#employeeID').val(),
  title: $('#title').val(),
  annualSalary: $('#annualSalary').val(),
  }
  employees.push(employeeOject);
  console.log('Added employee is:', employees);
  $('#firstName').val(''), 
  $('#lastName').val(''),
  $('#employeeID').val(''),
  $('#title').val(''),
  $('#annualSalary').val('')
}
  

function appendEmployee() {
  console.log('in appendEmployee');
  
  for (let employee of employees){
    $('#employeeList').append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <button class="">(delete button)</button>
      </tr> 
  `);
      employees = [];
    }
}






















// const example = {
//   first: 'Chad', 
//   last: 'Rhiger', 
//   id: '42', 
//   title: 'Worker Guy', 
//   salary: '$420000' 
// }






// function appendDOM(){
//   $('.employeeInputs').append(`
//   <span id="inputContainer">
//     <input class="inputSteez" id="firstName" placeholder="First Name"></input>
//     <input class="inputSteez" id="lastName" placeholder="Last Name"></input>
//     <input class="inputSteez" id="employeeID" placeholder="Employee ID"></input>
//     <input class="inputSteez" id="title" placeholder="Title"></input>
//     <input class="inputSteez" id="annualSalary" placeholder="Annual Salary"></input>
//     <button class="buttonSteez" id="submitButton" >Submit</button>

//   </span>


//   <table>
//     <thead>
//       <tr>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Employee ID</th>
//         <th>Title</th>
//         <th>Annual Salary</th>

//       </tr>
//     </thead>
//   `)
// }

// function addEmployee() {
//   console.log('addEmployee. is thing thing on?');

// }


































// // let input = document.createElement('input');   ????