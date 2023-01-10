import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../config/AuthService";
import mainService from "../../config/MainService";

const initialStateAuth = {
    token: "",
    isAuthanticated: false,
    auth: {},
    authList: [],
    isLoading: false,
    isLoadingRegister: false,
    isSave: false,
    code: 0,
    alertMessage: "",
    error: {
        code: "",
        message: "",
        fields: [],
    },
};

export const fetchLogin = createAsyncThunk(
    "auth/login",

    async (payload) => {
        try {
            /**
             * 'http://35.192.135.28:3333/api/v1/auth/login'
             * @type {any}
             *
             * authService.login
             * mainService.loginrequest,
             */

            const response = await fetch(mainService.loginrequest, {
                method: "POST",
                headers: {

                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
                },
                body: JSON.stringify(payload),
            })
                .then((response) => response.json())
                .catch((error) => console.log(error));
            return response;
        } catch (err) {
            return err.response;
        }
    }
);




const authSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,

    reducers: {},
    extraReducers: (build) => {


        build.addCase(fetchLogin.fulfilled, (state, action) => {
            state.auth = action.payload;
            if(action.payload.code === 190){return false;}
            console.log("action.payload", action.payload);
            // state.token = action.payload.token;
            state.isAuthanticated = true;

            state.isLoading = false;
        });

        build.addCase(fetchLogin.pending, (state, action) => {
            state.isLoading = true;
        });
        build.addCase(fetchLogin.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { } =
    authSlice.actions;

export default authSlice.reducer;
