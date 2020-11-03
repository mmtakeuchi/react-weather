import React, { useState } from 'react'

const Search = () => {

    const [location, setLocation] = useState("")

    const handleChange = (event) => {
        setLocation(event.target.value)
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Search City" value={location} onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </>
    )
}

export default Search;
