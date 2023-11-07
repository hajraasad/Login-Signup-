import {data} from "./data";

const initialState = {
    blogsData : data
}

const AwesomeReducer = (state = initialState,action) =>{
    switch(action.type){
        case "ADD":
            console.log(state,action)

            return{
                ...state,
                blogsData: [...state.blogsData,...action.payload]
            }
        default: return state
    }
}

export default AwesomeReducer