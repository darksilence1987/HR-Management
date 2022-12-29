import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import corporationService from "../../config/CorporationService";
import userService from "../../config/UserService";



const initialStateCorporation = {
    corporationListUpdate: false,
    returnCorporationCreate: false,
    // token: "",
    email: "",
    corporation: {

    },
    corporationList: [],
    isLoading: false,
    alertMessage: "",
    isSave:false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};

export const fetchcreateCorporation = createAsyncThunk(
    "corporation/createCorporation",

    async (payload) => {
        try {
            const response = await fetch(corporationService.createCorporation, {
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

export const findallCorporation = createAsyncThunk(
    "corporation/findall",
    async () => {
        try {
            const response = await axios.get(corporationService.findall, {
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


const corporationSlice = createSlice({
    name: "corporation",
    initialState: initialStateCorporation,
    reducers: {},

    extraReducers: (build) => {


        build.addCase(findallCorporation.fulfilled, (state, action) => {
            state.corporationList = action.payload;
            state.isLoading = false;
        });

        build.addCase(findallCorporation.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

        build.addCase(findallCorporation.pending, (state, action) => {

            state.isLoading = true;
        });


        build.addCase(fetchcreateCorporation.fulfilled, (state, action) => {
            state.corporationList = action.payload;
            state.isLoading = false;
            state.corporationListUpdate=  true;
            console.log(state.corporationList);
        });

        build.addCase(fetchcreateCorporation.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });

        build.addCase(fetchcreateCorporation.pending, (state, action) => {

            state.corporationListUpdate = false;
            state.isLoading = true;
        });


    },
});

export default corporationSlice.reducer;