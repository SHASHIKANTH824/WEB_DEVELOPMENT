const button = document.getElementById('get');


button.addEventListener('click', (event)=>{
    const location = document.getElementById('location').value;
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const forecast = document.getElementById('forecast');
    const place = document.getElementById('place');

    function updatetemp(data){
        place.innerHTML = `${location}`;
        temperature.innerHTML = `Today's temperature is ${data.current.temp_c}°c`
        description.innerHTML = `Today's weather is ${data.current.condition.text}`
        forecast.innerHTML = `Wind: ${data.current.wind_kph} km/h || Humidity: ${data.current.humidity}%`
    }
    
    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=064c197c8a914737885202251252703&q=${location}&aqi=yes`);
    prom
    .then(response=> response.json())
    .then(data=> updatetemp(data));

})

const button1 = document.getElementById('Refresh');

button1.addEventListener('click', (event)=>{
    place.innerHTML = "";
    temperature.innerHTML = ""
    description.innerHTML = ""
    forecast.innerHTML = ""
})

setInterval(updatetemp,1000);