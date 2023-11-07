

import {legacy_createStore as createStore,combineReducers} from 'redux'
import MyReducer from "./BlogReducerr";
import AwesomeReducer from "./BlogReducerr";



const roodReducer = combineReducers({
    blog: AwesomeReducer
})


const store =  createStore(roodReducer);

export default store

