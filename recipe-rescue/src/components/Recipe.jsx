import { useState } from "react";
import SpoonRecipe from "../SpoonRecipe";
export default function Recipe(props) {
  //array in state for ingredients
  const [ingredients, setIngredients] = useState([]);

  // boolean in state to control conditional rendering below
  const [render, setRender] = useState(false);

  //function to take input and push to state array
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.length > 0) {
      if (!ingredients.includes(newIngredient)) {
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          newIngredient,
        ]);
      } else {
        return ingredients;
      }
    }
  }
  //Function to handle removing items from list
  function removeIngredient() {
    setIngredients((prevIngredients) => prevIngredients.slice(0, -1));
  }
  //function to clear list
  function clearIngredient() {
    setIngredients([]);
  }
  //Variable to render get recipe button onto page after 5 ingredients added to list
  const buttonRender =
    ingredients.length >= 5 ? (
      //button calls getRecipe to change state and render recipe to page
      <button id="getRecipe" onClick={getRecipe}>
        Get recipe
      </button>
    ) : null;
  //function changes state to true
  function getRecipe() {
    setRender(true);
  }

  const ingredientItem = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  //variable to conditionally render button to page if list has items within it
  const listRender = (
    <section id="listSection" className="shadow">
      <form action={handleSubmit} className="ingredientsForm">
        <label htmlFor="ingredient">Enter your ingredients here:</label>
        <input
          type="text"
          id="ingredient"
          name="ingredient"
          aria-label="Add ingredient"
        ></input>
        <button type="submit">Add ingredient</button>
        <button type="button" onClick={removeIngredient}>
          Remove ingredient
        </button>
        <button type="button" onClick={clearIngredient}>
          Clear ingredient
        </button>
      </form>
      <ul id="ingredientsList">
        {ingredientItem}
        {buttonRender}
      </ul>
    </section>
  );

  const recipeRender = (
    <section id="recipeSection">
      <h2>We reccomend:</h2>
      <SpoonRecipe
        ingredients={ingredients}
        getRecipe={getRecipe}
        render={render}
      />
    </section>
  );
  //ternary to control which component to render to the page
  const renderControl = render ? recipeRender : listRender;

  return renderControl;
}
