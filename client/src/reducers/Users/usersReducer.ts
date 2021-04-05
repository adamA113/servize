import {
    User, STORE_USER, STORE_DATA, ADD_ROLE, USER_LOGIN, DispatchUserTypes,
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
} from '../../actions/actionTypes';

export interface State {
    user: User | any,
    role: string | any,
    access: string | any,
    refresh: string | any,
    isAuthenticated: any
}
export const initState: State = {
    user: null,
    role: null,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
}  

const usersReducer = (state: State = initState, action: DispatchUserTypes): State => {
    console.log("actiontype", action.type)

    switch (action.type) {
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('access', action.payload.access);
            localStorage.setItem('refresh', action.payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: action.payload.access,
                refresh: action.payload.refresh
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }

        case STORE_USER:
            return { ...state, user: action.payload }

        case USER_LOGIN:
            return { ...state, user: action.payload }

        case STORE_DATA:
            return { ...state, user: action.payload }

        case ADD_ROLE:
            return { ...state, role: action.payload }

        default:
            return state
    }
}

export default usersReducer;