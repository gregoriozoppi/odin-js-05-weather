function getWeather() {
    console.log("Getting weather...");

    let requestString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cuvio?unitGroup=us&key=R8TCGAQQUKSUQGXP8C7AE2NC5&contentType=json`;

    fetch(requestString)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // get div weather-result and set its text content to the current temperature
            let weatherResultDiv = document.getElementById("weather-result");
            weatherResultDiv.textContent = ((response.currentConditions.temp - 32) / 1.8).toFixed(2) + "°C";
            console.log(response);
        })
        .catch(function (err) {
            console.log("Error:", err);
        })
}