var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var dob = document.getElementById('dob');
var gender = document.getElementsByName('gender');
var course = document.getElementById('course');
var registerBtn = document.getElementById('submit-btn');
var firstNameValid = false;
var lastNameValid = false;
var passwordValid = false;
var confirmPasswordValid = false;
var dobValid = false;
var genderValid = false;

var form = document.getElementById('my-form');




registerBtn.addEventListener('click', function (e) {
    e.preventDefault();

    function styleForEmptyInput(field, message) {
        field.style.border = "1px solid red";
        field.placeholder = message;
    }

    function styleForFilledInput(field) {
        field.style.border = "none";
        field.placeholder = "";
    }

    // firstname
    if (firstName.value == "") {
        styleForEmptyInput(firstName, "This field cannot be empty");
    } else {
        styleForFilledInput(firstName);
        firstNameValid = true;
    }

    // lastname
    if (lastName.value == "") {
        styleForEmptyInput(lastName, "This field cannot be empty");
    } else {
        styleForFilledInput(lastName);
        lastNameValid = true;
    }

    //  password
    if (password.value.length < 6) {
        styleForEmptyInput(password, "Password is too short must be atleast 6 characters")
    } else {
        styleForFilledInput(password);
        passwordValid = true;
    }

    if (confirmPassword.value == "") {
        styleForEmptyInput(confirmPassword, "This field cannot be empty")
    } else {
        styleForFilledInput(confirmPassword);
    }

    if (password.value != confirmPassword.value) {
        document.querySelector('small').textContent = "Password did not match";
    } else {
        document.querySelector('small').textContent = "";
        confirmPasswordValid = true;
    }

    if (dob.value == "") {
        document.getElementsByTagName('small')[1].textContent = "This field cannot be empty";
    }
    else {
        document.getElementsByTagName('small')[1].textContent = "";
        dobValid = true;
    }

    var i = 0;
    while (!genderValid && i < gender.length) {
        if (gender[i].checked) {
            genderValid = true;
        }
        i++;
    }

    if (!genderValid) {
        document.getElementsByTagName('small')[2].textContent = "Must check some option!";
    } else {
        document.getElementsByTagName('small')[2].textContent = "";
    }


    if (firstNameValid && lastNameValid && passwordValid && confirmPasswordValid && dobValid && genderValid) {
        form.reset();
        firstNameValid = false;
        lastNameValid = false;
        passwordValid = false;
        confirmPasswordValid = false;
        dobValid = false;
        genderValid = false;
        alert("Student Registered Sucessfully!!!");
    }
})




