// const btn = document.createElement ('button')
// btn.innerText = 'Locate'
// document.body.appendChild(btn)


async function displayweather () {
    try{
            
    
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`);
    
        const response = await fetch(apiUrl);
        const data = await response.json();
    }


    // } catch (error) {
    // console.log(error);
};


// const city = document.getElementById("city");
// const error = document.getElementById('error');

const form = document.getElementById("form")
form.addEventListener ("submit", (event) => {
    event.preventDefault();
    let city= document.getElementById("city")

    console.log(city.value)
});

function displayweather(weatherdata) {
    const high= weatherdata.hightemperature;
    const low = weatherdata.lowtemperature;
    const forecast = weatherdata.forecast;
    const humidity = weatherdata.humidity;


    const displayweather = {
        hightemperature: high,
        lowtemperature: low,
        forecast: forecast,
        humidity: humidity
    };

    return displayweather;
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
    

