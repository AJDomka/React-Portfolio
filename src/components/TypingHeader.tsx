import React, { useState, useEffect } from "react";
import { Hero } from "./Hero";

const TypingHeader = () => {
  const [text, setText] = useState("");
  const word =
    "I  like to animate and build interactive and fun applications. ";
  const delay = 100;

  useEffect(() => {
    let currentCharacterIndex = 0;
    let timeoutId: number | undefined;

    const type = () => {
      setText((prevText) => prevText + word[currentCharacterIndex]);

      if (currentCharacterIndex < word.length - 1) {
        currentCharacterIndex++;
        timeoutId = setTimeout(type, delay);
      }
    };

    timeoutId = setTimeout(type, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <Hero className="col-10">{text}</Hero>;
};

export default TypingHeader;
