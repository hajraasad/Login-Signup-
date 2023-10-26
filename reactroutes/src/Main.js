import Root, { loader as rootLoader } from "./routes/Root";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import ErrorPage from "./Errorpage";
import contact from "./routes/contact";
import {
    createBrowserRouter,
    RouterProvider,} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                path: "contacts/:contactId",
                element: <contact />,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);