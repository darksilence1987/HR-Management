import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, UserSlice,CorporationSlice, MailSlice } from "./features";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
        corporation: CorporationSlice,
        mail: MailSlice,
    },
});

export default store;
