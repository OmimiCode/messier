"use client";
import React from "react";
{
  /* @ts-ignore */
}
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      // hasBlendMode={true}
      innerStyle={{
        backgroundColor: "white",
        margin: "10px",
      }}
      outerStyle={{
        border: "1px solid white",
        padding: " 60px",
        // borderRadius: 0,
        // height: "6px",
        // mixBlendMode: "exclusion",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default Cursor;
