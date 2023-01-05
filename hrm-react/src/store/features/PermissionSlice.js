import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../config/UserService";
import axios from "axios";
import {updateuserfromuser} from "./UserSlice";


const initialStateUser = {

    permissionListUpdate: false,
    allPermission: [],
    allAprrovedPermission: [],
    email: "",
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};


export const permissionCreate = createAsyncThunk(
    "user/permissioncreate",
    async (payload) => {
        try {
            const response = await axios.post(userService.permissionCreate, payload, {
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



export const findAllPermission = createAsyncThunk(
    "user/findallpermission",
    async (payload) => {
        try {
            const response = await axios.post(userService.findAllPermission, payload, {
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


export const permissionRejected = createAsyncThunk(
    "user/permissionRejected",
    async (payload) => {
        try {
            const response = await axios.post(userService.permissionRejected, payload, {
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


export const permissionConfirmed = createAsyncThunk(
    "user/permissionconfirmed",
    async (payload) => {
        try {
            const response = await axios.post(userService.permissionConfirmed, payload, {
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

export const findAllFinalizedPermissions = createAsyncThunk(
    "user/allfinalizedpermissions",
    async (payload) => {
        try {
            const response = await axios.post(userService.findAllFinalizedPermission, payload, {
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


const permissionSlice = createSlice({
    name: "permission",
    initialState: initialStateUser,
    reducers: {},

    extraReducers: (build) => {


        build.addCase(permissionCreate.fulfilled, (state, action) => {

            state.isLoading = false;
            state.permissionListUpdate = true;
        });

        build.addCase(permissionCreate.pending, (state, action) => {
            state.isLoading = true;
            state.permissionListUpdate = false;
        });


        build.addCase(permissionCreate.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });


        build.addCase(findAllPermission.fulfilled, (state, action) => {
            state.allPermission = action.payload;
            state.isLoading = false;

        });

        build.addCase(findAllPermission.pending, (state, action) => {
            state.isLoading = true;
        });


        build.addCase(findAllPermission.rejected, (state, action) => {

            state.error = action.payload;
            state.isLoading = false;
        });




        build.addCase(permissionConfirmed.fulfilled, (state, action) => {
            state.isLoading = false;
            state.permissionListUpdate = true;
        });

        build.addCase(permissionConfirmed.pending, (state, action) => {
            state.isLoading = true;
            state.permissionListUpdate = false;
        });


        build.addCase(permissionConfirmed.rejected, (state, action) => {
            state.isLoading = false;
        });


        build.addCase(permissionRejected.fulfilled, (state, action) => {
            state.isLoading = false;
            state.permissionListUpdate = true;
        });

        build.addCase(permissionRejected.pending, (state, action) => {
            state.isLoading = true;
            state.permissionListUpdate = false;
        });


        build.addCase(permissionRejected.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

        build.addCase(findAllFinalizedPermissions.fulfilled, (state, action) => {
            state.allAprrovedPermission = action.payload;
            state.isLoading = false;

        });

        build.addCase(findAllFinalizedPermissions.pending, (state, action) => {
            state.isLoading = true;

        });

        build.addCase(findAllFinalizedPermissions.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

    },
});

export default permissionSlice.reducer;
