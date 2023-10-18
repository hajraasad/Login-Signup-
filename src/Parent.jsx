import React, {Component} from 'react';
import Signup from "./Signup";
import Login from "./Login";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            users: [

                {name: 'sara',
                email: 'sara@gmail.com',
                password:'123'
                },
                {   name: 'aima',
                    email: 'aima@gmail.com',
                    password:'1234'
                }

            ],

            form: "Signup",

        };

    }

    render() {
        const {form} = this.state;
        return (
            <div>
                {this.state.form === 'Signup' ? (
                <Signup name={this.state.name} updateNameCallbackFunction={(name)=>{
                    this.setState({name:name})
                }} password={this.state.password}  updatePasswordCallbackFunction={(Password)=>{
                    this.setState({password:Password}) }} email={this.state.email}
                        updateEmailCallbackFunction={(Email)=>{
                            this.setState({email:Email}) }}
                        users={this.state.users}

                        handle={()=>{


                    // Validate input fields (you can add more validation as needed)
                    if (!this.state.name || !this.state.password || !this.state.email) {
                        alert('Please fill in all fields.');
                        return;
                    }

                    // Create a new user object
                    const newUser = {
                        name: this.state.name,
                        email:this.state.email,
                        password:this.state.password

                    }

                    // Add the user to the array
                    this.setState({
                        users: [...this.state.users, newUser],
                        name: '',
                        password: '',
                        email: '',
                    });

                    //this code is not adding the current user to local
                    let people = this.state.users;
                    let string = JSON.stringify(people);
                    localStorage.setItem("people", string);

                    alert('User signed up successfully!');
                }}


                        handleLogin={()=>{
                            this.setState({form :'login'})
                        }}


                />

                    ):(

                <Login
                    password={this.state.password}
                       callbackpassword={(Password)=>{
                           this.setState({password:Password})
                       }}


                       email={this.state.email}
                       callbackemail={(email)=>{
                           this.setState({email:email})
                       }}

                       users={this.state.users}

                        callbacksubmit={()=>
                        {

                                // Check if the entered username and password match any user in the array
                               const user = this.state.users.filter((user) => user.email === this.state.email && user.password === this.state.password);

                                if (user.length > 0) {
                                    alert('Login successful');
                                }
                                else
                                {
                                    alert('Login failed');
                                }

                        }}

                />
                    )}
            </div>
        );
    }
}

export default Parent;