const apiKey = "123abc456def789ghi";
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

getWeatherBtn.addEventListener("click", () => {
  const cityName = cityInput.value;
  if (cityName === "") {
    alert("Please enter a city name");
    return;
  }
  fetchWeather(cityName);
});

function fetchWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
      } else {
        weatherResult.innerHTML = `<p>City not found</p>`;
      }
    })
    .catch((error) => {
      weatherResult.innerHTML = `<p>Error fetching data</p>`;
      console.log(error);
    });
}

function fetcherror(notfound) {
  const name = "city name";
  
}
