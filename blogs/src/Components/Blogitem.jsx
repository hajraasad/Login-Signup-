import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function BlogItem({ blog }) {
    return (
        <div>
            <label>ID: {blog.id}</label>
            <br/>
            <label>Category: {blog.category}</label>
            <br/>
            <label>Title: {blog.title}</label>
            <br/>
            <footer>
                <p>{blog.authorname}</p>
                <p>{blog.createdat}</p>
                <Link to={`/blogs/${blog.id}`}>Click</Link>
            </footer>
        </div>
    );
}

export default BlogItem;
