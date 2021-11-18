import { useState } from 'react'
import CommandBar from './CommandBar'
import RecipeCard from './RecipeCard'
import RecipeStep from './RecipeStep'
import StepIndicator from './StepIndicator'

const Recipes = ({recipes}) => {
    const [stepSelected, setStepSelected] = useState(0);
    const onChangedStepSelected = (step) => {
        console.log(`setting step ${step}`)
        setStepSelected(step)
    }

    return (
        <ul>
            {
                recipes.map(recipe => (
                    <ul key={recipe.name}>
                    <RecipeCard recipe={recipe} />
                    <StepIndicator steps={recipe.steps} selected={stepSelected} onChangeStep={onChangedStepSelected}/>
                    <RecipeStep step={recipe.steps[stepSelected]} />
                    <CommandBar  />
                    </ul>
                ))
                
            }
        </ul>
    )
}

export default Recipes
