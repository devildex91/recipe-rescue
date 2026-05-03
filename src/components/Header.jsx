import titlePic1 from "../assets/images/landing-page-1.webp";

export default function Header() {
  const screenWidth = window.innerWidth > 768;

  return (
    <div id="opening" className="shadow">
      <div id="textDiv">
        <h2>Welcome to Recipe Rescue</h2>
        <p>
          Our aim is to stop food waste one ingredient at a time. How you might
          ask? Well, you provide us with the ingredients (at least 5
          please-we're good but we can't work miracles!), and we provide the
          recipe. It really is that simple. So if you're ready to go lets stop
          the waste and start the taste.
        </p>
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
