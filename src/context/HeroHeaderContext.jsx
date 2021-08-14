import React, { createContext, useState } from "react";

export const HeroHeaderContext = createContext("./images/movies-bg.jpg");

export default function HeaderHeaderProvider({ children }) {
  const [backgroundImg, setBackgroundImg] = useState("./images/movies-bg.jpg");

  return (
    <HeroHeaderContext.Provider value={[backgroundImg, setBackgroundImg]}>
      {children}
    </HeroHeaderContext.Provider>
  );
}
