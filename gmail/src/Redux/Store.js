// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import emailsReducer from "./features/emails/emailsSlice";

const store = configureStore({
    reducer: {
        emails: emailsReducer,
    },
});

export default store;
