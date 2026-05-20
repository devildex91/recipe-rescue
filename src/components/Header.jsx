import titlePic1 from "../assets/images/header-pic.webp";

export default function Header() {
  return (
    <div id="opening" className="shadow">
      <div id="textDiv">
        <h1>Welcome to Recipe Rescue</h1>
        <h2>Lets stop food waste</h2> 
        <h3>with these simple steps:</h3>
        <ol id="instructions">
          <li>Enter a minimum of five ingredients in the form below</li>
          <li>Click on the Get recipe button.</li>
          <li>Pick a recipe from the six that appear.</li>
          <li>Click the recipe for full details</li>
        </ol>
      </div>
      <div id="headerImg">
        <img
          className="hidden headerPic"
          src={titlePic1}
          fetchPriority="high"
          alt="person stood frying"
        />
      </div>
    </div>
  );
}
