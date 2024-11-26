// Form validation for contact and subscribe forms
document.addEventListener("DOMContentLoaded", () => {
  // Updates submit button state
  function updateSubmitButtonState(hasStatus, forButton) {
    const hasErrors = Object.values(hasStatus).some((status) => status !== 0);
    forButton.disabled = hasErrors;
    forButton.classList.toggle("disabled-button", hasErrors);
  }

  // Validates name inputs
  function validateName(name, type) {
    const namePattern = /^[A-Za-z-]+$/;
    let typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
    let error = "";

    if (name.length < 1) {
      error = `Please enter your ${type} name to continue.`;
    } else if (name.length < 2) {
      error = `${typeCapitalized} name must have at least 2 characters.`;
    } else if (name.length > 50) {
      error = `${typeCapitalized} name must be less than 50 characters long.`;
    } else if (!namePattern.test(name)) {
      error = `Only letters and hyphens are allowed in the ${type} name.`;
    } else {
      error = "Looks good!";
    }
    return error;
  }

  // Validates email
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = "";
    if (email.length < 1) {
      error = "An email address is required to continue.";
    } else if (!emailPattern.test(email)) {
      error = "Please enter a valid email address (e.g., user@example.com).";
    } else {
      error = "Looks good!";
    }
    return error;
  }
  // Declaring variables for contact form validation
  const form = document.querySelector("#contact-form");
  const submitButton = document.querySelector("#submit-form");
  let inputFields = form.querySelectorAll(".required-field");
  let formStatus = {
    firstName: 0,
    lastName: 0,
    email: 0,
  };

  // Form validation for contact us form
  inputFields.forEach((inputField) => {
    let feedback = inputField.parentElement.querySelector(".feedback");
    // Listen on focus and provide instructions to fill in the fields
    inputField.addEventListener("focus", () => {
      const fieldType = inputField.dataset.field;

      if (!inputField.value) {
        feedback.innerHTML = `Please enter your ${fieldType.replace("-", " ")}`;
        feedback.style.color = "white";
      }
    });
    // Validating fields and updating status
    inputField.addEventListener("input", () => {
      const value = inputField.value.trim();
      let status = "";
      if (inputField.id === "inputEmail") {
        status = validateEmail(value);
      } else {
        status = validateName(
          value,
          inputField.name === "fname" ? "first" : "last"
        );
      }
      // Setting status as the feedback message
      feedback.innerHTML = status;
      feedback.style.color = status === "Looks good!" ? "#58b09c" : "#f84e5f";
      formStatus[inputField.dataset.field] = status === "Looks good!" ? 0 : 1;

      // Updating submit button state
      updateSubmitButtonState(formStatus, submitButton);
    });
    // Cleaning feedback when out of focus
    inputField.addEventListener("blur", () => {
      if (formStatus[inputField.dataset.field] === 0) {
        feedback.innerHTML = "";
      }
    });
  });

  // Submit form with a spinner
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual submission for demo
    if (submitButton.disabled) return;

    // Show spinner and simulate submission
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...`;
    submitButton.disabled = true;

    // Simulate server processing
    setTimeout(() => {
      alert("Form submitted successfully!");
      submitButton.innerHTML = "Submit";
      submitButton.disabled = false;
    }, 2000);
  });

  // Declaring variables for subscribe form validation
  const subscribeForm = document.querySelector("#subscribe-form");
  const subscribeButton = document.querySelector("#subscribe-btn");
  let emailField = subscribeForm.querySelector("#subscribe");
  let subscribeStatus = { email: 0};
  let subscribeFeedback = document.querySelector("#subscribe-feedback");

    emailField.addEventListener("focus", () => {

      if (!emailField.value) {
        subscribeFeedback.innerHTML = "Please enter your email to subscribe";
        subscribeFeedback.style.color = "white";
      }
    });

    emailField.addEventListener("input", () => {
      const subscribeValue = emailField.value.trim();
      let status = validateEmail(subscribeValue);
      subscribeFeedback.innerHTML = status;
      subscribeFeedback.style.color = status === "Looks good!" ? "#58b09c" : "#f84e5f";
      subscribeStatus["email"] = status === "Looks good!" ? 0 : 1;

      // Update submit button state
      updateSubmitButtonState(subscribeStatus, subscribeButton);
    });

    emailField.addEventListener("blur", () => {
      if (subscribeStatus["email"] === 0) {
        subscribeFeedback.innerHTML = "";
      }
    });

  // Submit form with a spinner
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual submission for demo
    if (subscribeButton.disabled) return;

    // Show spinner and simulate submission
    subscribeButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;
    subscribeButton.disabled = true;

    // Simulate server processing
    setTimeout(() => {
      alert("You subscribed successfully!");
      subscribeButton.innerHTML = "Subscribe";
      subscribeButton.disabled = false;
    }, 1000);
  });

});
