import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserApi = createAsyncThunk('userApi/userApiFetch', async () => {
    const response = await axios.get(`http://localhost:3000/user_api/`);
    return response.data;
});

export const insertUserApi = createAsyncThunk(
    'UserApi/UserApiInsert',
    async (obj) => {
        const newUserApi = {
            ...obj,
        };
        await axios.post('http://localhost:3000/user_api', newUserApi);
        return newUserApi;
    },
);

export const updateUserApi = createAsyncThunk(
    'UserApi/UserApiUpdate',
    async (obj) => {
        const newUserApi = {
            ...obj,
        };
        console.log(newUserApi);

        await axios.put(`http://localhost:3000/user_api/${obj.id}`, newUserApi);
        return newUserApi;
    },
);

const userApiSlice = createSlice({
    name: 'userApi', // ten cua action
    initialState: {
        userApi: [],
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getUserApi.pending]: (state, action) => {},
        [getUserApi.fulfilled]: (state, action) => {
            state.userApi = action.payload;
        },
        [getUserApi.rejected]: (state, action) => {},

        [insertUserApi.pending]: (state, action) => {},
        [insertUserApi.fulfilled]: (state, action) => {
            state.userApi.unshift(action.payload);
        },
        [insertUserApi.rejected]: (state, action) => {},

        [updateUserApi.pending]: (state, action) => {},
        [updateUserApi.fulfilled]: (state, action) => {
            state.userApi = state.userApi.map(function (item) {
                return item.id === action.payload.id ? action.payload : item;
            });
        },
        [updateUserApi.rejected]: (state, action) => {},
    },
});

const userApiReducer = userApiSlice.reducer;

export const userApiSelector = (state) => state.userApiReducer.userApi;

export default userApiReducer;
