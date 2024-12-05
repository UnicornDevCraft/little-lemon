// Import functions from index.js
import { updateSubmitButtonState, validateEmail } from "./index.js";

// Form validation for subscribe
document.addEventListener("DOMContentLoaded", () => {
  // Declaring variables for subscribe form validation
  const subscribeForm = document.querySelector("#subscribe-form");
  const subscribeButton = document.querySelector("#subscribe-btn");
  let emailField = subscribeForm.querySelector("#subscribe");
  let subscribeStatus = { email: 0 };
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
    subscribeFeedback.style.color =
      status === "Looks good!" ? "#58b09c" : "#f84e5f";
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
    event.preventDefault();
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

  // Adding style to the section of the webpage when clicked
  const sectionPages = document.querySelectorAll(".section");

  sectionPages.forEach((section) => {
    section.addEventListener("click", () => {
      sectionPages.forEach((section) =>
        section.classList.remove("on-tab", "text-uppercase")
      );
      section.classList.add("on-tab", "text-uppercase");
    });
  });

  // Adding tyle when scrolled to the section
  const sections = document.querySelectorAll("section");
  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          sectionPages.forEach((section) =>
            section.classList.remove("on-tab", "text-uppercase")
          );
          const activeTab = document.querySelector(
            `.nav-link[href="index.html#${sectionId}"]`
          );
          if (activeTab) {
            activeTab.classList.add("on-tab", "text-uppercase");
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe each section
  sections.forEach((section) => observer.observe(section));

  // Adding styling to an active tab in the navbar
  const onPage = document.querySelector(".on-page");
  if (onPage) {
    onPage.classList.add("on-tab", "text-uppercase");
  }

  // Adding offcanvas closing
  const navLinks = document.querySelectorAll(".offcanvas .nav-link"); // All links inside offcanvas menus
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const offcanvasMenu = bootstrap.Offcanvas.getInstance(
        link.closest(".offcanvas")
      );
      if (offcanvasMenu) offcanvasMenu.hide();
    });
  });

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
