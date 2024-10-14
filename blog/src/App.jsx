import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";
import useFetch from "./hooks/useFetch"; // Ensure you import your custom hook

const App = () => {
  const { posts, isPending, error } = useFetch("https://dummyjson.com/posts"); // Assuming useFetch returns { posts, isPending, error }

  return (
    <div className="bg-timberwolf">
      <NavBar />
      <div className="content">
        <h1 className="text-5xl font-heading">API Calls</h1>
        
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>} {/* Display the error message */}

        {posts.length > 0 && posts.map((p) => ( // Use descriptive name for post
          <BlogPreview lesson={p} key={p.id} /> // Correct variable name for the key
        ))}
      </div>
    </div>
  );
};

export default App;