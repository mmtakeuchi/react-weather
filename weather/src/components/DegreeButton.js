import React, { useState } from 'react'

const DegreeButton = ({ isOn, handleToggle }) => {

    return (
        <div className="toggleBtn">
            <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
            style={{ background: isOn && '#06D6A0' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
            <span className={`react-switch-button`} />
        </label>
        </div>
    )
}

export default DegreeButton



