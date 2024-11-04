//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input");
const alertMessage = document.getElementById("alert");
const cardContainer = document.getElementById("card-container");

//! Variables

const apiKey = "d9742631ab44926faeb8d55a66b17a05";
let url; // API istegi icin kullanacagiz
let cities = []; // sergilenen tüm sehirlerin listesi
let lang = "EN";

//? Location find

const locate = document.getElementById("locate");
const userLocationDiv = document.getElementById("userLocation");
let userLocation = false;

//? Language

const langButton = document.querySelector(".language");

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const city = input.value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;

    console.log(url);
    getWeatherData();
  }

  form.reset(); // formu sifirlar
});

// Location

locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    // console.log(coords);

    const { latitude, longitude } = coords;

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=${lang}`;
    userLocation = true;
    getWeatherData();
  });
});

// Language

langButton.addEventListener("click", (e) => {
  // console.log(e.target.textContent);

  if (e.target.textContent == "DE") {
    input.setAttribute("placholder", "Suche nach einer Stadt");
    lang = "DE";
  } else if (e.target.textContent == "EN") {
    input.setAttribute("placeholder", "Search for a city");
    lang = "EN";
  }
});

// Functions


