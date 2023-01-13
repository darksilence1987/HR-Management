import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../config/UserService";
import axios from "axios";
import {updateuserfromuser} from "./UserSlice";


const initialStateUser = {

    expenseListUpdate: false,
    allExpense: [],
    AllFinalizedExpense: [],
    email: "",
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};


export const expenseCreate = createAsyncThunk(
    "user/expensecreate",
    async (payload) => {
        try {
            const response = await axios.post(userService.expenseCreate, payload, {
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




export const findAllExpense = createAsyncThunk(
    "user/findallexpense",
    async (payload) => {
        try {
            const response = await axios.post(userService.findAllExpense, payload, {
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


export const expenseRejected = createAsyncThunk(
    "user/expenserejected",
    async (payload) => {
        try {
            const response = await axios.post(userService.expenseRejected, payload, {
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


export const expenseConfirmed = createAsyncThunk(
    "user/expenseconfirmed",
    async (payload) => {
        try {
            const response = await axios.post(userService.expenseConfirmed, payload, {
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

export const findAllFinalizedExpenses = createAsyncThunk(
    "user/allfinalizedexpenses",
    async (payload) => {
        try {
            const response = await axios.post(userService.findAllFinalizedExpense, payload, {
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

const expenseSlice = createSlice({
    name: "expense",
    initialState: initialStateUser,
    reducers: {},

    extraReducers: (build) => {


        build.addCase(expenseCreate.fulfilled, (state, action) => {

            state.isLoading = false;
            state.expenseListUpdate = true;
        });

        build.addCase(expenseCreate.pending, (state, action) => {
            state.isLoading = true;
            state.expenseListUpdate = false;
        });


        build.addCase(expenseCreate.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });


        build.addCase(findAllExpense.fulfilled, (state, action) => {
            state.allExpense = action.payload;
            state.isLoading = false;

        });

        build.addCase(findAllExpense.pending, (state, action) => {
            state.isLoading = true;
        });


        build.addCase(findAllExpense.rejected, (state, action) => {

            state.error = action.payload;
            state.isLoading = false;
        });


        build.addCase(expenseConfirmed.fulfilled, (state, action) => {
            state.isLoading = false;
            state.expenseListUpdate = true;
        });

        build.addCase(expenseConfirmed.pending, (state, action) => {
            state.isLoading = true;
            state.expenseListUpdate = false;
        });


        build.addCase(expenseConfirmed.rejected, (state, action) => {
            state.isLoading = false;
        });


        build.addCase(expenseRejected.fulfilled, (state, action) => {
            state.isLoading = false;
            state.expenseListUpdate = true;
        });

        build.addCase(expenseRejected.pending, (state, action) => {
            state.isLoading = true;
            state.expenseListUpdate = false;
        });


        build.addCase(expenseRejected.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

        build.addCase(findAllFinalizedExpenses.fulfilled, (state, action) => {
            state.AllFinalizedExpense = action.payload;
            state.isLoading = false;

        });

        build.addCase(findAllFinalizedExpenses.pending, (state, action) => {
            state.isLoading = true;

        });

        build.addCase(findAllFinalizedExpenses.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

    },
});

export default expenseSlice.reducer;
