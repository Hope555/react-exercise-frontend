import React, { useState } from 'react'
import { CountryProps } from '../types';
import CountryInfo from './CountryInfo';

const CountryList = ({countries}: {countries: CountryProps[]}) => {
  const [country, setCountry] = useState([] as CountryProps[]);
  
  const clickHandler = (country: CountryProps) => {
    setCountry([country]);
  }

  if (country.length === 1) {
    return (
      <CountryInfo countries={country}></CountryInfo>
    )
  } else {
    return (
      <ol>
        {countries.map(country => 
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => clickHandler(country)}>show</button>
          </li>
        )}
      </ol>
    )
  }
}

export default CountryList;