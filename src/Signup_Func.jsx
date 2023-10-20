import React from 'react';

function Signup_Func(props) {
    const handleNameChange = (e) => {
        props.updateNameCallbackFunction(e.target.value);
    };

    const handlePasswordChange = (e) => {
        props.updatePasswordCallbackFunction(e.target.value);
    };

    const handleEmailChange = (e) => {
        props.updateEmailCallbackFunction(e.target.value);
    };

    const handleSignUp = () => {
        props.handle();
    };

    const handleLogin = () => {
        props.handleLogin();
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" value={props.name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={props.password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={props.email} onChange={handleEmailChange} />
                </div>
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Signup_Func;
