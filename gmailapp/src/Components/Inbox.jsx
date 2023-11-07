import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {reset} from "../Redux/emailSlice";

const Inbox = () => {
    const nav = useNavigate();
    const loggedInUserId = useSelector((state) => state.login.currentlogin.id); // Replace with the actual way you get the logged-in user's ID.
    const receivedEmails = useSelector((state) => state.email.allemail);

    // console.log("users", receivedEmails)
    // console.log("loggedinid",loggedInUserId)

    const dispatch = useDispatch()


    // Filter received emails for the logged-in user

    const receivedEmailsForUser = receivedEmails.filter(
        (email) => email.Reid === loggedInUserId
    );
 //     const r = receivedEmails.filter((item)=>{
 //       return item.Reid === loggedInUserId
 //     })

    console.log("r",receivedEmailsForUser);

    const handleCompose = () => {
        nav('/Compose');
    }

    const handleSent = () => {
        nav('/sent');
    }

    return (
        <div>
            <button onClick={handleCompose}>Compose</button>
            <button onClick={handleSent}>Sent</button>

            <h2>Received Emails</h2>
            <ul>
                {receivedEmailsForUser.map((email) => (
                    <li key={email.id}>
                        <div>Subject: {email.subject}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inbox;
