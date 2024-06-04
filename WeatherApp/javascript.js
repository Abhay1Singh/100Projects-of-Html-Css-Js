const apikey = "Use your own api key by making on openweather website and after it will take 2-3hrs to become active";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.getElementById("sinput");
const searchbtn = document.getElementById("btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "	https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4814/4814268.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "	https://cdn-icons-png.flaticon.com/512/16405/16405500.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163759.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "	https://cdn-icons-png.flaticon.com/512/16663/16663595.png";
        }

    }

    console.log(data);

}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})

