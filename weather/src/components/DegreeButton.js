import React, { useState } from 'react'

const DegreeButton = ({degree}) => {
    

    return (
        <div className="toggleBtn">
            <label className="switch switch-flat">
                <input className="switch-input" type="checkbox" />
                <span className="switch-label" data-on="°C" data-off="°F"></span> 
                <span className="switch-handle"></span> 
            </label>
        </div>
    )
}

export default DegreeButton



