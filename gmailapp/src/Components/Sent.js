import {useSelector} from "react-redux";

const Sent = () => {

    const allemails = useSelector(state => state.email.allemail);
    const loggedInUserId = useSelector((state) => state.login.currentlogin.id);


    const r = allemails.filter(
        (email) => email.id === loggedInUserId
    );

    return (
        <div>
            {r?.map((value) => {
                return (
                    <p>
                        {value?.subject}
                    </p>
                )
            })}
        </div>
    );
}
export default Sent;

