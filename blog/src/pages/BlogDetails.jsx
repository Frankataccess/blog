import { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch"

const BlogDetails = () => {

    const {id} = useParams();

    const {data, ispending, error} = useFetch("https://dummyjson.com/posts/" + id);

    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/");
    //     }, 5000);
    // })

    return ( 
        <>
        {data && (
            <>
            <h1 className="">{data.title}</h1>
            <p>{data.body}</p>
            </>
        )}
        </>
    );
}

export default BlogDetails
;