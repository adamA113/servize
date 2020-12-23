import React, { useState, useEffect } from 'react';
import {addRole} from '../../actions/Users/usersActions';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const axios = require('axios');

interface FormData {
    user: any,
    image: any,
   
}
const UsersSignup = () => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            image: "null",
        }
    })
   
    return (
        <div id="signup" className="center styled">
            <form id="signup-form"
                onSubmit={handleSubmit((formData) => {
                    console.log(formData)

                    axios.post(`http://localhost:8000/user/`, {
                        image: formData.image,
                        user: userInStore.user.id

                    })

                        .then((result: any) => {
                            console.log("axios",result)
                            dispatch(addRole(result.data.role)) 
                            if (result.status === 201) {
                                window.location.href = "/";

                            }

                        })
                        .catch((err: any) => {
                            console.error("err===== =>", err);
                        })

                })}
            >
                <h1>Provider Sign Up</h1>
                <br />
                <div className="column">

                    {/* <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div> */}

                    <label htmlFor="image">Image:</label>
                    <input type="text" className="image" id="image" name="image" ref={register} />
                    <div className="name error" ></div>

                    
                </div>
                <br />

                {/* <div className="password-req" >8 characters or longer. Combine upper and lowercase letters and numbers</div><br /> */}
                <p >Already have an account? <Link to="/user/login" style={{ textDecoration: "none" }}>Sign In</Link></p>
                <button className="button" >Continue</button><br />

            </form>
        </div>
    );
}

export default UsersSignup;



