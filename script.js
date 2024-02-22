
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const apiKey = "bc5a8188e73dd7e82dd8250d48bf0b85";
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const searchBox = document.querySelector(".search-box input");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherReport = document.querySelector(".weather-report");

async function checkWeather(city_name) {
    const response = await fetch(apiUrl + city_name + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        weatherReport.style.display = "none";
    }
    else {
        var data = await response.json();
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        wind.innerHTML = Math.round(data.wind.speed) + " km/h";
        city.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        console.log(data)
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }
        weatherReport.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
