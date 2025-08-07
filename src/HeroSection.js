export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <HeroHeader />
        <HeroIntro />
        <HeroButton />
      </div>
    </div>
  );
}

function HeroHeader() {
  return <h1 className="hero-header">Hey, I'm Sanjayakumar</h1>;
}
function HeroIntro() {
  return (
    <p className="hero-into">
      A Result-Oriented Web Developer building and managing Websites and Web
      Applications that leads to the success of the overall product
    </p>
  );
}
function HeroButton() {
  return (
    <a href="#project" className="blue-button">
      Projects
    </a>
  );
}
