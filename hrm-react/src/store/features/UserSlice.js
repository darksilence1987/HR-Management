import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../config/UserService";

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



const userSlice = createSlice({
    name: "user",
    initialState: initialStateUser,
    reducers: {},


    extraReducers: (build) => {},
});

export default userSlice.reducer;
