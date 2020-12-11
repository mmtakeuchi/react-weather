import React from 'react'

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
            style={{ background: isOn && '#61dafb' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
            <span style={{marginLeft: "3px"}}>°F</span>
            <span className={`react-switch-button`} />
            <span style={{marginRight: "3px"}}>°C</span>
        </label>
        
        </div>
    )
}

export default DegreeButton



