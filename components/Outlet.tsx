"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "@components/SplashScreen";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

function Outlet({ children }: { children: React.ReactNode }) {
  const [loader, setLoader] = useState(0);
  const isCompleted = loader === 100;
  useEffect(() => {
    setTimeout(() => {
      if (loader >= 100) return;
      setLoader(loader + 1);
    }, 20);
  }, [loader]);
  return (
    <div className="dark:bg-black bg-white">
      {isCompleted ? (
        <div className="relative">
          <NavBar />
          {children}
          <Footer />
        </div>
      ) : (
        <SplashScreen counter={loader} />
      )}
    </div>
  );
}

export default Outlet;
