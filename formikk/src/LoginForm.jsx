import React from 'react';
import {useFormik} from "formik";


const LoginForm = () => {

    const formik=useFormik({

    initialValues:{
        email:'',
        password:''
    },

    onSubmit:(values)=>{
        console.log(values);
    }

        })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='email'>email</label>
                <input type='email'
                    name='email' onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor='password'>password</label>
                <input type='password'
                       name='password' onChange={formik.handleChange} value={formik.values.password}/>
                <button type='submit'>LoginPage</button>
            </form>
        </div>
    )


    };

export default LoginForm;