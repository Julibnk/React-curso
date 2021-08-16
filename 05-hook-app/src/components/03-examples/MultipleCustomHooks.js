import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const url = `https://breakingbadapi.com/api/quotes/${ counter }`;
  const { loading, data } =  useFetch(url);
 
  const { author, quote } = !!data && data[0]

  console.log(author);

  console.log(quote);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      {
        loading 
        ?
          (
          <div className="alert alert-info text-center">
            Loading....
          </div>
          ) 
        :
          (
          <blockquote className="blockquote">
            <p className="mb-0"> { quote }</p>
            <footer className="blockquote-footer"> { author } </footer>
          </blockquote>
          )
      }

      <button className="btn btn-primary" onClick={ increment }>Siguiente quote</button>
      
    </div>
  );
};
