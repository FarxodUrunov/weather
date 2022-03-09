"use strict";

const city = document.querySelector("#w-location");
const country = document.querySelector("#w-country");
const desc = document.querySelector("#w-desc");
const temp = document.querySelector("#w-temp");
const maxTemp = document.querySelector("#w-max-temp");
const minTemp = document.querySelector("#w-min-temp");
const icon = document.querySelector("#w-icon");
const humidity = document.querySelector("#w-humidity");
const pressure = document.querySelector("#w-pressure");
const wind = document.querySelector("#w-wind");
const input = document.querySelector("#city");
const btn = document.querySelector("#w-change-btn");

const getCountry = async (shaxar) => {
   const location = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${shaxar}&appid=e7d561534c702bc01015395f23cb42ba&units=metric`
   );
   let j = await location.json();
   console.log(j);
   city.textContent = `City: ${j.name}`;
   country.textContent = `Cauntry: ${j.sys.country}`;
   desc.textContent = `weather Condition: ${j.weather[0].description}`;
   temp.textContent = `Temperature: ${j.main.temp}°C`;
   maxTemp.textContent = `Max Temp: ${j.main.temp_max}°C`;
   minTemp.textContent = `Min Temp: ${j.main.temp_min}°C`;
   humidity.textContent = `humidity: ${j.main.humidity}%`;
   pressure.textContent = `Air Pressure: ${j.main.pressure}°`;
   wind.textContent = `Wind Speed: ${j.wind.speed}km/h`;
   icon.src = `http://openweathermap.org/img/w/${j.weather[0].icon}.png`;
};

let an = async () => {
   let ahh = await fetch("https://api.db-ip.com/v2/free/self");
   let ff = await ahh.json();
   console.log(ff.stateProv);
   getCountry(ff.stateProv);
};
an();

btn.addEventListener("click", () => {
   let val = input.value;
   getCountry(val);
});
