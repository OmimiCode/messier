"use client";
import React, { createContext } from "react";
import { useState } from "react";

const TransitionContext = createContext({
  completed: false,
  menuOpened: false,
  toggleMenu: () => {},
});

export const TransitionProvider = ({ children }) => {
  const [completed, setCompleted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleCompleted = (value) => {
    setCompleted(value);
  };
  const toggleMenu = () => {
   setMenuOpened((prev) => !prev);
  };
  return (
  
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
        toggleMenu,
        menuOpened,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
