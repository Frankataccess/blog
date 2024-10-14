import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [posts, setPosts] = useState([]); // Initialize posts state
  const [isPending, setIsPending] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

useEffect(() => {
    const fetchData = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
        throw new Error("Could not fetch data");
        }
        const data = await res.json();
        setPosts(data.posts); // Assuming data has a `posts` property
        setIsPending(false);
    } catch (err) {
        setError(err.message); // Store the error message
        console.error(err);
        setIsPending(false);
    }
    };

    fetchData();
}, [url]);

  return { posts, isPending, error }; // Return the correct state variables
};

export default useFetch;