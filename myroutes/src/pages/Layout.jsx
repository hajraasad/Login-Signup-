import React from "react";
import {Outlet} from "react-router-dom";
function Layout() {

    return (
        <div>
            Hello from layout
            <Outlet/>

        </div>

    );
}
export default Layout;