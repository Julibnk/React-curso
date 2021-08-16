import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelSreen = () => {
  return (
    <div>
      <h1>Marvel comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics"></HeroList>
    </div>
  );
};
