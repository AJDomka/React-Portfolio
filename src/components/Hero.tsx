import { SetStateAction, useState } from "react";
import "./css/Hero-Light.css";
import { HashLink as Link } from "react-router-hash-link";
import ToggleSwitch from "./Toggle";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [hoveredWord, setHoveredWord] = useState("");

  const handleWordHover = (word: SetStateAction<string>) => {
    setHoveredWord(word);
  };

  const handleWordLeave = () => {
    setHoveredWord("");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleHoverEnter = () => {
    setIsHover(true);
  };

  const handleHoverLeave = () => {
    setIsHover(false);
  };

  const renderHighlightedText = () => {
    const words =
      "Hello, my name is Adam Domka. I have a passion for learning new languages, frameworks, and libraries to build apps with.".split(
        " "
      );
    return words.map((word, index) => (
      <span
        key={index}
        className={word === hoveredWord ? "highlighted-word" : ""}
        onMouseEnter={() => {
          handleWordHover(word);
        }}
        onMouseLeave={handleWordLeave}
      >
        {word}{" "}
      </span>
    ));
  };

  const renderHeaderText = () => {
    const words =
      "I like to animate and build interactive and fun applications.".split(
        " "
      );
    return words.map((word, index) => (
      <span key={index} className="header-color">
        {word}{" "}
      </span>
    ));
  };

  return (
    <>
      <section className="hero">
        <div className="col-10">
          <h1
            className={isHovered ? "zoom-in" : "zoom-out"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {renderHeaderText()}
          </h1>
          <h3>{renderHighlightedText()}</h3>
          <p
            className={isHover ? "move-up" : "move-down"}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
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
        <ToggleSwitch />
      </section>
    </>
  );
}
