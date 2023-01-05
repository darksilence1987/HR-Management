import { configureStore } from "@reduxjs/toolkit";
import {AuthSlice, UserSlice, CorporationSlice, MailSlice, PermissionSlice} from "./features";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
        corporation: CorporationSlice,
        mail: MailSlice,
        permission: PermissionSlice,
    },
});

export default store;
