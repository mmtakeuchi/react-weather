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
            <span style={{marginLeft: "4px"}}>°C</span>
            <span className={`react-switch-button`} />
            <span style={{marginRight: "4px"}}>°F</span>
        </label>
        
        </div>
    )
}

export default DegreeButton



