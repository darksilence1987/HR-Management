import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, UserSlice,CorporationSlice } from "./features";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
        corporation: CorporationSlice,
    },
});

export default store;
