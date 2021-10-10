import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserItemApi = createAsyncThunk(
    'userItemApi/userItemApiFetch',
    async (id) => {
        const response = await axios.get(
            `http://localhost:3000/user_api/${id}`,
        );
        return response.data;
    },
);

const userItemApiSlice = createSlice({
    name: 'userItemApi', // ten cua action
    initialState: {
        userItemApi: {},
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getUserItemApi.pending]: (state, action) => {},
        [getUserItemApi.fulfilled]: (state, action) => {
            state.userItemApi = action.payload;
        },
        [getUserItemApi.rejected]: (state, action) => {},
    },
});

const userItemApiReducer = userItemApiSlice.reducer;

export const userItemApiSelector = (state) =>
    state.userItemApiReducer.userItemApi;

export default userItemApiReducer;
