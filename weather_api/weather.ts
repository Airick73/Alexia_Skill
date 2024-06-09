class WeatherAPIClient
{
    // APIKEY : String;
    // url : String;
    response : string;

    
    constructor(city : string)
    {
        this.response = `The weather in ${city} is 78 degrees FAHRENHEIT`
        // this.APIKEY = "e4c72a1cd495a33561d784d9b2cc1b4e";
        // this.url = `http://api.openweathermap.org/data/2.5/weather?q=${city ?? 'Orlando'}&appid=${this.APIKEY}`;

    }
}

export const client = new WeatherAPIClient('Orlando')