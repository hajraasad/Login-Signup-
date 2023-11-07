import {Navigate} from "react-router-dom";

function Protected({children}) {
    // const comp = props.component();
    // const navigate = useNavigate();
    // const mylogic = localStorage.getItem('login');

    // return (
    //     <div>
    //         {mylogic ? (
    //             return <div>comp</div>
    //         ) : (
    //             <navigate to="/login" />
    //         )}
    //     </div>
    // );

    const userLoggedIn = localStorage.getItem('login');

    if(userLoggedIn){
        return children;
    }else{
        return(<Navigate to={'/login'}/>)
    }
}

export default Protected;