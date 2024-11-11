import { createContext,useContext, } from "react";


const BlogReducer = (state, action) => {
    
    switch(action.type) {
        case "SET":
            return action.payload;

        case "CREATE":
            state.push(action.payload);

        case "DELETE":
            let filteredBlogs = state.filter((b) => b.id !=action.id)
            return filteredBlogs;

        default :
            return state;

    }
}

export const BlogContext = createContext();

const BlogProvider = ({children}) =>{
    const [blogs, dispatch] = useReducer(BlogReducer,null);

    return(
        <BlogContext.provider value = {{blogs, dispatch}}>
            {children}
        </BlogContext.provider>
    )

}

export default BlogProvider;

export const useBlogContext = () => {
    const context = useContext(BlogContext);

    if(!context){
        throw Error("UseBlogContext cannot be used once outside the BlogProvider Component")
    }

    return context;

}