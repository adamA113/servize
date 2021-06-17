import { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { signUp, openLoginForm, closeSignupForm } from '../../actions/Users/usersActions';
// import { State } from '../../reducers/Users/usersReducer'
import { useSelector, useDispatch } from 'react-redux';
// import Usertype from './Usertype'
import './Signup.css';

interface FormData {
    username: string;
    email: string;
    phone: number;
    password: string;
}
const Signup = (props: any) => {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return (
        <div id="signup">
            <form id="signup-form"
                onSubmit={handleSubmit((formData) => {
                    dispatch(signUp(formData.username, formData.email, formData.password));
                })}
            >

                <div className="signup-close" onClick={closeSignupForm}>&times;</div>

                <h1>Join Servize</h1>
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

                <div className="password-req" >8 characters or longer. Combine upper and lowercase letters, numbers, and special characters</div><br />

                <p >Already have an account? <span style={{ color: "red", cursor: "pointer" }} onClick={() => { closeSignupForm(); openLoginForm() }}>Log In</span></p>
                {/* {userInStore.user.status ? null : <Redirect to="/usertype" />} */}
            </form>
        </div>
    );
}

export default Signup;

