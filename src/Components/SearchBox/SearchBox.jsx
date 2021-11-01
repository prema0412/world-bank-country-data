import React from 'react'
import './SearchBox.scss'


const SearchBox = (props) => {

    const { label, searchTerm, handleInput } = props;

    return (
        <form className="search-box">
        <label htmlFor={label} className="searchBox__label">{label}</label>
        <input 
            type="text" 
            name={label}
            className="search-box__input"
            value={searchTerm}
            onInput={handleInput}
            />
    
        </form>
            
    )
}

export default SearchBox
