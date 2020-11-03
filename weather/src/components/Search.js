import React, { useState } from 'react'

const Search = (props) => {
    return (
        <>
            <form onSubmit={props.getWeather}>
                <input type="text" placeholder="Search City" name="city" />
                <input type="submit" value="Search" />
            </form>
        </>
    )
}

export default Search;
