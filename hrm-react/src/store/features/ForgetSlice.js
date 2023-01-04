import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import mainService from "../../config/MainService";
const initialState = {
    email : ""
}

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