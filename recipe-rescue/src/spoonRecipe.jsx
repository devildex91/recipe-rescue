import {useEffect} from "react";


export default function spoonRecipe(props){
    const API = import.meta.env.SPOON_API
    //state for recipe storage
const[recipes,setRecipes]= useState([])
   const ingredientList = props.ingredients.join(",")
useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients={ingredientList}&number=2&apiKey={API}`)
    .then(response => response.json())
    .then(result => {
        setRecipes(result)
    })
     .catch(err => console.error("Fetch error:", err));
})
 const recommendedRecipes = recipes.map((recipe) => (
  <div key={recipe.id}>
    <h3>{recipe.title}</h3>
    <img src={recipe.image} alt={recipe.title} />
    <ul>
      {/* Ingredients would go here */}
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