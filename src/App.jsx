
import React, { useState, useEffect } from 'react'

import SearchBox from './Components/SearchBox/SearchBox';
import CountryData from './Components/CountryData/CountryData';

import './App.scss'

const App = () => {

  const [searchTerm, setSearchTerm] = useState(null);

  const [countryData, setCountryData] = useState(null);
 
 
  const handleInput = ( (event) => {
  const cleanInput = event.target.value.toLowerCase();
   setSearchTerm(cleanInput)
 })

  useEffect ( () => {
    fetch(`https://api.worldbank.org/v2/country/${searchTerm}?format=json`)
    .then ( res => res.json() )
    .then ( data => setCountryData(data[1]) )
    .catch ( err => console.log(err) )

  }, [searchTerm]);


  return (
    <>
    <SearchBox label="Quick Country Search" searchTerm={searchTerm} placeHolder="iso2Code" handleInput={handleInput}/>
    <div className="main-container">
    { countryData && countryData.map(country => <CountryData name={country.name} iso2Code={country.iso2Code} 
    region={country.region.value} incomeLevel={country.incomeLevel.value} lendingType={country.lendingType.value}
    capitalCity={country.capitalCity} longitude={country.longitude} latitude={country.latitude}

    /> )} 
    </div>
    </>
  )
}

export default App
