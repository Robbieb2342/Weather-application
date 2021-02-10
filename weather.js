class Weather {
    constructor(city, country) {
        this.APIkey = '2c2d6c679681b5b38993366e1123d84f';
        this.city = city;
        this.country = country;

    }
// Fetch weather from API
    async getWeather() {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.APIkey}&units=metric`)

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    // Change location
    changeLocation(city, country){
        this.city = city
        this.country = country
    }
}