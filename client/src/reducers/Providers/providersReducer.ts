import { AllProv, GET_PROV, DispatchProvTypes} from '../../actions/actionTypes';

export interface State {
    providers: AllProv |any,
}
export const initState: State = { providers: null }

const providersReducer = (state: State = initState, action: DispatchProvTypes): State => {
    console.log("actiontype", action.type)
    switch (action.type) {
        case GET_PROV:
            // return { ...state, user: action.payload }
            // return { ...state, user: [action.payload, ...state.user] }
            return { ...state, providers: action.payload }
        default:
            return state
    }
}

export default providersReducer;