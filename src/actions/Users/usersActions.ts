import { STORE_USER, STORE_DATA, USER_LOGIN, ADD_ROLE, DispatchUserTypes } from '../actionTypes';
import { Dispatch } from "redux";
import axios from "axios";

export const signUp = (username: string, email: string, password: string) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    try {
        await axios.post(`http://localhost:8000/auth/users/`, { name: username, password: password, email: email })

            .then((result: any) => {
                console.log("axios",result)
                dispatch({ type: STORE_USER, payload: { username: result.data.name, email: result.data.email , status: result.status, id: result.data.id} })
                window.location.href = "/usertype"

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }
    catch(e){
        console.log("action error",e)
    }
}

export const logIn = (username: string, email: string, id: number) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    dispatch({ type: USER_LOGIN, payload: { username, email, id } })
}

export const addRole = (role: string) => (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    dispatch({ type: ADD_ROLE, payload: role})
}

export const add = (username: string, email: string) => (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    dispatch({ type: STORE_DATA, payload: { username, email} })
}

