import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginUser} from "../Redux/LoggedinSlice";

const Login = () => {
    const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const nav = useNavigate();

    const dispatch = useDispatch();

    const users = useSelector(state => state.users.allusers);
    console.log(users);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleIdChange = (e) => {
        setId(e.target.value);
    }


    const handleLogin = () => {
        users.map((value) => {
            if (value.id === id && value.password === password) {
                nav('/inbox')
            }
        })

        const currentUser = {
            password: password,
            id: id,

        }
        dispatch(LoginUser(currentUser));

    };


    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <div>
                    <label>Id:</label>
                    <input type="text" value={id} onChange={handleIdChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;