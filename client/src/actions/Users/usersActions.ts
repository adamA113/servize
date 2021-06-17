import {
    STORE_USER, STORE_DATA, USER_LOGIN, ADD_ROLE, DispatchUserTypes,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT
} from '../actionTypes';
import { Dispatch } from "redux";
import axios from "axios";
import $ from 'jquery';

export const signUp = (username: string, email: string, password: string) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    try {
        await axios.post(`http://localhost:8000/auth/users/`, { name: username, password: password, email: email })

            .then((result: any) => {
                console.log("axios", result)
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: result.data
                })
                // window.location.href = "/usertype"

            })
            .catch((err: any) => {
                dispatch({
                    type: SIGNUP_FAIL
                })
            })
    }
    catch (e) {
        console.log("action error", e)
    }
}

export const loadUser = () => async (dispatch: Dispatch<DispatchUserTypes>) => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get(`http://localhost:8000/auth/users/me/`, config);

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const logIn = (email: string, password: string) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log("====",email, password )
    try {
        await axios.post(`http://localhost:8000/auth/jwt/create/`, { email: email, password: password })

            .then((result: any) => {
                // console.log("axios", result)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: result.data
                })
                dispatch(loadUser());
                window.location.href = "/"

            })
            .catch((err: any) => {
                dispatch({
                    type: LOGIN_FAIL
                })
            })
    }
    catch (e) {
        console.log("action error", e)
    }
}

export const resetPassword = (email: string) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    try {
        await axios.post(`http://localhost:8000/auth/users/reset_password/`, { email: email })

            .then((result: any) => {
                // console.log("axios", result)

            })
            .catch((err: any) => {
                console.log("action error", err)
            })
    }
    catch (e) {
        console.log("action error", e)
    }
}

export const confirmResetPassword = (uid: any, token: any, newPassword: any) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    try {
        await axios.post(`http://localhost:8000/auth/users/reset_password_confirm/`, { uid: uid, token: token, new_password: newPassword })

            .then((result: any) => {
                // console.log("axios", result)

            })
            .catch((err: any) => {
                console.log("action error", err)
            })
    }
    catch (e) {
        console.log("action error", e)
    }
}

export const addRole = (role: string) => (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    dispatch({ type: ADD_ROLE, payload: role })
}

export const add = (username: string, email: string) => (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    dispatch({ type: STORE_DATA, payload: { username, email } })
}

export const openLoginForm = () => {
    $("#login-form").addClass("showLoginForm");
    $('.overlay').css({ "display": "block" });
    $('#login').css({ "display": "block" });
}

export const openSignupForm = () => {
    // var $element = document.getElementsByClassName("App");
    // var newdiv1 = $("<div class='signup-overlay'></div>");
    // $(".App").prepend(newdiv1);

    $("#signup-form").addClass("showSignupForm");
    $('.overlay').css({ "display": "block" });
    $('#signup').css({ "display": "block" });
}

export const openForgotForm = () => {
    $("#forgot-form").addClass("showForgotForm");
    $('.overlay').css({ "display": "block" });
    $('#forgot').css({ "display": "block" });
}

export const closeLoginForm = () => {
    $("#login-form").removeClass("showLoginForm");
    $('.overlay').css({ "display": "none" });
    $('#login').css({ "display": "none" });
}

export const closeSignupForm = () => {
    // $('.signup-overlay').remove();
    $("#signup-form").removeClass("showSignupForm");
    $('.overlay').css({ "display": "none" });
    $('#signup').css({ "display": "none" });
}

export const closeForgotForm = () => {
    $("#forgot-form").removeClass("showForgotForm");
    $('.overlay').css({ "display": "none" });
    $('#forgot').css({ "display": "none" });
}



