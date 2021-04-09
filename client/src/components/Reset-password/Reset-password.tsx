import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmResetPassword } from '../../actions/Users/usersActions';
import { Link, Redirect } from 'react-router-dom';
import './Reset-password.css';
const ResetPassword = ({ match }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const { newPassword, confirmPassword } = formData;
    console.log(newPassword)

    const handleChange = (e: any) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const uid = match.params.uid;
    const token = match.params.token;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(confirmResetPassword(uid, token, newPassword));
    }

    return (
        <div id="reset">
            <form className="reset-form" id="reset-form" onSubmit={handleSubmit}>

                <h1>Reset Password</h1>
                <div className="">
                    <label htmlFor="newPassword">New Password</label>
                    <input onChange={handleChange} value={newPassword} type="password" className="text" id="newPassword" name="newPassword" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={handleChange} value={confirmPassword} type="password" className="text" id="confirmPassword" name="confirmPassword" />
                </div>
                <button className="btn-reset" >Update Password</button><br />
            </form>
        </div>
    );
};

export default ResetPassword;
