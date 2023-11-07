import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../Redux/userSlice";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector(state => state.users.allusers);

    console.log(users);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleIDChange = (e) => {
        setID(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSignup = () => {
        let newObject = {
            id: id,
            name: name,
            email: email,
            password: password
        }

        let array = [...users]
        array.push(newObject);


        dispatch(addUser(array));
        nav('/login');

    };

    return (
        <div>
            <h2>Signup Page</h2>
            <form>
                <div>
                    <label>Id:</label>
                    <input type="text" value={id} onChange={handleIDChange}/>
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="button" onClick={handleSignup}>
                    Signup
                </button>
            </form>
        </div>
    );
}
export default Signup;