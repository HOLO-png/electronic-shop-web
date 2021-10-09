import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductItem = createAsyncThunk(
    'product/productFetch',
    async ({ id, category }) => {
        const response = await axios.get(
            `http://localhost:3000/${category}_api/${id}`,
        );
        return response.data;
    },
);

const productItemSlice = createSlice({
    name: 'product', // ten cua action
    initialState: {
        product: {},
    }, // gia tri ban dau cua state
    reducers: {},
    extraReducers: {
        [getProductItem.pending]: (state, action) => {},
        [getProductItem.fulfilled]: (state, action) => {
            state.product = action.payload;
        },
        [getProductItem.rejected]: (state, action) => {},
    },
});

const productItemReducer = productItemSlice.reducer;

export const productItemSelector = (state) => state.productItemReducer.product;

export default productItemReducer;
