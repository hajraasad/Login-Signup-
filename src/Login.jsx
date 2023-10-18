import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    handlePasswordChange = (e) => {

        //this.props.updateNameCallbackFunction(e.target.value);
        this.props.callbackpassword(e.target.value);
    }

    handleEmailChange = (e) => {

        this.props.callbackemail(e.target.value);
    }

    handleLogin = ()=>{
    this.props.callbacksubmit();
    }


    render() {
        return (
            <div>
                    <h2>Login Page</h2>
                    <form>

                        <div>
                            <label>Email:</label>
                            <input type="email" value={this.props.email} onChange={this.handleEmailChange} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={this.props.password} onChange={this.handlePasswordChange} />
                        </div>
                        <button type="button" onClick={this.handleLogin}>
                            Login
                        </button>
                    </form>
            </div>
        );
    }
}

export default Login;