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
