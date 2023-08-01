"use client";
import React, { createContext, useRef, useEffect } from "react";
import { useState } from "react";

const AppContext = createContext({
  menuOpened: false,
  mute: false,
  toggleMenu: () => {},
  toggleMuteButton: () => {},
  playClick: () => {},
});
const AppProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", audioRef.current.play());
    });
  });

  const playClick = () => {
    audioRef.current.play();
  };
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
    playClick();
  };
  const toggleMuteButton = () => {
    document.querySelectorAll("audio").forEach((aud) => {
      !mute ? aud.pause() : aud.play();
    });
    setMute((prev) => !prev);
  };
  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        menuOpened,
        mute,
        toggleMuteButton,
        playClick,
      }}
    >
      {children}
      <audio ref={audioRef} controls className="hidden">
        <source
          src="https://testenv-virgo.messier.app/file/click.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
