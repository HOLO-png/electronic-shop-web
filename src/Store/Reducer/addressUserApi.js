import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAddressUserApi = createAsyncThunk(
    'addressUserApi/addressUserApiFetch',
    async () => {
        const response = await axios.get(`http://localhost:3000/address_api`);
        return response.data;
    },
);

export const insertAddressUserApi = createAsyncThunk(
    'addressUserApi/addressUserApiInsert',
    async (obj) => {
        const newAddressUserApi = {
            ...obj,
            id: nanoid(),
        };
        await axios.post(
            'http://localhost:3000/address_api',
            newAddressUserApi,
        );
        return newAddressUserApi;
    },
);

export const deleteAddressUserApi = createAsyncThunk(
    'addressUserApi/addressUserApiDelete',
    async (id) => {
        await axios.delete(`http://localhost:3000/address_api/${id}`);
        return id;
    },
);

export const updateAddressUserApi = createAsyncThunk(
    'addressUserApi/addressUserApiUpdate',
    async (obj) => {
        const newAddressUserApi = {
            ...obj,
        };

        await axios.put(
            `http://localhost:3000/address_api/${obj.id}`,
            newAddressUserApi,
        );
        return newAddressUserApi;
    },
);

const addressUserApiSlice = createSlice({
    name: 'addressUserApi', // ten cua action
    initialState: {
        addressUserApi: [],
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getAddressUserApi.pending]: (state, action) => {},
        [getAddressUserApi.fulfilled]: (state, action) => {
            state.addressUserApi = action.payload;
        },
        [getAddressUserApi.rejected]: (state, action) => {},

        [insertAddressUserApi.pending]: (state, action) => {},
        [insertAddressUserApi.fulfilled]: (state, action) => {
            state.addressUserApi.unshift(action.payload);
        },
        [insertAddressUserApi.rejected]: (state, action) => {},

        [updateAddressUserApi.pending]: (state, action) => {},
        [updateAddressUserApi.fulfilled]: (state, action) => {
            state.addressUserApi = state.addressUserApi.map(function (item) {
                return item.id === action.payload.id ? action.payload : item;
            });
        },
        [updateAddressUserApi.rejected]: (state, action) => {},

        [deleteAddressUserApi.pending]: (state, action) => {},
        [deleteAddressUserApi.fulfilled]: (state, action) => {
            state.addressUserApi = state.addressUserApi.filter(function (item) {
                return item.id !== action.payload;
            });
        },
        [deleteAddressUserApi.rejected]: (state, action) => {},
    },
});

const addressUserApiReducer = addressUserApiSlice.reducer;

export const addressUserApiSelector = (state) =>
    state.addressUserApiReducer.addressUserApi;

export default addressUserApiReducer;
