import logo from "../assets/images/recipe-rescue-logo.webp";

export default function Footer() {
  return (
    <footer>
      <div className="copyright">
        <img className="footerLogo" alt="recipe rescue logo" src={logo} />
        <p>Copyright 2026</p>
      </div>
    </footer>
  );
}
