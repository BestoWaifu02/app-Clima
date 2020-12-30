//Importamos la clase weather de weather.JS
const { Weather } = require("./weather");
const { UI } = require("./UI");
const { Store } = require("./store");

//Instanciamos la UI para mandarle los datos de la API
const ui = new UI();

//Instanciamos el Objeto
const store = new Store();
//Pasamos los datos de localStorage
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

require("./style.css");

async function fetchWeather() {
  const data = await weather.getWather();

  console.log(data);
  //Pasamos DATA al obj
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;

  //Ahora mandamos los datos obtenidos para weather.js
  console.log(city, countryCode);
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
