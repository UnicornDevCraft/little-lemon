// Import functions from index.js
import { updateSubmitButtonState, validateEmail } from './index.js';


// Form validation for subscribe 
document.addEventListener("DOMContentLoaded", () => {
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