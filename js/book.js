document.addEventListener("DOMContentLoaded", () => {
    new AirDatepicker('#datepicker', {
      autoClose: true,
      dateFormat: 'dd/MM/yyyy',
    selectedDates: [new Date()],
    minDate: new Date(),
    maxDate: new Date(2024, 11, 31),
    disableDates: [new Date(2024, 11, 25), new Date(2024, 11, 31)],
      isMobile: true,
    });
  });