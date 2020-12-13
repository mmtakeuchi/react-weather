import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {

    return (
        <>
            <form onSubmit={props.getWeather} className="searchBar">
                <input type="text" placeholder="Search City" name="city" className="searchInput"/>
                <label><FontAwesomeIcon icon={faSearch} /></label>
            </form>
        </>
    )
}

export default Search;
