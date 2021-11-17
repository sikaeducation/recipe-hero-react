import "./App.css";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Header } from "./components/Header";
import Ingredients from "./components/Ingredients";
import Recipes from "./components/Recipes";

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [ingredientsList, setIngredientsList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(parsed => {
        console.log('parsed ', parsed);
        setError(false)
        const listOfIngredients = []
        parsed.recipes.forEach(recipe => {
          recipe.ingredients.forEach(ingredient => {
            if (listOfIngredients.indexOf(ingredient) == -1 ) {
              listOfIngredients.push(ingredient)
            }
          })
        })
        setRecipes(parsed.recipes)
        setIngredientsList(listOfIngredients)
        console.log('ingredients ', listOfIngredients);
        console.log('ingredients list 2', ingredientsList);
      }).catch(error => setError(true))

  }, [])  // only load recipes once at startup

  
  return (
  <div id="the-app">
    <Header heading="Recipe Hero" />
    <main>
      <section className="ingredient-search">
        <h2>Search Recipes By Ingredient</h2>
        <form className="ingredient-picker">
          <select placeholder="Add an ingredient">
            <option disabled="">Pick an ingredient</option>
          </select>
          <button>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </form>
        <Ingredients ingredients={ingredientsList} />
      </section>
      <Recipes recipes={recipes}/>
    </main>
  </div>
  )
}

export default App
