let now = new Date();
let date= now.getDate();
let hours= now.getHours();
let  minutes= now.getMinutes();
let days= ["Sun", "Mon", "Tue", "Wed", "Thur", "Fry", "Sat"];
let day=days[now.getDay()];
let months= ["Jan", "Feb", "March", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let heather = document.querySelector("h1");
heather.innerHTML= `${day}, ${month} ${date}`;
let h4= document.querySelector(".hour");
h4.innerHTML= `${hours}:${minutes}`;
if (minutes <10) {
    munutes = `0${minutes}`;


}
if (hours<10) {
    hours= `0${hotrs}`;
}


let apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q={#city}&appid={apiKey}&units=metric`;