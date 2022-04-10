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
  // append values into DOM table
  // compare total salary values to salary limit





console.log('JS sauce');

$(readyNow);
console.log('jq ready');

function readyNow(){
  console.log('jq onReady');
  $('#submitButton').on('click', onSubmit);
  $('#submitButton').on('click', appendEmployee);


  // $('#submitButton').on('click', addEmployee);
} 

let employees = [];

// XX get values of inputs and store push them into the array

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
  }

  // append employeeObject to DOM
// Get object values from array and append them to the DOM using 

function appendEmployee() {
  $('#employeeList').append(`
    <tr>
      <td>$('#firstName')</td>
      <td>$('#lastName')</td>
      <td>$('#employeeID')</td>
      <td>$('#title')</td>
      <td>$('#annualSalary')</td>
      <button class="">(delete button)</button>
    </tr> 
`);
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