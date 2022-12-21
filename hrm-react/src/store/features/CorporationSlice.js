import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import corporationService from "../../config/CorporationService";



const initialStateCorporation = {
    corporationListUpdate: false,
    returnCorporationCreate: false,
    // token: "",
    email: "",
    corporation: {

    },
    corporationList: [],
    isLoading: false,
    error: {
        code: "",
        message: "",
        fields: [],
    },
};

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

        // build.addCase(fetchUserCreate.fulfilled, (state, action) => {
        //     state.returnUserCreate = action.payload;
        //     console.log(" user create dönen değer: ", state.returnUserCreate);
        //     state.isLoadingRegister = false;
        //     state.userListUpdate = true;
        //
        // });
        // build.addCase(fetchUserCreate.pending, (state, action) => {
        //     state.isLoadingRegister = true;
        //     state.isSave = false;
        //     state.userListUpdate = false;
        // });
        // build.addCase(fetchUserCreate.rejected, (state, action) => {
        //     state.isLoadingRegister = false;
        //     state.isSave = false;
        // });

        build.addCase(findallCorporation.fulfilled, (state, action) => {
            state.corporationList = action.payload;
            state.isLoading = false;
            console.log(state.corporationList);
        });

        build.addCase(findallCorporation.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        // build.addCase(findallUser.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        //
        //
        // build.addCase(findByEmail.fulfilled, (state, action) => {
        //     state.otherUserProfile = action.payload;
        //     state.isLoading = false;
        // });
        //
        // build.addCase(findByEmail.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.isLoading = false;
        // });
        // build.addCase(findByEmail.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        //
        // build.addCase(updateuserfromuser.fulfilled, (state, action) => {
        //
        //     state.isLoading = false;
        // });
        //
        // build.addCase(updateuserfromuser.rejected, (state, action) => {
        //     state.error = action.payload;
        //     state.isLoading = false;
        // });
        // build.addCase(updateuserfromuser.pending, (state, action) => {
        //     state.isLoading = true;
        // });
    },
});

export default corporationSlice.reducer;