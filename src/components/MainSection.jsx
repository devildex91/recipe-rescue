import { useState } from "react";
import RecipeCard from "./RecipeCard";
import IngredientsList from "./IngredientsList";

export default function MainSection() {
  /*array in state for ingredients*/
  const [ingredients, setIngredients] = useState([]);
  /* boolean in state to control conditional rendering below*/
  const [render, setRender] = useState(false);
  /*function changes state to true*/
  function getRecipe() {
    if (ingredients.length < 5){
      alert("Please enter five ingredients to continue")
    } else{
    setRender(true);
  }}
  return (
    <main>
      {render ? (
        <RecipeCard
          ingredients={ingredients}
          getRecipe={getRecipe}
          render={render}
          setRender={setRender}
        />
      ) : (
        <IngredientsList
          getRecipe={getRecipe}
          ingredients={ingredients}
          setIngredients={setIngredients}
          render={render}
          setRender={setRender}
        />
      )}
    </main>
  );
}
