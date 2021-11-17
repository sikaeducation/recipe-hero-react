import React from 'react'

const StepIndicator = ({steps}) => {
    return (
        <ul className="recipe-step-indicator">
            {
                steps.map((step, index) => (
                    <li className={index === 0 ? "active" : ""} key={index}>{index}</li>
                ))
            }
        </ul>
    )
}

export default StepIndicator
