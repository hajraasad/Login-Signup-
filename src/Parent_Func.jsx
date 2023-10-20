import React, { useState, useEffect } from 'react';
import Login_Func from "./Login_Func";
import Signup_Func from "./Signup_Func";

function Parent_Func() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState('Signup');

    useEffect(() => {
        if (users && users.length > 0) {
            console.log(users);
            setName('');
            setPassword('');
            setEmail('');
            alert('User signed up successfully!');
            localStorage.setItem('people', JSON.stringify(users));
        }
    }, [users]);

    const handleSignup = () => {
        if (!name || !password || !email) {
            alert('Please fill in all fields.');
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: password
        };

        setUsers([...users, newUser]);
    };

    const handleLogin = () => {
        setForm('login');
    };

    const handleRemoveUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        alert('User removed successfully!');

        // Update local storage when removing a user
        localStorage.setItem('people', JSON.stringify(updatedUsers));
    };

    const callLog = () => {
        const user = users.filter(
            (user) => user.email === email && user.password === password
        );

        console.log(user);
        if (user.length > 0) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    }

    return (
        <div>
            {form === 'Signup' ? (
                <Signup_Func
                    name={name}
                    updateNameCallbackFunction={(name) => setName(name)}
                    password={password}
                    updatePasswordCallbackFunction={(password) => setPassword(password)}
                    email={email}
                    updateEmailCallbackFunction={(email) => setEmail(email)}
                    users={users}
                    handle={handleSignup}
                    handleLogin={handleLogin}
                />
            ) : (
                <Login_Func
                    password={password}
                    callbackpassword={(password) => setPassword(password)}
                    email={email}
                    callbackemail={(email) => setEmail(email)}
                    users={users}
                    callbacksubmit={callLog}
                    removeItemParent={handleRemoveUser}
                />
            )}
        </div>
    );
}

export default Parent_Func;
