import logo from "../assets/images/favicon.png";

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
