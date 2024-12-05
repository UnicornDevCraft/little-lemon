// Changing active navtab onclick
document.addEventListener("DOMContentLoaded", () => {
  const linkTabs = document.querySelectorAll(".tab");
  linkTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      linkTabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
