let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let heather = document.querySelector("h1");
heather.innerHTML = `${day}, ${month} ${date}`;
let h4 = document.querySelector(".hour");
h4.innerHTML = `${hours}:${minutes}`;
if (minutes < 10) {
  munutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
function showWeather(response) {
  

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement=document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  iconElement.setAttribute("src",` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   
  
}

let apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";
let city = "Atlanta";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showWeather);
