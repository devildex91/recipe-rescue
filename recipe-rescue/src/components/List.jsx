import {useState} from "react";

export default function List({}){
  const [ingredients, setIngredients]= useState([])
 //function to take input and push to state array
    function handleSubmit(formData){

   const newIngredient = formData.get("ingredient")
   setIngredients(prevIngredients => [...prevIngredients,newIngredient])
 }
const ingredientItem = ingredients.map((ingredient)=> <li key={Math.floor(Math.random()*100)}>{ingredient}</li> ) 
 
    return (
        <section id = "listSection">
        <form action = {handleSubmit} className = "ingredientsForm">
            <label htmlFor="ingredient">Enter your ingredients here:</label>
           <input type = "text" id="ingredient" name = "ingredient"></input> 
           <button>Add ingredient</button>
        </form>
        <ul id="ingredientsList">
          {ingredientItem}
        </ul>

        </section>
    )
}