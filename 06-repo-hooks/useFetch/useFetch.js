import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {

  const isMounted = useRef(true);

  const [state, setState] = useState({ data: null, loading: true, eror: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setState({data:null , loading: true, error: null})
 
    fetch(url)
      .then(resp => { return resp.json() } )
      .then(data => {

        // setTimeout(() => {

          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data: data,
            });
          }
          
        // }, 4000);


       
      });
  }, [url]);

  return state;
};
