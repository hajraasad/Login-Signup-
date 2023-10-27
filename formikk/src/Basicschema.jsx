import * as yup from "yup";
import {string} from "yup";

export const Basicschema = yup.object().shape({
    name: string().required("name not entered"),
    email: string().required("enter email"),
    password: string().required(),
    confirm_password:string().required()
});

