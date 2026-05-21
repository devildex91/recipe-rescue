import { useEffect, useState } from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import placeholderImage from "../assets/images/placeholder-image.png";
export default function RecipeCard({
  setRender,
  render,
  getRecipe,
  ingredients,
}) {
  const API = import.meta.env.VITE_SPOONACULAR_API;
  /*state for recipe storage from first api call*/

  const [recipes, setRecipes] = useState([]);
  /* useState for full recipe details*/ 
  const [fullRecipe, setFullRecipe] = useState(null);
  const [secondRender, setSecondRender] = useState(false)
  const ingredientList = ingredients.join(",");


  const placeholderAlt =
    "Image of a burger with apology that image will not load at current time";
  /*use effect for api calls*/
  useEffect(() => {
    if (ingredients.length === 0) return;

    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=6&apiKey=${API}`,
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        setRecipes(result);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchRecipes();
  }, [ingredients, ingredientList, API]);

  /*function that awaits the button click before getting full recipe detailsfrom the Id */
  async function recipeDetail(recipeId) {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API}`,
      );
         if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        setFullRecipe(result);
        setSecondRender(true);
      } catch (err) {
        console.error("Fetch error:", err);
      }
  };
  
  const recommendedRecipes = recipes.map((recipe) => (
    <button
      className="unbutton"
      key={recipe.id}
      onClick={() => recipeDetail(recipe.id)}
    >
      <div className="recipeCard shadow" key={recipe.id}>
        <img
          src={recipe.image || placeholderImage}
          alt={recipe.title || placeholderAlt}
        />
        <span>(Click on me for full recipe)</span>
        <h3>
          <MdOutlineFoodBank /> {recipe.title}
        </h3>

        <div className="missingIngredients">
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

  const renderFullRecipe = fullRecipe ? (
    <div id = "fullRecipe" key ={fullRecipe.id}>
      
      <img src = {fullRecipe.image || placeholderImage}
       alt = {fullRecipe.title || placeholderAlt}
       />
       <div id = "textContent">
       <h3>{fullRecipe.title}</h3>
       <p>Ready in : {fullRecipe.readyInMinutes} Cooking time:{fullRecipe.cookingMinutes}</p>
       <h4>Ingredients list</h4>
       <ul>
        {fullRecipe.extendedIngredients.map((ing)=>(
          <li key ={ing.id}><span> {ing.measures.metric.amount } {ing.measures.metric.unitLong} </span> {ing.name}</li>
        ))}
       </ul>
       <h4>Instructions</h4>
       <ol>
        {fullRecipe.analyzedInstructions[0].steps ? fullRecipe.analyzedInstructions[0].steps.map((step)=>(
          <li key = {step.number}>{step.step}</li>
        )) : <p>No Instructions avaliable.</p>}
       </ol>
       <button id="backToCards" onClick={() => setSecondRender(false)}>
        Back to recommendations
      </button>
      </div>
       </div>
 ):(
  <div id = "fullRecipe">
  <h1>We are very sorry</h1>
  <p>This recipe cant be found right now please try another recipe</p>
  <button id="backToCards" onClick={() => setSecondRender(false)}></button>
  </div>
 );
const reccomendedCards = <section id="recipeSection">
      
      <div id="sectionHead">
        <h2>Hungry yet?</h2>
        <button id="backButton" onClick={goBack}>
          Back to ingredients
        </button>
      </div>
      <section id="recipeResult">{recommendedRecipes}</section>
      </section>
 
  /* function to go back to ingredient list*/
  function goBack() {
    setRender(false);
  }
    
  return (
    secondRender ? (renderFullRecipe ):(reccomendedCards)
    
  );
}
