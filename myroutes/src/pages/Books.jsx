import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function Book()
{
    const {id} =useParams()
    return(
        <div>
            Book {id}
        </div>

    );
}
export default Book;