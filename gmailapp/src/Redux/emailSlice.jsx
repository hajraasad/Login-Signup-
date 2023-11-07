import {createSlice} from '@reduxjs/toolkit';


const emailSlice = createSlice({
    name: 'email',

    initialState: {
        allemail: []
    },

    reducers: {
        addemail: (state, action) => {

            state.allemail = action.payload;//append the updated users array
            console.log(state.allemail);

        }
        // reset: (state)=>{
        //     state.allemail = state.initialState
        // }
    }
});

export const {addemail, reset} = emailSlice.actions;
export default emailSlice.reducer;
