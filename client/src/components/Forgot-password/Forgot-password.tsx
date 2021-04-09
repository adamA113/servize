import { openLoginForm, resetPassword } from '../../actions/Users/usersActions';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Forgot-password.css';
import $ from 'jquery';
const ForgotPassword = () => {

    const dispatch = useDispatch();
    const userInStore = useSelector((state: any) => state.user);
    const [email, setEmail] = useState("")
    console.log("email", email)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(resetPassword(email));
    }

    function closeForgotForm() {
        $("#forgot-form").removeClass("showForgotForm");
        $('.forgot-overlay').css({ "display": "none" });
        $('#forgot').css({ "display": "none" });
    }

    return (
        <div id="forgot">
            <div className="forgot-overlay"></div>
            <form className="forgot-form" id="forgot-form" onSubmit={handleSubmit}>
                <div className="forgot-close" onClick={closeForgotForm}>&times;</div>

                <h1>Forgot Password</h1>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}}type="email" className="text" id="email" name="email" value={email} />
                </div>
                <button className="btn-forgot" >Reset Password</button><br />

                <p style={{ color: "red", cursor: "pointer" }} onClick={() => { closeForgotForm(); openLoginForm() }}>Back to Log In</p>
            </form>
        </div>
    )
};

export default ForgotPassword;
