import React from 'react'

const RecipeStep = ({step}) => {
    return (
        <div className="recipe-step">
              <p>
                Cut out center of each bread slice using a 2 1/2- to 3-inch heart, round,
                or other shaped cookie cutter. Set slices aside, reserving both bread and cutouts.
              </p>
              <img src={"/images/" + step.imageUrl} alt={"Step " + step.stepNumber} />
        </div>
    )
}

export default RecipeStep
