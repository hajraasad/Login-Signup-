import React, {Component} from 'react';
import Signup from "./Signup";
import Login from "./Login";
import lifecycles from "./Class_Lifecycles";
import Class_Lifecycles from "./Class_Lifecycles";

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
                <Class_Lifecycles/>
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
                    },()=>{

                        let people = this.state.users;//we save the obj, not only arr of objs
                        console.log(people);
                        let string = JSON.stringify(people);
                        localStorage.setItem("people", string)

                        }

                    );


                    // //local storage
                    // let people = this.state.users;//we save the obj, not only arr of objs
                    // let string = JSON.stringify(people);
                    // localStorage.setItem("people", string);

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
                                //get users from local storage
                                let retString = localStorage.getItem("people")
                                let retArray = JSON.parse(retString)
                                console.log(retArray);


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

                   // removeItemParent={this.removeItemParent}
                    removeItemParent={(index)=>{

                        // Create a copy of the users array without the item to be removed
                        const updatedUsers = this.state.users.filter((_, i) => i !== index);

                        // Update the state with the new users array
                        this.setState({ users: updatedUsers }, () => {
                            // Save the updated users array to local storage
                            const string = JSON.stringify(updatedUsers);
                            localStorage.setItem("people", string);

                            // Optional: Show a confirmation message
                            alert('User removed successfully!');
                        });
                    //
                    // this.state.users.splice(index, 1);
                    //
                    // console.log(this.state.users);
                    //
                    // let people = this.state.users;//we save the obj, not only arr of objs
                    //      let string = JSON.stringify(people);
                    //     localStorage.setItem("people", string);



                        // //now we will remove item from local storage
                    //     localStorage.removeItem(index);
                    //     localStorage.setItem(index, JSON.stringify(this.users));


                    // const userData = JSON.parse(localStorage.getItem('people'));
                    // console.log(userData);
                    //
                    // userData.splice(index,1);
                    //
                    //     const array1 = userData;
                    //     let string = JSON.stringify(array1);
                    //     localStorage.setItem("people", string);




                    }}


                />
                    )}
            </div>
        );
    }
}

export default Parent;