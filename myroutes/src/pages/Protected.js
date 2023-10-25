import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected(props) {
    const comp = props.component();
    const navigate = useNavigate();

    const mylogic = localStorage.getItem('login');

    return (
        <div>
            {mylogic ? (
                <div>{comp}</div>
            ) : (
                <navigate to="/login" />
            )}
        </div>
    );
}

export default Protected;
