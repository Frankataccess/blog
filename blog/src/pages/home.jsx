import useFetch from "./hooks/useFetch"
import BlogPreview from "./components/BlogPreview";

const Home = () => {

    const{data, isPending, error} = useFetch("https://dummyjson.com/posts");


    return (
        <div className="content">
            <h1 className="text-5xl font-heading">API Calls</h1>
            
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>} {/* Display the error message */}

            {data && data.posts.map((p) => ( // Use descriptive name for post
            <BlogPreview lesson={p} key={p.id} /> // Correct variable name for the key
            ))}
        </div>
    );
}

export default Home;