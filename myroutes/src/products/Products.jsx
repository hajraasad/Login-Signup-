import {Outlet} from "react-router-dom";

function Products()
{
    return(
        <div>
            product parent
            <Outlet/>
        </div>

    );
}
export default Products;