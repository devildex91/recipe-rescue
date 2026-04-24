import {useEffect,useState} from "react";

export default function SpoonRecipe(props){
    const API = import.meta.env.VITE_SPOON_API
    //state for recipe storage
const[recipes,setRecipes]= useState([])
   const ingredientList = props.ingredients.join(",");


   useEffect(() => {
       if(props.ingredients.length===0) return;

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=2?apiKey=${API}`)
    .then(response => response.json())
    .then(result => {
        if(Array.isArray(result)) {
            setRecipes(result);
        } else {
            console.error("API error or limit reached:", result);
            setRecipes([]);
        }
        
    })
     .catch(err => console.error("Fetch error:", err));
},[ingredientsList,API])

 const recommendedRecipes = recipes.map((recipe) => (
  <div key={recipe.id}>
    <h3>{recipe.title}</h3>
    <img src={recipe.image} alt={recipe.title} />
    <ul>
      <li>{recipe.missedIngredients.name}</li>{}
    </ul>
  </div>
));
return(
   <section id="recipeResult">
    <h2>We reccomend:</h2>
      {recommendedRecipes}
   </section>
)
}