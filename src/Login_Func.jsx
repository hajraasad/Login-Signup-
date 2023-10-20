import React, { useState, useEffect } from 'react';

function Login_Func(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handlePasswordChange = (e) => {
        props.callbackpassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        props.callbackemail(e.target.value);
    };

    const handleLogin = () => {
        props.callbacksubmit();
        setIsLoggedIn(true); // Set isLoggedIn to true after successful login
    };

    const removeItem = (index) => {
        props.removeItemParent(index);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" value={props.email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={props.password} onChange={handlePasswordChange} />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>

            {isLoggedIn && (
                <div>
                    <h3>Users:</h3>
                    <ul>
                        {props.users.map((user, index) => (
                            <li key={index}>
                                Name: {user.name}, Email: {user.email}
                                <button onClick={() => removeItem(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Login_Func;
