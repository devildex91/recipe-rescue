import logo from "../assets/images/recipe-rescue-logo.webp";

export default function Navbar() {
  return (
    <nav>
      <img id="logo" fetchPriority="high" src={logo} />
    </nav>
  );
}
