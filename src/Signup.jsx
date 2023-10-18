import React, { Component } from 'react';
class SignUpPage extends Component {
    constructor(props) {
        super(props);

    }

    handleNameChange = (e) => {

        this.props.updateNameCallbackFunction(e.target.value);
    }

    handlePasswordChange = (e) => {
        this.props.updatePasswordCallbackFunction(e.target.value);
    }

    handleEmailChange = (e) => {
        this.props.updateEmailCallbackFunction(e.target.value);
    }

    handleSignUp = () => {
        this.props.handle()

    }

    handleLogin =()=>{

        this.props.handleLogin()
    }

    render() {

        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={this.props.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={this.props.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={this.props.email} onChange={this.handleEmailChange} />
                    </div>
                    <button type="button" onClick={this.handleSignUp}>
                        Sign Up
                    </button>

                    <button type="button" onClick={this.handleLogin}>
                        login
                    </button>
                </form>


                <h3>Registered Users:</h3>
                <ul>
                    {this.props.users.map((user, index) => (
                        <li key={index}>
                            Name: {user.name}, Email: {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SignUpPage;
