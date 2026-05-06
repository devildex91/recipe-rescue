import logo from "../assets/images/recipe-rescue-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img id="logo" alt="recipe rescue logo" fetchPriority="high" src={logo} />
    </nav>
  );
}
