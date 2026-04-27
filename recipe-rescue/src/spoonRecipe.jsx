import { useEffect, useState } from "react";

export default function SpoonRecipe(props) {
  const API = import.meta.env.VITE_SPOONACULAR_API;

  //state for recipe storage
  const [recipes, setRecipes] = useState([]);
  const ingredientList = props.ingredients.join(",");
  //state for storing full recipe
const [fullRecipe, setFullRecipe] = useState([])
//
 function recipeDetail(recipeId){
   useEffect(() => {


    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=6&apiKey=${API}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setRecipes(result);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [ingredientList, API]);
  

  
  console.log(recipeId)


 }

  useEffect(() => {
    if (props.ingredients.length === 0) return;

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=6&apiKey=${API}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setRecipes(result);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [ingredientList, API]);

  

  const recommendedRecipes = recipes.map((recipe) => (
    <button className="unbutton"key={recipe.id} onClick={() => recipeDetail(recipe.id)}>
    <div className="recipeCard shadow" key={recipe.id}>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <div className="ingredients missing">
          <h4>missing ingredients</h4>
          <ul>
            {recipe.missedIngredients.map((ingredients) => (
              <li key={ingredients.id}>{ingredients.name}</li>
            ))}
          </ul>
        </div>
    </div>
    </button>
  ));
  return (

    <section id="recipeResult">
      {recommendedRecipes}
    </section>
  );
}
