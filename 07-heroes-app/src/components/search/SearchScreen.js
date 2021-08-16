import React from "react";
import { useLocation } from "react-router";
import { queryString } from "query-string";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange, reset] = useForm({
    busqueda: q,
  });
  const { busqueda } = values;

  const heroesFiltered = React.useMemo(
    () => getHeroesByName(busqueda),
    [busqueda]
  );

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`?q=${busqueda}`);
  };
  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>SearchForm</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="busqueda"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              onChange={handleInputChange}
              value={busqueda}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
