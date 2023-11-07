import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useNavigate} from "react-router-dom";
import {addemail} from "../Redux/emailSlice";

const Compose = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [id, setId] = useState('');
    const [Reid, setRecieverId] = useState('');

    const allemail = useSelector(state => {
        return state.email.allemail
    });

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleReIdChange = (e) => {
        setRecieverId(e.target.value);
    };

    const handleIdChange = (e) => {
        setId(e.target.value);
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleCompose = () => {
        let newObject = {
            subject: subject,
            email: email,
            message: message,
            Reid: Reid,
            id: id,

        }


        let array = [...allemail]
        array.push(newObject);


        dispatch(addemail(array));
        nav('/inbox');

    };


    return (
        <div>
            <h2>Compose</h2>
            <form>
                <div>
                    <label>sender id:</label>
                    <input type="text" value={id} onChange={handleIdChange}/>
                </div>
                <div>
                    <label>email:</label>
                    <input type="email" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                    <label>subject:</label>
                    <input type="text" value={subject} onChange={handleSubjectChange}/>
                </div>
                <div>
                    <label>message:</label>
                    <input type="text" value={message} onChange={handleMessageChange}/>
                </div>
                <div>
                    <label>receiver id:</label>
                    <input type="text" value={Reid} onChange={handleReIdChange}/>
                </div>
                <button type="button" onClick={handleCompose}>
                    send
                </button>
            </form>
        </div>
    );
}
export default Compose;
