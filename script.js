console.log('JS sauce');

$(document).ready(onReady);
console.log('jq ready');


function onReady(){
  console.log('jq onReady');
  $('#submitButton').on('click', onSubmit);
} // end onReady

// set up click listener
// log when button is responsive
function onSubmit(){
  // console.log('click');  
  let firstNameInput = $('#firstNameInput').val();
  let lastNameInput = $('#lastNameInput').val();
  let employeeIDInput = $('#employeeIDInput').val();
  let titleInput = $('#titleInput').val();
  let annualSalaryInput = $('#annualSalaryInput').val();
  console.log(firstNameInput);
  console.log(lastNameInput);
  console.log(employeeIDInput);
  console.log(titleInput);
  console.log(annualSalaryInput);


} // end onSubmit

































// let input = document.createElement('input');   ????