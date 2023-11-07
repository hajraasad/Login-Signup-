import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

const BlogDetail = () => {
    const { id } = useParams();
    const blogs = useSelector(state => state.blog.blogsData)
    const obj = blogs.find((item) => item.id.toString() === id);

    return (
        <div>
           <img src={obj.img} alt="image" ></img>
            <br/>
            <label>Description: {obj.description}</label>
            <br/>

            <Link to={'/blogs'}>Go Back</Link>
        </div>
    );
};

export default BlogDetail;
