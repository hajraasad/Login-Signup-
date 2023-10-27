import {useFormik} from "formik";
import React from "react";
import {Basicschema} from "./Basicschema";


const Signup=()=>{


    const formik=useFormik({

        initialValues:{
            name:'',
            email:'',
            password:'',
            confirm_password:''
        },

        onSubmit:values => {
            console.log(values);
            //localStorage.setItem(values);
        },

        validationSchema:Basicschema,


    })

    const keys = Object.keys(formik.initialValues);


    console.log(keys);
    const list=[];

    console.log(formik.errors)
    return(
      <div>
      {/*    {keys}.map((field)=>{*/}
      {/*    field.push(*/}
      {/*        */}
      {/*    )*/}
      {/*})*/}
          <form onSubmit={formik.handleSubmit}>
              <label htmlFor='name'>name</label>
              <input type='text'
                     name='name' onChange={formik.handleChange} value={formik.values.name}/>
              <label>{formik.values.name.errors}"error "</label>

              <label htmlFor='email'>email</label>
              <input type='email'
                     name='email' onChange={formik.handleChange} value={formik.values.email}/>

              <label htmlFor='password'>password</label>
              <input type='password'
                     name='password' onChange={formik.handleChange} value={formik.values.password}/>

              <label htmlFor='confirm_password'>confirm password</label>
              <input type='password'
                     name='confirm_password' onChange={formik.handleChange} value={formik.values.confirm_password}/>

              <button type={"submit"}>SignUp</button>
          </form>
      </div>
    );
}


export default Signup;