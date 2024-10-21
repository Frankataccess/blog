import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // Initialize posts state
  const [isPending, setIsPending] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
      fetch(url)
      .then((res) => {
        if(!res.ok){
          throw Error("could not fetch data")
        }
        return res.json();
      })
      .then((json) => {
        setData(json)
        setIsPending(false)
      })
      .catch((e) => {
        setIsPending(false)
        setError(e);
      })
  }, [url]);

  return { data, isPending, error }; // Return the correct state variables
};

export default useFetch;