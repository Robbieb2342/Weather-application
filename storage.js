class Storage{
    constructor() {
        this.city 
        this.country 
        this.defaultCity = 'London'
        this.defaultState = 'UK'
    }

    getLocationData() {
        localStorage.getItem('city') === null
        ? (this.city = this.defaultCity)
        : (this.city = localStorage.getItem('city'))

        localStorage.getItem('state') === null
        ? (this.country = this.defaultState)
        : (this.country = localStorage.getItem('state'))

        return{
            city: this.city,
            country: this.country
        }
    }  

        setLocationData(city, country) {
            localStorage.setItem('city', city)
            localStorage.setItem('state', country)
        }
    
}