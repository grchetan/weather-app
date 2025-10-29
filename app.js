document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  console.log("City entered:", city);

  // Placeholder for future weather API fetch logic
  document.getElementById("city-name").textContent = `City: ${city}`;
});
