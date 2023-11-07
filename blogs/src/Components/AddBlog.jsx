import AddBlogs from "./AddBlogs";
import {data} from "./data";
import {useState} from "react";

const AddBlog=()=>
{

    const [blogs, setBlogs] = useState(data);


    return(
        <div>
            <AddBlogs data={data} setData={setBlogs} />
        </div>

    );
}

export default AddBlog;