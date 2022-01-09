import React from 'react'
import { CountryProps } from '../types';
import CountryInfo from './CountryInfo';
import CountryList from './CountryList';

const CountryContent = ({countries}: {countries: CountryProps[]}) => {
  if (countries.length === 1) {
    return (
      <CountryInfo countries={countries}></CountryInfo>
    );
  } else if (countries.length < 10) {
    return (
      <CountryList countries={countries}></CountryList>
    )
  } else {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }
};

export default CountryContent;