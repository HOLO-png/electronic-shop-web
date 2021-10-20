import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const changeAddressActiveApi = createAsyncThunk(
    'addressActiveApi/addressActiveApiFetch',
    async (obj) => {
        const response = await axios.patch(
            `http://localhost:3000/address_active_api`,
            { obj },
        );
        return response.data;
    },
);

export const getAddressActiveApi = createAsyncThunk(
    'addressActiveApi/addressActiveApiFetch',
    async () => {
        const response = await axios.get(
            `http://localhost:3000/address_active_api`,
        );
        return response.data;
    },
);

const addressActiveApiSlice = createSlice({
    name: 'addressActiveApi', // ten cua action
    initialState: {
        addressActiveApi: {},
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [changeAddressActiveApi.pending]: (state, action) => {},
        [changeAddressActiveApi.fulfilled]: (state, action) => {
            state.addressActiveApi = action.payload;
        },
        [changeAddressActiveApi.rejected]: (state, action) => {},

        [getAddressActiveApi.pending]: (state, action) => {},
        [getAddressActiveApi.fulfilled]: (state, action) => {
            state.addressActiveApi = action.payload;
        },
        [getAddressActiveApi.rejected]: (state, action) => {},
    },
});

const addressActiveApiReducer = addressActiveApiSlice.reducer;

export const addressActiveApiSelector = (state) =>
    state.addressActiveApiReducer.addressActiveApi;

export default addressActiveApiReducer;
