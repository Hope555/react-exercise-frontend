import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CountryProps, WeatherProps } from '../types';

const CountryInfo = ({countries}: {countries: CountryProps[]}) => {
  const api_key = process.env.REACT_APP_API_KEY;
  
  const [weather, setWeather] = useState({} as WeatherProps);
  
  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${countries[0].capital[0]}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data);
      })
  }, [api_key, countries]);
  
  return (
    <>
      <h2>{countries[0].name.common}</h2>
      <div>capital {countries[0].capital[0]}</div>
      <div>population {countries[0].population}</div>
      <h3>languages</h3>
      <ul>
        {Object.values(countries[0].languages).map(item => 
          <li key={item}>{item}</li>
        )}
      </ul>
      <img src={countries[0].flags.svg} alt="flag"></img>
      <h3>Weather in {countries[0].capital[0]}</h3>
      {'main' in weather
        ? <>
            <div>temperature: {weather.main.temp}</div>
            <div>wind: {weather.wind.speed}</div>
          </>
        : null
      }
    </>
  )
}

export default CountryInfo;