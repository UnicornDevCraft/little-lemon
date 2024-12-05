document.addEventListener("DOMContentLoaded", () => {
  // Added datepicker for the date field
  new AirDatepicker("#datepicker", {
    autoClose: true,
    dateFormat: "dd/MM/yyyy",
    selectedDates: [new Date()],
    minDate: new Date(),
    maxDate: new Date(2024, 11, 31),
    disableDates: [new Date(2024, 11, 25), new Date(2024, 11, 31)],
    isMobile: true,
  });
  // Added styling for the timeslots on click
  const timeSlots = document.querySelectorAll(".time-slot");
  timeSlots.forEach((slot) => {
    slot.addEventListener("click", () => {
      timeSlots.forEach((slot) => slot.classList.remove("btn-primary"));
      timeSlots.forEach((slot) => slot.classList.add("btn-secondary"));
      slot.classList.remove("btn-secondary");
      slot.classList.add("btn-primary");
    });
  });
});
