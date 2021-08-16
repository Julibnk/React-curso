import { heroes } from "../data/heroes";
export const getHeroById = (searchId) => {
  console.log(heroes);
  return heroes.find((hero) => {
    return hero.id === searchId;
  });
};
