import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import emailReducer from './emailSlice'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import loginReducer from './LoggedinSlice'

const reducers = combineReducers({
    users: userReducer,
    email: emailReducer,
    login: loginReducer

})

const persist = {
    key: "root",
    storage: storage,
    whitelist: ["users", "email", "login"]
}

const persistreducer = persistReducer(persist, reducers)

const Store = configureStore({
    reducer: persistreducer

});
const persister = persistStore(Store);

export {Store, persister};
