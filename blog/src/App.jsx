import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";
import {useState,useEffect} from "react"

const App = () => {

  //useState
  const [title,setTitle] = useState("Hello");

  const[lessons,setLessons] = useState([
    {title:"Into to React", author:"Joel", id:1,},
    {title:"Front end dev", author:"Joel", id:2,},
    {title:"Figma Tutorial", author:"Joel", id:3,},
    {title:"Flask", author:"Joe", id:4,},
    {title:"Industry Concepts", author:"Brad", id:5,},
  ]);

  const handleDelete = (id) => {
    const newLessons = lessons.filter((l) => l.id !== id)
    setLessons(newLessons)
  }

  useEffect(() => {
    console.log("refreshed")
  }, []);


  return (
    <div className="bg-timberwolf">
      <NavBar />
      <div className="content">
        <h1 className="text 5x1 font-heading">{title}</h1>

        <button onClick={() => setTitle("Bonjhour")}>Change Title</button>

        {
          lessons.map((l) => (
            <BlogPreview lesson={l} key={l.id} handleDelete={handleDelete}/>
          ))
        }


      </div>
    </div>
  );
} 

export default App;