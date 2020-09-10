//Feature 1 - week 4 hmk
function displayCurrentTime(date) {
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    return `${hours}:${minutes} ${day}`;
  }
  let currentTime = document.querySelector("#display-time");
  currentTime.innerHTML = displayCurrentTime(new Date());

  
  //Bonus Feature - week 4 hmk
  function toFarenheit(event) {
    event.preventDefault();
    let temp = document.querySelector("#current-temperature");
    temp.innerHTML = 77;
  }
  function toCelsius(event) {
    event.preventDefault();
    let temp = document.querySelector("#current-temperature");
    temp.innerHTML = 25;
  }
  let toFarenheitLink = document.querySelector("#farenheit");
  let toCelsiusLink = document.querySelector("#celsius");
  toFarenheitLink.addEventListener("click", toFarenheit);
  toCelsiusLink.addEventListener("click", toCelsius);
  
  // Week 5 hmk
  
  function displayWeatherCondition(response) {
    console.log(response.data);
    document.querySelector("#current-city").innerHTML = response.data.name;
    document.querySelector("#current-temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#weather-description").innerHTML =
      response.data.weather[0].main;
  }
  function search(city) {
    let apiKey = "c16d274c557ab7684548fc5d2d23979b";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-city-input").value;
    search(city);
  }
  
  let searchBar = document.querySelector("#search-city-form");
  searchBar.addEventListener("submit", handleSubmit);
  
  search("New York");
  