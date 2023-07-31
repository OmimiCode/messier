"use client";
import { AppContext } from "@context/AppContext";
import React, { useContext, useEffect, useRef } from "react";

export default function ThemeSound() {
  // const videoRef = useRef(null);
  // const { mute } = useContext(AppContext);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     // @ts-ignore
  //     videoRef.current.src =
  //       "https://www.youtube.com/embed/nogybXeoqrw?si=tF7dYhtJMPFeIkwW&start=10";
  //   }
  //   return () => {
  //     if (videoRef.current) {
  //       // @ts-ignore
  //       videoRef.current.src = "";
  //     }
  //   };
  // }, [mute]);

  return (
    <iframe
      // ref={videoRef}
      width="560"
      height="315"
      src="https://www.youtube.com/embed/nogybXeoqrw?si=tF7dYhtJMPFeIkwW&start=10"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="hidden"
    ></iframe>
  );
}
