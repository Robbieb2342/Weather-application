const storage = new Storage()

// Get local stored data
const weatherLocation = storage.getLocationData()


// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);


// init UI

const ui = new UI()

// Get weather on Dom
document.addEventListener('DOMContentLoaded', getWeather);


// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const country = document.getElementById('state').value

    // Change location
    weather.changeLocation(city, country)
    
    // Set Location in local storage
    storage.setLocationData(city, country)

    // get and display weather
    getWeather()

    // close modal
    $('#locModal').modal('hide');
})


// Weather Location('Miami', 'FL')

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results)
    })
    .catch(err => console.log(err));
}