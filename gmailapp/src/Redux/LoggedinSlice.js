import {createSlice} from '@reduxjs/toolkit';


const LoggedinSlice = createSlice({
    name: 'Loggedin',

    initialState: {currentlogin: {}},

    reducers: {
        LoginUser: (state, action) => {

            state.currentlogin = action.payload;//append the updated users array
            console.log(state.currentlogin);

        },
    },
});

export const {LoginUser} = LoggedinSlice.actions;
export default LoggedinSlice.reducer;
