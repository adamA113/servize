import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/Users/usersActions';
import { useSelector, useDispatch } from 'react-redux';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './Login.css';
const axios = require('axios');

interface formData {

    email: string;
    password: string;
}

export default function Login() {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm<formData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // hooks 
    // create state for email and password 
    // use setemail
    // use email not formData
    const [access, setAccess] = useState("");
    const [refresh, setRefresh] = useState("");
    return (
        < div id="login" className="center styled" >
            <form id="login-form"
                onSubmit={handleSubmit(async (formData) => {
                    console.log(formData);

                    await axios.post(`http://localhost:8000/auth/jwt/create`,
                        {
                            email: formData.email,
                            password: formData.password,
                        })

                        .then(async (result: any) => {
                            console.log("post", result)
                            setAccess(result.data.access);
                            setRefresh(result.data.refresh);
                            let res = await axios({
                                url: 'http://localhost:8000/auth/users/me/',
                                method: 'get',
                                // timeout: 8000,
                                headers: {
                                    'Authorization': 'JWT ' + access,
                                    'Content-Type': 'application/json',
                                }
                            })
                            if (res.status == 200) {
                                // test for status you want, etc
                                console.log("get", res)
                                localStorage.setItem("access_token", access);
                                localStorage.setItem("refresh_token", refresh);
                                dispatch(logIn(res.data.name, res.data.email, res.data.id))
                                window.location.href = "/"
                            }

                        })
                        .catch((err: any) => {
                            console.error("err===== =>", err);
                        })

                })}
            >
                <h1>Log In</h1>
                <label htmlFor="email" >Email:</label>
                <input type="email" className="text" id="email" name="email" ref={register({ required: "required" })} />
                <div className="email error" ></div>

                {/* <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div> */}

                <label htmlFor="password" >Password:</label>
                <input type="password" className="text" id="password" name="password" ref={register({ required: "required" })} />

                {/* <button className="btn cancel" onClick={closeForm}>Close</button> */}

                <button className="btn-login" >Log In</button><br />
                <p >Don't have an account?  <Link to="/user/signup" style={{ textDecoration: "none" }}>Sign up</Link></p>
            </form>
        </div>
             
    )
}