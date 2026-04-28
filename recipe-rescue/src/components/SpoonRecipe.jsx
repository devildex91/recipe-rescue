import { useEffect, useState } from "react";

export default function SpoonRecipe({setRender,render,getRecipe,ingredients,re}) {
  const API = import.meta.env.VITE_SPOONACULAR_API;

  //state for recipe storage from first api call
  const [recipes, setRecipes] = useState([]);
  const ingredientList = ingredients.join(",");
  //state for storing full recipe upon second api request
const [fullRecipe, setFullRecipe] = useState([])
//function to fetch new api request to get full recipe details
 
  useEffect(() => {
    if (ingredients.length === 0) return;

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
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
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

  function goBack(){
    setRender(false)
  }
// second api call to fetch full recipe details
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
 }


  return (
     <section id="recipeSection">
      <h2>We reccomend:</h2>
    <section id="recipeResult">
      {recommendedRecipes}
       
    </section>
    <button onClick={goBack}>Back to ingredients</button>
    </section>
  );
}
