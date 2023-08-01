// @ts nocheck
"use client";
import React, { useRef, useEffect } from "react";

export default function ThemeSound() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Get all the clickable elements using querySelectorAll
    const buttons = document.querySelectorAll("button");
    const links = document.querySelectorAll("a");

    // Attach click event listeners to each button and link
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });

      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  const playAudio = () => {
    // @ts-ignore
    audioRef?.current?.play();
  };

  const handleButtonClick = () => {
    playAudio();
  };

  const handleLinkClick = () => {
    playAudio();
  };

  return (
    <>
      <audio ref={audioRef} controls className="hidden" >
        <source
          src="https://testenv-virgo.messier.app/file/click.mp3"
          // type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
