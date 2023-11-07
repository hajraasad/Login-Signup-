// Parent.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login_Func from "./Login";
import Signup_Func from "./Signup";

function Parent() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user'); // Initialize role state
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState('Signup');

    localStorage.setItem('people', JSON.stringify(users));


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
            password: password,
            role: role, // Use the role state
        };

        setUsers([...users, newUser]);
        localStorage.setItem('role', role);
    };

    const callLog = () => {
        const user = users.filter(
            (user) => user.email === email && user.password === password
        );

        console.log(user);
        if (user.length > 0) {
            localStorage.setItem('login','true');
            if (role === 'user') {

                navigate('/blogs');
            } else if (role === 'author') {
                navigate('/add-blog');
            }
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    }

    const handleRemoveUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        alert('User removed successfully!');
        localStorage.setItem('people', JSON.stringify(updatedUsers));
    };

    const handleLogin = () => {
        setForm('login');
    };

    // Function to change the role in the state
    const rolechange = (newrole) => {
        setRole(newrole);
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
                    role={role} // Pass the role state to Signup
                    rolechange={rolechange} // Pass the rolechange function to Signup
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

export default Parent;
