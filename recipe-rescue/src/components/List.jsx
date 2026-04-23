

export default function List(){

    return (
        <section id = "listSection">
        <form>
            <label htmlFor="ingredients">Enter your ingredients here:</label>
           <input type = "text" id="ingredients"></input> 
           <button type = "submit">Recipe Incoming</button>
        </form>
        <ul id="ingredientsList">

        </ul>

        </section>
    )
}