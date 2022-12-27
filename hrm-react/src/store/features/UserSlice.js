import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../config/UserService";
import axios from "axios";
import mainService from "../../config/MainService";
import authService from "../../config/AuthService";

const initialStateUser = {
    userListUpdate: false,
    returnUserCreate: false,
    managerListUpdate: false,
    // token: "",
    email: "",
    isUserProfile: false,
    userProfile: {

    },
    managerProfile: {

    },
    userProfileList: [],
    managerProfileList: [],
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};


export const fetchUserCreate = createAsyncThunk(
    "main/create",

    async (payload) => {
        try {
            const response = await fetch(mainService.usercreate, {
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


export const findallManager = createAsyncThunk(
    "user/findallManager",
    async (payload) => {
        try {
            const response = await axios.get(userService.findAllManager, {
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
            const response = await axios.post(userService.updateuserfromuser,  payload, {
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

        build.addCase(fetchUserCreate.fulfilled, (state, action) => {
            state.returnUserCreate = action.payload;
            state.isLoadingRegister = false;
            state.userListUpdate = true;

        });
        build.addCase(fetchUserCreate.pending, (state, action) => {
            state.isLoadingRegister = true;
            state.isSave = false;
            state.userListUpdate = false;
        });
        build.addCase(fetchUserCreate.rejected, (state, action) => {
            state.isLoadingRegister = false;
            state.isSave = false;
        });

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

        build.addCase(findallManager.fulfilled, (state, action) => {
            state.managerProfileList = action.payload;
            state.isLoading = false;
            console.log(state.managerProfileList);
        });

        build.addCase(findallManager.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

        build.addCase(findallManager.pending, (state, action) => {
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
