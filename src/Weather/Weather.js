import { useEffect, useState } from 'react';
import './WeatherCard.css'; 

function WeatherCard() {
  const [search, setSearch] = useState("chennai");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7db7f4dc24f41ff2956b0ddce4ddf5da&units=metric`
      );
      let result = await response.json();
      setCity(result);
    };

    getWeatherData();
  }, [search]);

  return (
    <div className="weather-card">
       <div className='main'>


      <div className="search">
        <input
          type="search"
          placeholder="Enter city name"
          spellCheck="false"
          className='weather-search'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="weather">
        <h4 className="temp">{city?.name} {city?.main?.temp}°C</h4>
        <p className="humidity"><h4>Humidity  {city?.main?.humidity}%</h4></p>
        <p className="wind">Wind Speed  {city?.wind?.speed}  km/h</p>
      </div>


    </div>
    </div>
  );
}

export default WeatherCard;
