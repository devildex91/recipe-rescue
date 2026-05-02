import { useEffect, useState } from "react";

export default function RecipeCard({setRender,render,getRecipe,ingredients,}) {
  const API = import.meta.env.VITE_SPOONACULAR_API;

  //state for recipe storage from first api call
  const [recipes, setRecipes] = useState([]);
  const ingredientList = ingredients.join(",");
  //state for storing link to source page for full recipe 
const [recipeLink, setRecipeLink] = useState([])

 /*use effect for api calls
 1.Gets recipes from list of ingredients and returns a list of recipes
 2. Uses the Id of those recipes to take you to source when recipeCard is clicked on*/
  useEffect(() => {
  if (ingredients.length === 0) return;

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=6&apiKey=${API}`
      );
      
      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      setRecipes(result);
    } catch (err) {
      console.error("Fetch error:", err);
      // Set error state here if needed
    }
  };

  fetchRecipes();
}, [ingredients, ingredientList, API]);

   //function that awaits the button click before getting sourceURL from the Id from recipes
 async function recipeDetail(recipeId){
    try{
      const response = await fetch(
         `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API}`,
      );
      const recipeUrl = await response.json();
       if(recipeUrl.sourceUrl) {
           window.open(recipeUrl.sourceUrl, "_blank", "noopener,noreferrer");
       }

    } catch (err) {
      console.error("Error fetching recipe details:", err);
 }}
  const recommendedRecipes = recipes.map((recipe) => (
    <button className="unbutton"key={recipe.id} onClick={() => recipeDetail(recipe.id)}>
    <div className="recipeCard shadow" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} />
      <span>(Click on me for full recipe)</span>
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


  return (
     <section id="recipeSection">
      <h2>We recommend:</h2><button id="backButton" onClick={goBack}>Back to ingredients</button>
     
    <section id="recipeResult">
      {recommendedRecipes}
       
    </section>
    
    </section>
  );
}
