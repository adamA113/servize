// import { signUp } from '../../actions/Users/usersActions';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import './ForgotPassword.css';
const axios = require('axios');
const $ = require('jquery');

const ForgotPassword = () => {

    const dispatch = useDispatch();
    const userInStore = useSelector((state: any) => state.user);
    console.log("rootstore", userInStore)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        let input = $('#forgot-form').serializeArray();
        // console.log(input[0].value);
        // const [email, setEmail] = useState("")
        // dispatch(store(input))
        // setEmail("");

        let options = {
            url: `http://localhost:3000/auth/users/reset_password/`,
            method: 'post',
            data: { email: input[0].value }
        }

        axios(options)
            .then((results: any) => {
                console.log(results);

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })

        try {
            const serializedState = localStorage.getItem("state");
            if (serializedState === null) {
                return undefined
            }
            return { user: JSON.parse(serializedState) }
        }
        catch (e) {
            console.log(e);
            return;
        }
    }

    return (
        <div id="reset">
            <button ><Link to="/">Return To Home Page</Link> </button>
            <form className="forgot-form" id="forgot-form" onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <br />
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="text" id="email" name="email" />
                </div>
                <br />
                <button className="button" >Reset Password</button><br />

                <p>Back to <Link to="/signin" >Sign In</Link></p>
            </form>
        </div>
    )
};

export default ForgotPassword;
