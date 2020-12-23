import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore } from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import logger from 'redux-logger';
import persistedReducer from './reducers/rootReducer';
import usersReducer, { State } from './reducers/Users/usersReducer';
import {RootStore} from './reducers/rootReducer';

// const initialState = {};

// const middleware = [thunk];

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
    // initialState,
    // compose(
    //     applyMiddleware(...middleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// const persistor = persistStore(store);

// export { store, persistor }
store.subscribe(() => console.log("state", store.getState()))
console.log("in the store", store.getState())
export default store