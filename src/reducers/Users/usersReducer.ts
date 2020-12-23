import { User, STORE_USER, STORE_DATA, ADD_ROLE, USER_LOGIN, DispatchUserTypes } from '../../actions/actionTypes';

export interface State {
    user: User |any,
    role: string |any,
    // prov: {name:string, description:string, img: string}
}
export const initState: State = { user: null, role: null }
// const initState = {
//     user: null,

//     prov: [
//         { name: "tech", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/0/200/300" },
//         { name: "plumb", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/1015/200/300" }
//     ]
// }   
// type A = ReturnType<typeof store>; 
const usersReducer = (state: State = initState, action: DispatchUserTypes): State => {
    console.log("actiontype", action.type)
    switch (action.type) {
        case STORE_USER:
            // return { ...state, user: action.payload }
            // return { ...state, user: [action.payload, ...state.user] }
            return { ...state , user: action.payload }
            
        case USER_LOGIN:
            return { ...state, user: action.payload }

        case STORE_DATA:
            return { ...state, user: action.payload }

        case ADD_ROLE:
            return { ...state, role: action.payload }

        default:
            return state
    }

    // console.log("action", action);
    // console.log("userstore", state);
    // if (actionTypes.STORE_USER === 'STORE_USER') {
    // try {
    //     const serializedState = JSON.stringify({
    //         ...state,
    //         user: action.payload
    //         // user: [ ...state.user, action.user]
    //     });
    //     localStorage.setItem("state", serializedState)
    // }
    // catch (e) {
    //     console.log(e)
    // }
    // return {
    //     ...state,
    //     user: action.payload,
    // image: action.payload.catImage
    // user: [...state.user, action.user]
    //     }
    // }
    // return state;
}

export default usersReducer;