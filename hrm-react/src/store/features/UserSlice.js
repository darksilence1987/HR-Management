import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../config/UserService";
import axios from "axios";
import mainService from "../../config/MainService";

const initialStateUser = {
    token: "",
    userProfile: {
        follows: [],
    },
    userProfileList: [],
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};

export const findallUser = createAsyncThunk(
    "user/findall",
    async (payload) => {
        try {
            const response = await axios.get(mainService.getuserdetailslist, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;

        } catch (error) {
            return error.response.data;
        }
    }
);

export const findByEmail = createAsyncThunk(
    "user/findbyemail",
    async (payload) => {
        try {
            const response = await axios.post(userService.findbyemail, payload, {
                headers: {
                    "Content-Type": "application/json",
                },

            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

export const updateuserfromuser = createAsyncThunk(
    "user/updateuserfromuser",
    async (payload) => {
        try {
            const response = await axios.post(userService.updateuserfromuser, payload, {
                headers: {
                    "Content-Type": "application/json",
                },

            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: initialStateUser,
    reducers: {},

    extraReducers: (build) => {

        build.addCase(findallUser.fulfilled, (state, action) => {
            state.userProfileList = action.payload;
            state.isLoading = false;
            console.log(state.userProfileList);
        });

        build.addCase(findallUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        build.addCase(findallUser.pending, (state, action) => {
            state.isLoading = true;
        });


        build.addCase(findByEmail.fulfilled, (state, action) => {
            state.otherUserProfile = action.payload;
            state.isLoading = false;
        });

        build.addCase(findByEmail.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        build.addCase(findByEmail.pending, (state, action) => {
            state.isLoading = true;
        });

        build.addCase(updateuserfromuser.fulfilled, (state, action) => {

            state.isLoading = false;
        });

        build.addCase(updateuserfromuser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        build.addCase(updateuserfromuser.pending, (state, action) => {
            state.isLoading = true;
        });
    },
});

export default userSlice.reducer;
