import React from 'react'
import CommandBar from './CommandBar'
import RecipeCard from './RecipeCard'
import RecipeStep from './RecipeStep'
import StepIndicator from './StepIndicator'

const Recipes = ({recipes}) => {
    return (
        <ul>
            {
                recipes.map(recipe => (
                    <ul key={recipe.name}>
                    <RecipeCard recipe={recipe} />
                    <StepIndicator steps={recipe.steps}/>
                    <RecipeStep step={recipe.steps[0]} />
                    <CommandBar />
                    </ul>
                ))
                
            }
        </ul>
    )
}

export default Recipes
