

// Importing Flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


flatpickr('#datePicker', {
    dateFormat: 'Y-m-d',
    altInput: true,
    altFormat: 'F j, Y',
    defaultDate: new Date(),
    minDate: 'today',
    maxDate: "2024-12-31",
    disable: ["2024-12-25", "2024-12-31"],
});