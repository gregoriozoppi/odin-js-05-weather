let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cuvio?unitGroup=us&key=R8TCGAQQUKSUQGXP8C7AE2NC5&contentType=json`;

function showTemperature(temperature) {
    const now = new Date();
    let weatherResultDiv = document.getElementById("weather-result");
    weatherResultDiv.textContent = now.toLocaleString() + ' ' + ((temperature - 32) / 1.8).toFixed(2) + "°C";
}


function getWeatherFetch() {
    console.log("Getting weather using fetch...");

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // get div weather-result and set its text content to the current temperature
            showTemperature(response.currentConditions.temp);
            console.log(response);
        })
        .catch(function (err) {
            console.log("Error:", err);
        })
}

function getWeatherSync() {
    console.log("Getting weather using async/await...");

    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, false); // false for synchronous request
    httpRequest.send(null);

    if (httpRequest.status === 200) {
        let response = JSON.parse(httpRequest.responseText);
        showTemperature(response.currentConditions.temp);
        console.log(response);
    } else {
        console.log("Error: " + httpRequest.status);
    }
}

async function getWeatherAsync() {
    console.log("Getting weather using async/await...");

    let httpRequest = new XMLHttpRequest();
    await httpRequest.open("GET", url, true); // true for asynchronous request

    httpRequest.onload = function () {
        if (httpRequest.status === 200) {
            let response = JSON.parse(httpRequest.responseText);
            showTemperature(response.currentConditions.temp);
            console.log(response);
        } else {
            console.log("Error: " + httpRequest.status);
        }
    }
    httpRequest.send(null);
}