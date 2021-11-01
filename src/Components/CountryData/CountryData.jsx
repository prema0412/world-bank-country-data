import React from 'react'
import './CountryData.scss'

const CountryData = (props) => {

    console.log(props);

    const { name, iso2Code, region, incomeLevel, lendingType, capitalCity, longitude, latitude } = props;


    return (
        <div className="countryData">
            <h2>Country : {name}</h2>
            <p>Iso Code : {iso2Code}</p>
            <p>Capital City : {capitalCity}</p>
            <p>Region : {region} </p>
            <p>Income Level: {incomeLevel}</p>
            <p>Lending Type: {lendingType}</p>
            <p>Longitude : {longitude}</p>
            <p>Latitude : {latitude}</p>
        </div>
    )
}

export default CountryData
