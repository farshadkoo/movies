import React, { createContext, useState } from "react";

export const HeroHeaderContext = createContext("/images/movies-slider-bg.jpg");

export default function HeroHeaderProvider({ children }) {
  const [backgrounImg, setBackgrounImg] = useState(
    "/images/movies-slider-bg.jpg"
  );

  return (
    <HeroHeaderContext.Provider value={[backgrounImg, setBackgrounImg]}>
      {children}
    </HeroHeaderContext.Provider>
  );
}
