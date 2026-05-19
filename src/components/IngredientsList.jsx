import { useEffect, useState } from "react";
import ingredientPic from "../assets/images/ingredients-pic.png";
import { MdFoodBank } from "react-icons/md";

export default function IngredientsList({
  ingredients,
  setIngredients,
  getRecipe,
}) {
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient === "") {
      alert("please enter an ingredient to continue");
    } else {
      if (newIngredient.length > 0) {
        if (!ingredients.includes(newIngredient)) {
          setIngredients((prevIngredients) => [
            ...prevIngredients,
            newIngredient,
          ]);
        } else {
          alert(`You have already entered ${newIngredient}`);
          return ingredients;
        }
      }
    }
  }
  /*Function to handle removing items from list*/
  function removeIngredient() {
    setIngredients((prevIngredients) => prevIngredients.slice(0, -1));
  }
  /*function to clear list*/
  function clearIngredient() {
    setIngredients([]);
  }
  /*Variable to render get recipe button onto page after 5 ingredients added to list*/
  const buttonRender =
    ingredients.length >= 1 ? (
      /*button calls getRecipe to change state and render recipe to page*/
      <button id="getRecipe" onClick={getRecipe}>
        Get recipe
      </button>
    ) : null;
  const ingredientItem = ingredients.map((ingredient, index) => (
    <li key={index}>
      <MdFoodBank /> {ingredient}
    </li>
  ));
  /*variable containing JSX for Ingredients list*/
  const listRender = (
    <section id="listSection" className="shadow">
      <div id="listPic">
        <img
          className="hidden ingredientPic"
          fetchPriority="high"
          src={ingredientPic}
          alt="someone frying some ingredients"
        />
      </div>
      <div id="formDiv">
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
      </div>
      <ul id="ingredientsList">
        {ingredientItem}
        {buttonRender}
      </ul>
    </section>
  );
  return <>{listRender}</>;
}
