import {useRoutes} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import PostLists from "./PostLists";
import Post from "./Posts";
import About from "./About";
import NoMatch from "./NoMatch";
import React from "react";

function Routes(props) {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        {
            path: "/posts",
            element: <Posts p={props.p} />, // Use lowercase 'p'
            children: [
                { index: true, element: <PostLists p={props.p} /> }, // Use lowercase 'p'
                { path: ":slug", element: <Post p={props.p} />} // Use lowercase 'p'
            ],
        },
        { path: "/about", element: <About /> },
        { path: "*", element: <NoMatch /> }
    ]);
    return element;
}

export default Routes;