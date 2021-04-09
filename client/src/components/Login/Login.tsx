import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { logIn, openSignupForm, openForgotForm } from '../../actions/Users/usersActions';
import { useSelector, useDispatch } from 'react-redux';
import './Login.css';
import $ from 'jquery';

// $ (function(){
//     if (document.getElementById("login-form").classList.contains("showLoginForm")) {
//         $(document).on("click", () => {
//             console.log('clicked outside');
//         });

//         $("#login-form").on("click", (event) => {
//             console.log('clicked inside');
//             event.stopPropagation();
//         });
//     }
// })

interface formData {
    email: string;
    password: string;
}

const Login = (props: any) => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm<formData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState(''); // hooks 
    // create state for email and password 
    // use setemail
    // use email not formData
    // const [access, setAccess] = useState("");
    // const [refresh, setRefresh] = useState("");

    function closeLoginForm() {
        $("#login-form").removeClass("showLoginForm");
        $('.login-overlay').css({ "display": "none" });
        $('#login').css({ "display": "none" });
    }

    return (
        < div id="login" className="center" >

            <div className="login-overlay"></div>
            <form id="login-form"
                onSubmit={handleSubmit(async (formData) => {
                    console.log(formData);

                    dispatch(logIn(formData.email, formData.password));

                    // await axios.post(`http://localhost:8000/auth/jwt/create/`,
                    //     {
                    //         email: formData.email,
                    //         password: formData.password,
                    //     })

                    //     .then(async (result: any) => {
                    //         console.log("post", result)
                    //         setAccess(result.data.access);
                    //         setRefresh(result.data.refresh);
                    //         let res = await axios({
                    //             url: 'http://localhost:8000/auth/users/me/',
                    //             method: 'get',
                    //             // timeout: 8000,
                    //             headers: {
                    //                 'Authorization': 'JWT ' + access,
                    //                 'Content-Type': 'application/json',
                    //             }
                    //         })
                    //         if (res.status === 200) {
                    //             // test for status you want, etc
                    //             console.log("get", res)
                    //             localStorage.setItem("access_token", access);
                    //             localStorage.setItem("refresh_token", refresh);
                    //             dispatch(logIn(res.data.name, res.data.email, res.data.id))
                    //             window.location.href = "/"
                    //         }

                    //     })
                    //     .catch((err: any) => {
                    //         console.error("err===== =>", err);
                    //     })

                })}
            >
                <div className="login-close" onClick={closeLoginForm}>&times;</div>

                <h1>Log In</h1>
                <label htmlFor="email" >Email:</label>
                <input type="email" className="text" id="email" name="email" ref={register({ required: "required" })} />
                <div className="email error" ></div>

                {/* <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div> */}

                <label htmlFor="password" >Password:</label>
                <input type="password" className="text" id="password" name="password" ref={register({ required: "required" })} />

                <button className="btn-login" >Log In</button><br />

                <p >Don't have an account?  <span style={{ color: "red", cursor: "pointer" }} onClick={() => { closeLoginForm(); openSignupForm() }}>Sign up</span></p>

                <p style={{ color: "red", cursor: "pointer" }} onClick={() => { closeLoginForm(); openForgotForm()}}>Forgot Password?</p>
            </form>
        </div>
    )
}

export default Login;