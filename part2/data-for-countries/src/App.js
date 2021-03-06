import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState('');
  const [weather, setWeather] = useState([]);

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }
  useEffect(hook, [])

  const handleSearchChange = e => setShowAll(e.target.value);
  const handleClickCountry = country => setShowAll(country);

  const countriesToShow = showAll === ''
    ? countries
    : countries.filter(country => country.name.toLowerCase().includes(showAll.toLowerCase()));
  
  return (
    <div>
      <Search handleChange={handleSearchChange} />
      <Countries countries={countriesToShow} handleClick={handleClickCountry} />
    </div>
  );
};

export default App;
