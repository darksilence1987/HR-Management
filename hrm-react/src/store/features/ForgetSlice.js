import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import mainService from "../../config/MainService";
import {permissionCreate} from "./PermissionSlice";


const initialStateUser = {


    email: "",
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};

export const requestPassword = createAsyncThunk(
    "main/requestPassword",
    async (email) => {
        try {
            const response = await axios.get(mainService.requestPassword, { params:{email: email}});
            return response.data;

        } catch (error) {
            return error.response.data;
        }
    }
);


const forgetSlice = createSlice({
    name: "forget",
    initialState: initialStateUser,
    reducers: {},

    extraReducers: (build) => {


        build.addCase(requestPassword.fulfilled, (state, action) => {

            state.isLoading = false;
        });

        build.addCase(requestPassword.pending, (state, action) => {
            state.isLoading = true;
        });


        build.addCase(requestPassword.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },

});

export default forgetSlice.reducer;
