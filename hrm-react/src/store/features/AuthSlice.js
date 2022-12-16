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
            const response = await fetch(mainService.loginrequest, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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
