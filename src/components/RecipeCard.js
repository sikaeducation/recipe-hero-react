import React from 'react'

const RecipeCard = ({recipe}) => {
    return (
        <li key={recipe.name}>
            <div className="recipe-card">
                <h2>{recipe.name}</h2>
                <div className="recipe-description">
                    <img src={"images/" + recipe.imageUrl} alt={recipe.name} />
                    <p>{recipe.description}</p>
                </div>
            </div>
        </li>
    )
}

export default RecipeCard
