import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { signUp } from '../../actions/Users/usersActions';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Usertype from './Usertype'
import './Signup.css';

const axios = require('axios');
const $ = require('jquery');

interface FormData {
    username: string;
    email: string;
    phone: number;
    password: string;
}
const Signup = (props: any) => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log(userInStore)
    // const openForm= () =>{
    //     document.getElementById("signup-form").style.display = "block";
    // }

    const closeForm = () => {
        //    $("signup-form").style.display = "none";
        $("#signup-form").hide();

    }

    const { register, handleSubmit, errors } = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return (

        <div id="signup" className="center styled">
            <form id="signup-form"
                onSubmit={handleSubmit((formData) => {

                    props.signUp(formData.username, formData.email, formData.password);
                    // console.log(props)

                    // if (userInStore.user.status === 201) {
                    //     <Redirect to="/usertype" />
                    // }
                    // axios.post(`http://localhost:8000/auth/users/`, {
                    //     name: formData.username,
                    //     email: formData.email,
                    //     password: formData.password,

                    // })

                    //     .then((result: any) => {
                    //         console.log(result)
                    //         window.location.href="/user/login" 

                    //     })
                    //     .catch((err: any) => {
                    //         console.error("err===== =>", err);
                    //     })
                })}
            >
                <h1>Sign Up</h1>
                <div className="column">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" className="text" id="username" name="username" ref={register({ required: "required" })} />
                    <div className="username error" ></div>

                    <label htmlFor="email" >Email:</label>
                    <input type="email" className="text" id="email" name="email" ref={register({ required: "required" })} />
                    <div className="email error" ></div>

                    {/* <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div> */}

                    <label htmlFor="password" >Password:</label>
                    <input type="password" className="text" id="password" name="password" ref={register({ required: "required" })} />

                    <label htmlFor="confirmPassword" >Confirm Password:</label>
                    <input type="password" className="text" id="confirmPassword" name="confirmPassword" ref={register({ required: "required" })} />
                    <div className="password error" ></div>
                </div>

                <button className="btn-signup" >Sign Up</button>
                <button className="btn cancel" onClick={closeForm}>Close</button>

                <div className="password-req" >8 characters or longer. Combine upper and lowercase letters and numbers</div><br />
                <p >Already have an account? <Link to="/user/login" style={{ textDecoration: "none" }}>Sign In</Link></p>
                {/* {userInStore.user.status ? null : <Redirect to="/usertype" />} */}
            </form>
        </div>
    );

}

const mapStateToProps = (state: State) => ({
    user: state.user,
})

const mapDispatchToProps = { signUp }

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

