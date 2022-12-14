import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../config/UserService";
import axios from "axios";

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
            const response = await axios.get(userService.findall, {
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
    },
});

export default userSlice.reducer;
