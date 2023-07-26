"use client";
import React, { createContext } from "react";
import { useState } from "react";

const AppContext = createContext({
  menuOpened: false,
  toggleMenu: () => {},
});
const AppProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };
  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        menuOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
