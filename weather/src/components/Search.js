import React, { useState } from 'react'

const Search = (props) => {
    const [location, setLocation] = useState("")

    const handleChange = (event) => {
        setLocation(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.getWeather(location)

        setLocation("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search City" value={location} onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </>
    )
}

export default Search;
