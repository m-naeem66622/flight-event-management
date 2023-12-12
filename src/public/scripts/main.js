const departDate = document.getElementById("departDate");
const returnDate = document.getElementById("returnDate");
const roundTrip = document.getElementById("roundTrip");

roundTrip.addEventListener("change", function () {
  if (this.checked) {
    returnDate.style.display = "block";
  } else {
    returnDate.style.display = "none";
  }
});

// Add validation
departDate.addEventListener("blur", function () {
  // Validate depart date
});
returnDate.addEventListener("blur", function () {
  // Validate return date
});