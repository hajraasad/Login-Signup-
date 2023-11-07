
import { createSlice } from "@reduxjs/toolkit";

const emailsSlice = createSlice({
    name: "emails",
    initialState: [],
    reducers: {
        addEmail: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addEmail } = emailsSlice.actions;
export default emailsSlice.reducer;
