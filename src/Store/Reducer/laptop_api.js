import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLaptopsApi = createAsyncThunk(
    'laptops/laptopsFetch',
    async () => {
        const response = await axios.get(`http://localhost:3000/laptop_api`);
        return response.data;
    },
);

const laptopsSlice = createSlice({
    name: 'laptops', // ten cua action
    initialState: {
        laptops: [],
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getLaptopsApi.pending]: (state, action) => {},
        [getLaptopsApi.fulfilled]: (state, action) => {
            state.laptops = action.payload;
        },
        [getLaptopsApi.rejected]: (state, action) => {},
    },
});

const laptopsReducer = laptopsSlice.reducer;

export const laptopsSelector = (state) => state.laptopsReducer.laptops;

export default laptopsReducer;
