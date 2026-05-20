import { useEffect, useState } from "react";
import ingredientPic from "../assets/images/ingredients-pic.png";
import { MdFoodBank } from "react-icons/md";
import ingredientsData from "../data/ingredientsData.json"
export default function IngredientsList({
  ingredients,
  setIngredients,
  getRecipe,
}) {
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [loading, setLoading] = useState(true);
useEffect(() => {
    const initialNames = ingredientsData.map(item => item.name);
        setIngredients([]);
        setLoading(false);
  }, []);

 function handleSubmit(event) {
  event.preventDefault();
  const newIngredient = selectedIngredient.trim();
  if (!newIngredient) {
    alert("please enter an ingredient to continue");
    return;
  }
  if (!ingredients.includes(newIngredient)) {
    setIngredients(prev => [...prev, newIngredient]);
    setSelectedIngredient("");
  } else {
    alert(`You have already entered ${newIngredient}`);
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
        <form onSubmit={handleSubmit} className="ingredientsForm">
          <label htmlFor="ingredient">Choose an ingredient: </label>
      <select 
        id="ingredient" 
        value={selectedIngredient} 
        onChange={(e) => setSelectedIngredient(e.target.value)}
      >
        <option value="">-- Select an Ingredient --</option>
        {ingredientsData.map((ingredient) => (
          <option key={ingredient.key} value={ingredient.name}>
            {ingredient.name}
          </option>
        ))}
      </select>
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
