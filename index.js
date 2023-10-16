const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

// Define the validateForm function
function validateForm() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Validate First Name
    if (firstNameValue === '') {
        setError(firstName, 'First Name cannot be empty');
    } else if (firstNameValue.length < 3) {
        setError(firstName, 'First Name should be at least 3 characters');
    } else {
        setSuccess(firstName);
    }

    // Validate Last Name
    if (lastNameValue === '') {
        setError(lastName, 'Last Name cannot be empty');
    } else if (lastNameValue.length < 3) {
        setError(lastName, 'Last Name should be at least 3 characters');
    } else {
        setSuccess(lastName);
    }

    // Validate Email
    if (emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    // Password validation can be added similarly.
        // Validate Password
        if (passwordValue === '') {
            setError(password, 'Password cannot be empty');
        } else if (passwordValue.length < 6) {
            setError(password, 'Password should be at least 6 characters long');
        } else {
            setSuccess(password);
        }

    // Your code for password validation here...
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form__control error';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control';
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
