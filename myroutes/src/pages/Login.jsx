import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
        const navigate = useNavigate()

        const login = () => {

                localStorage.setItem('login','true');

                navigate('/home');

        }

         localStorage.removeItem('login');

        return (
            <div>
                    <h2>Login Page</h2>
                    <input type="text"/>
                    <input type="text"/>

                    <button onClick={login}>Login</button>
            </div>
        )
}
export default Login;
