function formatDate(timestamp) {
 let now= new Date(timestamp);



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
return`${day}, ${month} ${now.getDate()`};
}   

function formatHours(timestamp) {
  let now = new Date(timestamp);
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`
}
let timestamp = new Date();
let heather = document.querySelector("h1");
heather.innerHTML = `${formatDate(timestamp)}`;
let h4 = document.querySelector(".hour");
h4.innerHTML = `${formatHours(timestamp)}`;
  


function showWeather(response) {

  
 
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement=document.querySelector("#icon");
  
  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  iconElement.setAttribute("src",` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}  

function showForecast(response) {
  let forecastElement=document.querySelector("#forecast");
  forecastElement.innerHTML=null;
  forecast=null;
  
  for (let index=0; index<6; index ++){

  forecast = response.data.list[index];
  forecastElement.innerHTML += `
  
  
    <div class ="col-2">
        <h5 class="next-day">
          ${formatHours(forecast.dt*1000)}
        </h5>
          <img src=" http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"  id = "weather-icon" />
        <div  class="forecast-temp">     
          <strong>${Math.round(forecast.main.temp_max)}°</strong>${Math.round(forecast.main.temp_min)}°
          <div class="forecast-units">
            <a href="#"id="celsius-link">C</a> |
            <a href="#" id="fahrenheit-link">F</a>
          </div>
        </div>      
    </div>
  `;
 }
  
} 

  
  
function search(city){
let apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);

apiUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showForecast);  
}


function handleSubmit(event) {
event.preventDefault();
let cityInputElement=document.querySelector("#city-input");
search(cityInputElement.value);

}
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement= document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  

}
let celsiusTemperature = null;

let form= document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink= document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Atlanta");
