import {Link} from "react-router-dom";

function Booklist()
{
    return(
        <div>
            <Link to="/books/1">Book 1</Link>
            <Link to="/books/2">Book 2</Link>
        </div>

    );
}
export default Booklist;