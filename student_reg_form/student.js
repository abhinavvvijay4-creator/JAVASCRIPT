
const form = document.getElementById("registrationForm");

const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const mobileField = document.querySelector("#mobile");
const genderField = document.querySelector("#gender");
const courseField = document.querySelector("#course");

const successMessage = document.getElementById("successMessage");

// Name validation
function validateName() {
    if (nameField.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        return false;
    } else {
        document.getElementById("nameError").textContent = "";
        return true;
    }
}

// Email validation
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailField.value.trim())) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        return false;
    } else {
        document.getElementById("emailError").textContent = "";
        return true;
    }
}

// Mobile validation
function validateMobile() {
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobileField.value)) {
        document.getElementById("mobileError").textContent =
            "Mobile number must contain exactly 10 digits";
        return false;
    } else {
        document.getElementById("mobileError").textContent = "";
        return true;
    }
}

// Gender validation
function validateGender() {
    if (genderField.value === "") {
        document.getElementById("genderError").textContent =
            "Please select gender";
        return false;
    } else {
        document.getElementById("genderError").textContent = "";
        return true;
    }
}

// Course validation
function validateCourse() {
    if (courseField.value === "") {
        document.getElementById("courseError").textContent =
            "Please select a course";
        return false;
    } else {
        document.getElementById("courseError").textContent = "";
        return true;
    }
}

// Input event for name and email
nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);

// Change event for gender and course
genderField.addEventListener("change", validateGender);
courseField.addEventListener("change", validateCourse);

// Click event for register button
document.getElementById("submitBtn").addEventListener("click", function() {
    successMessage.textContent = "";
});

// Submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validMobile = validateMobile();
    const validGender = validateGender();
    const validCourse = validateCourse();

    if (validName && validEmail && validMobile &&
        validGender && validCourse) {

        successMessage.textContent = "Registration Successful!";
        successMessage.style.color = "green";

        form.reset();
    } else {
        successMessage.textContent = "";
    }
});

// Click event for clear button
document.getElementById("clearBtn").addEventListener("click", function() {
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    successMessage.textContent = "";
});
