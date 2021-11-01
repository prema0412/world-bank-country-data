
import React, { useState, useEffect } from 'react'

import SearchBox from './Components/SearchBox/SearchBox';
import CountryData from './Components/CountryData/CountryData';

const App = () => {

  const [searchTerm, setSearchTerm] = useState(null);

  const [countryData, setCountryData] = useState(null);
 
 
  const handleInput = ( (event) => {
  const cleanInput = event.target.value.toLowerCase();
   setSearchTerm(cleanInput)
 })

  useEffect ( () => {
    fetch(`http://api.worldbank.org/v2/country/${searchTerm}?format=json`)
    .then ( res => res.json() )
    .then ( data => setCountryData(data[1]) )
    .catch ( err => console.log(err) )

  }, [searchTerm]);


  return (
    <>
    <SearchBox label="Enter Country" searchTerm={searchTerm} handleInput={handleInput}/>
    { countryData && countryData.map(country => <CountryData name={country.name} iso2Code={country.iso2Code} 
    region={country.region.value} incomeLevel={country.incomeLevel.value} lendingType={country.lendingType.value}
    capitalCity={country.capitalCity} longitude={country.longitude} latitude={country.latitude}

    /> )} 

    </>
  )
}

export default App
