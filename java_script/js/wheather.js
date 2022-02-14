const API_KEY = "9002e32d8dd2131d0628c95fde9aaca6"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const log = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((date) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerHTML = `${date.weather[0].main} / ${date.main.temp_min
            }`
        city.innerHTML = date.name
    })
}

function onGeoError() {
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)