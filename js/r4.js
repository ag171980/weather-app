// http://api.weatherstack.com/
let weather = document.getElementById("search-weather")
let tabla = document.getElementById("table-weather")
document.getElementById("btn-search").addEventListener("click", () => {

    fetch("http://api.weatherstack.com/current?access_key=81a63c7a86b1c1d629bfb564ceb98227&query=" + weather.value + "")
        .then(response => response.json())
        .then(function (data) {
            let weather = {
                icon: data.current.weather_icons[0],
                temperature: data.current.temperature,
                humidity: data.current.humidity,
                state: data.current.weather_descriptions,
                location: {
                    country: data.location.country,
                    city: data.location.name,
                }
            }
            tabla.innerHTML = `
            <tr>
            <td>${weather.location.city}, ${weather.location.country}</td>
            <td>${weather.temperature}°C</td>
            <td><i class="fas fa-tint"></i> ${weather.humidity}</td>
            <td><img src="${weather.icon}" /></td>
            <td>${weather.state}</td>
            </tr>
            `;
        })
        .catch(function (error) {
            console.log(error)
        });

});

