import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../config/AuthService";

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
            const response = await fetch(authService.login, {
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


export const fetchRegister = createAsyncThunk(
    "auth/register",

    async (payload) => {
        try {
            const response = await fetch(authService.register, {
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

        build.addCase(fetchRegister.fulfilled, (state, action) => {
                state.auth = action.payload;
                state.isSave = true
                state.alertMessage = "Kayıt Başarılı";
            state.isLoadingRegister = false;

        });
        build.addCase(fetchRegister.pending, (state, action) => {
            state.isLoadingRegister = true;
            state.isSave = false;
        });
        build.addCase(fetchRegister.rejected, (state, action) => {
            state.isLoadingRegister = false;
            state.isSave = false;
            state.alertMessage = state.error.message;
        });

        build.addCase(fetchLogin.fulfilled, (state, action) => {

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
