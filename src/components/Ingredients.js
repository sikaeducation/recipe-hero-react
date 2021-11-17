import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"

const Ingredients = ({ingredients}) => {
    
    return (

        <ul className="ingredients">
            {
                ingredients.map(ingredient => (
                    <li className="recipe-ingredient" key={ingredient}>
                        <span>{ingredient}</span>
                        <FontAwesomeIcon icon={faMinusCircle} className="icon" />
                    </li>
                ))
            }
        </ul>
    )
}

export default Ingredients
