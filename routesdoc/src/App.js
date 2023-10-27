import logo from './logo.svg';
import './App.css';
import React from 'react'; // Make sure to import React
import { BrowserRouter as Router, Routes, Route, Link, useRoutes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import PostLists from "./PostLists";
import Posts from "./Posts";
import Post from "./Posts";
//import Post from "./Post"; // Fix the import for Post

function App() {
    const BlogPosts = {
        'first-blog-post': {
            title: 'First Blog Post',
            description: 'Lorem ipsum dolor sit amet, consectetur adip.'
        },
        'second-blog-post': {
            title: 'Second Blog Post',
            description: 'Hello React Router v6'
        }
    };

    // Rename the function to something other than "Routes"


    return (
        <div>
            <Router>
                <nav style={{ margin: 10 }}>
                    <Link to="/" style={{ padding: 5 }}>
                        Home
                    </Link>
                    <Link to="/posts" style={{ padding: 5 }}>
                        Posts
                    </Link>
                    <Link to="/about" style={{ padding: 5 }}>
                        About
                    </Link>
                </nav>

                {/* Use the AppRoutes component to define your routes */}
                <Routes p={BlogPosts}/>

            </Router>
        </div>
    );
}

export default App;
