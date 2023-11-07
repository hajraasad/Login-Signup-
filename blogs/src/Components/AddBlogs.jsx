import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addBlog } from "./ActionIndex";
import { Link } from "react-router-dom";

const initialValues = {
    title: "",
    category: "",
    subcategory: "",
    description: "",
    authorname: "",
};

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    subcategory: Yup.string().required("Subcategory is required"),
    description: Yup.string().required("Description is required"),
    authorname: Yup.string().required("Author Name is required"),
});

const AddBlog = ({ data, setData }) => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const newBlog = {
            id: data.length + 1,
            img: "/public/Image/img1.jpeg",
            createdat: new Date().toISOString(),
            ...values,
        };

        dispatch(addBlog([newBlog]));

        // Update the data array with the new blog
        //setData([...data, newBlog]);
    };

    // console.log(formik.error)
    return (
        <div>
            <h2>Add a New Blog</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <Field type="text" id="title" name="title" />
                        <ErrorMessage name="title" component="div" className="error" />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <Field type="text" id="category" name="category" />
                        <ErrorMessage name="category" component="div" className="error" />
                    </div>
                    <div>
                        <label htmlFor="subcategory">Subcategory:</label>
                        <Field type="text" id="subcategory" name="subcategory" />
                        <ErrorMessage name="subcategory" component="div" className="error" />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <Field
                            as="textarea"
                            id="description"
                            name="description"
                            rows="4"
                        />
                        <ErrorMessage name="description" component="div" className="error" />
                    </div>
                    <div>
                        <label htmlFor="authorname">Author Name:</label>
                        <Field type="text" id="authorname" name="authorname" />
                        <ErrorMessage name="authorname" component="div" className="error" />
                    </div>
                    <button type="submit">Add Blog</button>
                </Form>
            </Formik>
            <Link to="/blogs">Go to blogs</Link>
        </div>
    );
};

export default AddBlog;
