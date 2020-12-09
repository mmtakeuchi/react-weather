import React from 'react'

const ForecastCards = ({forecast}) => {
    if (forecast) {
        const week = forecast.map((data,i) => <p key={i}>{data.weather[0].description}</p>)
        // const week = props.map(data => data.name)
    
        return (
            <div>
                {week}
            </div>
        ) 
    }

    return (
        <div>
            Week Container
        </div>
    )
}

export default ForecastCards
