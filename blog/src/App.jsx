import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";
import useFetch from "./hooks/useFetch"; // Ensure you import your custom hook
import Home from "./home";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/about";


const App = () => {
  // const { data, isPending, error } = useFetch("https://dummyjson.com/posts");

  return (
      <BrowserRouter>
        <div className="bg-timberwolf">
          <NavBar />
          <Routes>
            {/* Home route */}
            <Route exact path="/" element={<Home data={blogs} isPending={isPending} isError={isError} />}/>
            {/*About route */}
            <Route exact path="/about" element = {<About />} />
            {/*Blog details */}
            <Route exact path="blog/:id" element={<BlogDetails/>}/>
            {/* Error catcher*/}
            <Route path="*" element = {<h1>Error page not found</h1>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;