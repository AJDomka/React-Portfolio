import "./css/Hero.css";
import { HashLink as Link } from "react-router-hash-link";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>I like to animate and build interactive and fun applications.</h1>
          <h3>
            Hello, my name is Adam Domka and I have a passion for learning new
            languages, frameworks, and libraries to build apps with.
          </h3>
          <p>
            Scroll down or click a button below to learn more about me and what
            we can achieve together.
          </p>
        </div>
        <Link to="/#about-me" className="link-btn" role="button">
          About Me
        </Link>

        <Link to="/Skills#technical-info" className="link-btn" role="button">
          Technical Skills
        </Link>
        <Link to="/Skills#passion-info" className="link-btn" role="button">
          Passion Skills
        </Link>
        <Link to="/Skills#hobby-info" className="link-btn" role="button">
          Hobbies
        </Link>
      </section>
    </>
  );
}
