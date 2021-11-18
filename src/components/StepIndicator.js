import React from 'react'

const StepIndicator = ({steps, onChangeStep, selected}) => {
    return (
        <ul className="recipe-step-indicator">
            {
                steps.map((step, index) => (
                    <li className={index === selected ? "active" : ""} key={index} onClick={() => onChangeStep(index)}>{index+1}</li>
                ))
            }
        </ul>
    )
}

export default StepIndicator
