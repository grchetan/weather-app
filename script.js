async function fetchWeatherData(city) {
  const apiKey = "711142b380433032536291927e0c68d2"; 
 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  console.log("Request URL:", apiUrl); 

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const text = await response.text();
      console.error("Fetch failed - status:", response.status, "body:", text);
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();

    document.getElementById("weather-result").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>🌤 Condition: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    console.error("Error fetching weather data:", err);
    document.getElementById(
      "weather-result"
    ).innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}

document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter a city name!");
  }
});
