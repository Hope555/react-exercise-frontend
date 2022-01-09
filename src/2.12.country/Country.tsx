import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios';
import {CountryProps} from './types'
import CountryContent from './components/CountryContent';

const Country = () => {
  const [countries, setCountries] = useState([] as CountryProps[])
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFilter(event.target.value);
  };

  const countriesToShow = countries.filter((country: CountryProps)=> 
    country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  );
  
  return (
    <div>
      find countries
      <input value={newFilter} onChange={changeHandler}></input>
      <CountryContent countries={countriesToShow}></CountryContent>
    </div>
  );
}

export default Country;