import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    email : ""
}

export const requestPassword = createAsyncThunk(
    "forget/requestPassword",
    async (payload) => {
        try {
            const response = await fetch("http://localhost:9098/api/v1/main/request-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
                .then((response) => response.json())
                .catch((error) => console.log(error));
            console.log("response", response);
            return response;
        } catch (err) {
            return err.response;
        }
    }
);