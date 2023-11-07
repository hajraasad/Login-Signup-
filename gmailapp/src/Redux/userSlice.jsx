import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',

    initialState: {allusers: []},

    reducers: {
        addUser: (state, action) => {

            state.allusers = action.payload;//append the updated users array

        },
    },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
