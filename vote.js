// Get the form element from the HTML
const form = document.querySelector('form');

// Get the form inputs and button
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const dobInput = document.querySelector('#dob');
const citizenshipInput = document.querySelector('#citizenship');
const addressInput = document.querySelector('#address');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const genderInput = document.querySelector('input[name="gender"]:checked');
const partyInput = document.querySelector('#party');
const submitButton = document.querySelector('button');

// Add an event listener for when the form is submitted
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check that all fields are filled out
  if (
    firstNameInput.value === '' ||
    lastNameInput.value === '' ||
    dobInput.value === '' ||
    citizenshipInput.value === '' ||
    addressInput.value === '' ||
    emailInput.value === '' ||
    phoneInput.value === '' ||
    genderInput === null ||
    partyInput.value === ''
  ) {
    alert('Please fill out all fields before submitting the form.');
    return;
  }

  // Create a new voter object with the form data
  const voter = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    dob: dobInput.value,
    citizenship: citizenshipInput.value,
    address: addressInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    gender: genderInput.value,
    party: partyInput.value
  };

  // Save the voter data to local storage
  localStorage.setItem('voter', JSON.stringify(voter));

  // Redirect the user to the confirmation page
  window.location.href = 'confirmation.html';
});
