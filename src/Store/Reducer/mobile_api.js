import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMobilesApi = createAsyncThunk(
    'mobiles/mobilesFetch',
    async () => {
        const response = await axios.get(`http://localhost:3000/mobile_api`);
        return response.data;
    },
);

const mobilesSlice = createSlice({
    name: 'mobiles', // ten cua action
    initialState: {
        mobiles: [],
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getMobilesApi.pending]: (state, action) => {},
        [getMobilesApi.fulfilled]: (state, action) => {
            state.mobiles = action.payload;
        },
        [getMobilesApi.rejected]: (state, action) => {},
    },
});

const mobilesReducer = mobilesSlice.reducer;

export const mobilesSelector = (state) => state.mobilesReducer.mobiles;

export default mobilesReducer;
