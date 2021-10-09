import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearchItemUserApi = createAsyncThunk(
    'searchItem/searchItemFetch',
    async () => {
        const response = await axios.get(`http://localhost:3000/search_item`);
        return response.data;
    },
);

export const addSearchItemUserApi = createAsyncThunk(
    'searchItem/searchItemAdd',
    async (data) => {
        const newSearchItem = {
            id: nanoid(),
            content: data,
            status: 'searchUser',
        };
        await axios.post('http://localhost:3000/search_item', newSearchItem);
        return newSearchItem;
    },
);

export const deleteSearchItemUserApi = createAsyncThunk(
    'searchItem/searchItemDelete',
    async (obj) => {
        const newCartProduct = {
            ...obj,
        };
        await axios.delete(
            `http://localhost:3000/search_item/${obj.id}`,
            newCartProduct,
        );
        return newCartProduct;
    },
);

const searchItemSlice = createSlice({
    name: 'searchItem',
    initialState: {
        searchItem: [],
    },
    reducers: {},
    extraReducers: {
        // get cmts
        [getSearchItemUserApi.pending]: (state, action) => {},
        [getSearchItemUserApi.fulfilled]: (state, action) => {
            state.searchItem = action.payload.reverse();
        },
        [getSearchItemUserApi.rejected]: (state, action) => {},

        // insert cmt
        [addSearchItemUserApi.pending]: (state, action) => {},
        [addSearchItemUserApi.fulfilled]: (state, action) => {
            state.searchItem.unshift(action.payload);
        },
        [addSearchItemUserApi.rejected]: (state, action) => {},

        //delete search item
        [deleteSearchItemUserApi.pending]: (state, action) => {},
        [deleteSearchItemUserApi.fulfilled]: (state, action) => {
            state.searchItem = state.searchItem.filter(
                (item) => item.id !== action.payload.id,
            );
        },
        [deleteSearchItemUserApi.rejected]: (state, action) => {},
    },
});

const searchItemReducer = searchItemSlice.reducer;

export const searchItemSelector = (state) => state.searchItemReducer.searchItem;

// export const { addSearchItemUser } = searchItemSlice.actions;

export default searchItemReducer;
