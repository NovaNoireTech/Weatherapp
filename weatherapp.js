// const btn = document.createElement ('button')
// btn.innerText = 'Locate'
// document.body.appendChild(btn)


const API_key = '' // PLUG in YOUR API KEY HERE!!!!

async function displayweather(city_name) {



    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
    const data = await response.json();
    console.log(data); // THIS is the object we're getting as a response to our api call and will use to populate the page,
    // You're on the right track with the func on line 39 here but need to go through and make sure everything is plugged in!  
    //Once the data is matching we just need to get it rendered on the page!
    displayweather2(data);


    // } catch (error) {
    // console.log(error);
};


// const city = document.getElementById("city");
// const error = document.getElementById('error');

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let city = document.getElementById("city");
    displayweather(city.value);
    console.log(city.value)


    
});

function displayweather2(weatherdata) {
    const high = weatherdata.hightemperature;
    const low = weatherdata.lowtemperature;
    const forecast = weatherdata.forecast;
    const humidity = weatherdata.humidity;


    const displayweather = {
        hightemperature: high,
        lowtemperature: low,
        forecast: forecast,
        humidity: humidity
    };

    console.log(displayweather);
}






// const units = 'imperial'; //can be imperial or metric
// let temperatureSymobol = units == 'imperial' ? "°F" : "°C";
// async function fetchWeather() {
//     try {
//         weatherContainer.innerHTML = '';
//         error.innerHTML = '';
//         city.innerHTML = '';


//         const cnt = 10;
//         const cityInputtedByUser = document.getElementById('cityInput').value;

//         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`;

//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(27, data);

//         //Display error if user types invalid city or no city
//         if (data.cod == '400' || data.cod == '404') {

//     const description = document.createElement("div");
//     const convertedDateAndTime = convertToLocalTime(dt);

//     // '2023-11-07 07:00:00 PM'
//     description.innerHTML = `
//         <div class = "weather_description">${main.temp}${temperatureSymobol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
//     `;
//     return description;


