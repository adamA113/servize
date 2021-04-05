export const STORE_USER = 'STORE_USER';
export const USER_LOGIN = 'USER_LOGIN';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
export const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';
export const ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS';
export const ACTIVATION_FAIL = 'ACTIVATION_FAIL';

export const LOGOUT = 'LOGOUT';

export const ADD_ROLE = 'ADD_ROLE';
export const STORE_DATA = 'STORE_DATA';
export const GET_PROV = 'GET_PROV';

export interface Userstore {
    type: typeof STORE_USER,
    payload: User 
}
export interface Userlogin{
    type: typeof USER_LOGIN,
    payload: User
}

export interface UserRole {
    type: typeof ADD_ROLE,
    payload: string
}

export interface Userdata {
    type: typeof STORE_DATA,
    payload: User
}

export interface Providers {
    type: typeof GET_PROV,
    payload: AllProv
}

export type UserIerface = {
    username: string,
    email: string,
    status?: number,
    id?: number
}

export type ProvidersInt = {
    category: string,
    providers: any[]
}



export type User = UserIerface | null | string

export type AllProv = ProvidersInt | null | object

export type DispatchUserTypes = Userstore | Userdata | UserRole | Userlogin | any;

export type DispatchProvTypes = Providers ;