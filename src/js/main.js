// Getting all input fields
let inputFields = document.querySelectorAll('.required-field');
// Listen on focus and provide instructions
let formStatus = 0;
inputFields.forEach(inputField => {
    inputField.addEventListener("focus", () => {
        let text = '';
        switch (inputField.id) {
            case "inputFirstName":
                text = "Please enter your name";
                break;
            case "inputLastName":
                text = "Please enter your surname";
                break;
            case "inputEmail":
                text = "Please enter your email address";
                break;
        }
        inputField.nextElementSibling.innerHTML = text;
        inputField.nextElementSibling.style.color = "white";
    });
    inputField.addEventListener("input", () => {
        const value = inputField.value.trim();
        switch (inputField.id) {
            case "inputFirstName":
                let statusFname = validateName(value, "first");
                inputField.nextElementSibling.innerHTML = statusFname;
                if (statusFname != "Looks good!") {
                    formStatus = 1;
                }
                break;
            case "inputLastName":
                let statusLname = validateName(value, "last");
                inputField.nextElementSibling.innerHTML = statusLname;
                if (statusLname != "Looks good!") {
                    formStatus = 2;
                }
                break;
            case "inputEmail":
                let statusEmail = validateEmail(value);
                inputField.nextElementSibling.innerHTML = statusEmail;
                if (statusEmail != "Looks good!") {
                    formStatus = 3;
                }
                break;
        }
        if (inputField.nextElementSibling.innerHTML == "Looks good!") {
            inputField.nextElementSibling.style.color = "green";
        } else {
            inputField.nextElementSibling.style.color = "red";
        }
    });
    inputField.addEventListener("blur", () => {
        if (formStatus == 0) {
            inputField.nextElementSibling.innerHTML = '';
        }
    });
});


// Control for submit
document.querySelector('form').addEventListener('submit', (e) => {
    if (formStatus != 0) {
        e.preventDefault();
    }
    console.log(formStatus);
});

// Validate name inputs
function validateName(name, type) {
    let typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    let error = '';
    const namePattern = /^[A-Za-z-]+$/;
    let status = 0;
    if (name.length < 1) {
        error = `Please enter your ${type} name to continue.`;
        status = 1;
    } else if (name.length < 2) {
        error = `${typeCapitalized} name must be at least 2 characters long.`;
        status = 2;
    } else if  (name.length > 50) {
        error = `${typeCapitalized} name must be less than 50 characters long.`;
        status = 3;
    } else if (!namePattern.test(name)) {
        error = `Only letters and hyphens are allowed in the ${type} name.`;
        status = 4;
    };
    if (status == 0) {
        error = "Looks good!";
    }
    console.log(status);
    return error;
}
// Balidate email
function validateEmail(email) {
    let error = ''; 
    let status = 0;
    const domainPattern = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 1) {
        error = "An email address is required to continue.";
        status = 1;
    } else if (email.length < 5) {
        error = "Email must be at least 5 characters long.";
        status = 2;
    } else if (!email.includes('@')) {
        error = "Email addresses must contain an '@' symbol.";
        status = 3;
    } else if (!domainPattern.test(email)) {
        error = "Please include a domain after the '@' (e.g., example.com).";
        status = 4;
    } else if (!emailPattern.test(email)) {
        error = "Please enter a valid email address (e.g., user@example.com).";
        status = 5;
    };
    if (status == 0) {
        error = "Looks good!";
    }
    console.log(status);
    return error;
}