import titlePic1 from "../assets/images/landing-page-1.jpg"

export default function Header() {
const screenWidth = window.innerWidth > 768;

  return (
    <div id="opening" className="shadow">
      <div id="textDiv">
      <h2>Welcome to Recipe Rescue</h2>
      <p>
        Our aim is to stop food waste one ingredient it a time, How? you might
        ask. Well you provide us with the ingredients and we provide the recipe.
        It really is that simple so if your ready to go lets stop the waste and
        lets start the taste.
      </p>
      </div>
      <div id="headerImg">
       <img className = "hidden headerPic" src={titlePic1} alt = "brocoli in a frying pan"/>
      </div>
    </div>
  );
}
