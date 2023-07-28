"use client";
import React, { createContext } from "react";
import { useState } from "react";

const AppContext = createContext({
  menuOpened: false,
  mute: false,
  toggleMenu: () => {},
  toggleMuteButton: () => {},
});
const AppProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mute, setMute] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };
  const toggleMuteButton = () => {
    setMute((prev) => !prev);
  };
  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        menuOpened,
        mute,
        toggleMuteButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
