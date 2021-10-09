import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTabletsApi = createAsyncThunk(
    'tablets/tabletsFetch',
    async () => {
        const response = await axios.get(`http://localhost:3000/tablet_api`);
        return response.data;
    },
);

const tabletsSlice = createSlice({
    name: 'tablets', // ten cua action
    initialState: {
        tablets: [],
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getTabletsApi.pending]: (state, action) => {},
        [getTabletsApi.fulfilled]: (state, action) => {
            state.tablets = action.payload;
        },
        [getTabletsApi.rejected]: (state, action) => {},
    },
});

const tabletsReducer = tabletsSlice.reducer;

export const tabletsSelector = (state) => state.tabletsReducer.tablets;

export default tabletsReducer;
