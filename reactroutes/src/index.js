import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    loader as contactLoader,
} from "./routes/contact";
import  {
    action as editAction,
} from "./routes/edit";




import ErrorPage from "./Errorpage";
import Root from "./routes/Root";
import Contact from "./routes/contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import  {
    loader as rootLoader,
    action as rootAction,
} from "./routes/Root";
import EditContact from "./routes/edit";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        action: rootAction,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                loader: contactLoader,
                element: <Contact />,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
            },
        ],

    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
