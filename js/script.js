const tripDistanceEl = document.getElementById("trip-distance");
const fuelEfficiencyEl = document.getElementById("fuel-efficiency");
const fuelCostEl = document.getElementById("fuel-cost");
const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (tripDistanceEl.value === "") {
    alert("Enter Trip Distance Details");
  } else {
    let result =
      (tripDistanceEl.value / fuelEfficiencyEl.value) * fuelCostEl.value;

    alert("Your Trip Distance is : Rs. " + result);
  }
});
