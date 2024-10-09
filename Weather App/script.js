


// Get the elements dynamically
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const cityName = document.querySelector('#cityName');
const temperature = document.querySelector('#temperature');
const weatherType = document.querySelector("#weatherType");
const weatherImg = document.querySelector("#weatherImg");

// For the sunrise and sunset section
const sunriseTime = document.querySelector('#sunriseTime');
const sunsetTime = document.querySelector('#sunsetTime');

// For the weather conditions section
const humidity = document.querySelector('#humidity');
const visibility = document.querySelector('#visibility');
const windspeed = document.querySelector('#windspeed');

// For forecast elements
const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const temp3 = document.querySelector('#temp3');
const time1 = document.querySelector('#time1');
const time2 = document.querySelector('#time2');
const time3 = document.querySelector('#time3');
const dayForcastTime1 = document.querySelector('#dayForcastTime1');
const dayForcastTime2 = document.querySelector('#dayForcastTime2');
const dayForcastTime3 = document.querySelector('#dayForcastTime3');


// let apiId = import.meta.env.VITE_API_KEY;
// console.log( import.meta.env );
let apiId = "4d3b54b7a4ece628ad84a0428d8c9c2c";
// console.log("my apiId is :" , apiId);

async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
}

async function getForecast(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiId}&units=metric`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
}

// Function to format time from Unix timestamp
function formatTime(unixTime) {
  const date = new Date(unixTime * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${formattedMinutes} ${ampm}`;
}

// Function to format the sunrise/sunset time
function formatSunriseSunset(unixTime) {
  return formatTime(unixTime);
}

async function updateWeatherInfo(city) {
  try {
    const weatherData = await getWeather(city);
    cityName.innerText = weatherData.name;

    const tempCelsius = weatherData.main.temp.toFixed(2);
    temperature.innerText = `${tempCelsius}°C`;
    weatherType.innerText = weatherData.weather[0].main;

    const iconCode = weatherData.weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    sunriseTime.innerText = formatSunriseSunset(weatherData.sys.sunrise);
    sunsetTime.innerText = formatSunriseSunset(weatherData.sys.sunset);

    humidity.innerHTML = `<i class="ri-water-percent-line"></i> ${weatherData.main.humidity}%`;
    visibility.innerHTML = `<i class="ri-eye-2-line"></i> ${(weatherData.visibility / 1000).toFixed(2)} km`;
    windspeed.innerHTML = `<i class="ri-windy-line"></i> ${weatherData.wind.speed} m/s`;

    const forecastData = await getForecast(city);
    updateForecastInfo(forecastData);
  } catch (error) {
    console.error(error);
    alert('Error fetching weather data. Please try again.');
  }
}

function updateForecastInfo(forecastData) {
  // Clear previous forecast data
  temp1.innerHTML = '';
  temp2.innerHTML = '';
  temp3.innerHTML = '';
  time1.innerText = '';
  time2.innerText = '';
  time3.innerText = '';
  dayForcastTime1.src = '';
  dayForcastTime2.src = '';
  dayForcastTime3.src = '';

  // Get the first three forecast entries
  const forecasts = forecastData.list.slice(0, 3);

  // Update forecast information
  if (forecasts.length >= 3) {
    // Forecast 1
    time1.innerText = formatTime(forecasts[0].dt);
    temp1.innerHTML = `${forecasts[0].main.temp.toFixed(1)}&deg;C`;
    dayForcastTime1.src = `https://openweathermap.org/img/wn/${forecasts[0].weather[0].icon}.png`;

    // Forecast 2
    time2.innerText = formatTime(forecasts[1].dt);
    temp2.innerHTML = `${forecasts[1].main.temp.toFixed(1)}&deg;C`;
    dayForcastTime2.src = `https://openweathermap.org/img/wn/${forecasts[1].weather[0].icon}.png`;

    // Forecast 3
    time3.innerText = formatTime(forecasts[2].dt);
    temp3.innerHTML = `${forecasts[2].main.temp.toFixed(1)}&deg;C`;
    dayForcastTime3.src = `https://openweathermap.org/img/wn/${forecasts[2].weather[0].icon}.png`;
  }
}

// Event listeners for search functionality
searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    updateWeatherInfo(city);
  } else {
    alert('Please enter a city name');
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
