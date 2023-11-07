import Blogitem from './Blogitem'
import React from "react";
function Bloglist(props) {
    return (
        <div>
            {props?.blogs?.map((blog) =>
                <Blogitem blog={blog} key={blog.id}/>
            )}
        </div>
    );
}

export default Bloglist;
