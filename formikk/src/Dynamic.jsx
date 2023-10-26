import { useFormik } from "formik";
import React from "react";
import { Basicschema } from "./Basicschema";

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            //localStorage.setItem(values);
        },
        validationSchema: Basicschema,
    });
    console.log(formik.errors)
    const keys = Object.keys(formik.initialValues);//storages obj keysvals in keys

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                {keys.map((field) => (
                    <div key={field}>
                        <label htmlFor={field}>{field}</label>
                        <input
                            type={field}
                            name={field}
                            onChange={formik.handleChange}
                            value={formik.values[field]}
                        />
                        <label>{formik.errors[field]}</label>

                    </div>
                ))}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
