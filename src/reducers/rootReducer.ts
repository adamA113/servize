import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer, {State} from './Users/usersReducer';
import providersReducer from './Providers/providersReducer';

const persistConfig = {
    key: 'root',
    storage,
    debug: true
}

const rootReducer = combineReducers({
    user: usersReducer,
    providers: providersReducer,

});
// const rootReducer = usersReducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedReducer = rootReducer;

export default persistedReducer;

export type RootStore = ReturnType<typeof rootReducer>