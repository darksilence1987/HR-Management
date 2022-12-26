import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import mailService from "../../config/MailService";


const initialStateMail = {

    isAuthanticated: false,

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

export const sendMail = createAsyncThunk(
    "mail/sendmail",
    async (payload) => {
        try {
            const response = await axios.post(mailService.sendmail,  payload,{
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

const mailSlice = createSlice({
    name: "mail",
    initialState: initialStateMail,

    reducers: {},
    extraReducers: (build) => {

        build.addCase(sendMail.fulfilled, (state, action) => {

            state.isLoading = false;

            console.log("deneme1234344")


        });

        build.addCase(sendMail.pending, (state, action) => {
            state.isLoading = true;
        });

        build.addCase(sendMail.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { } =
    mailSlice.actions;

export default mailSlice.reducer;
