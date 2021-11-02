import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCartProduct = createAsyncThunk(
    'cartProduct/cartProductFetch',
    async () => {
        const response = await axios.get(`http://localhost:3000/cart_product`);
        return response.data;
    },
);

export const insertCartProduct = createAsyncThunk(
    'cartProduct/cartProductInsert',
    async (obj) => {
        const newCartProduct = {
            id: nanoid(),
            ...obj,
        };
        await axios.post('http://localhost:3000/cart_product', newCartProduct);
        return newCartProduct;
    },
);

export const updateCartProduct = createAsyncThunk(
    'cartProduct/cartProductUpdate',
    async (obj) => {
        const newCartProduct = {
            ...obj,
        };
        await axios.put(
            `http://localhost:3000/cart_product/${obj.id}`,
            newCartProduct,
        );
        return newCartProduct;
    },
);

export const deleteCartProductAllApi = createAsyncThunk(
    'cartProduct/cartProductAllRemove',
    async (obj) => {
        let arrProduct = [];
        setTimeout(async () => {
            await axios.delete(`http://localhost:3000/cart_product/${obj.id}`);
            arrProduct.push(obj);
        }, 1000);

        return arrProduct;
    },
);

const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState: {
        cartProducts: [],
    },
    reducers: {},
    extraReducers: {
        // get cart product
        [getCartProduct.pending]: (state, action) => {},
        [getCartProduct.fulfilled]: (state, action) => {
            state.cartProducts = action.payload.reverse();
        },
        [getCartProduct.rejected]: (state, action) => {},

        // insert cart product
        [insertCartProduct.pending]: (state, action) => {},
        [insertCartProduct.fulfilled]: (state, action) => {
            state.cartProducts.unshift(action.payload);
        },
        [insertCartProduct.rejected]: (state, action) => {},

        // update cart product
        [updateCartProduct.pending]: (state, action) => {},
        [updateCartProduct.fulfilled]: (state, action) => {
            state.cartProducts = state.cartProducts.map(function (item) {
                return item.id === action.payload.id ? action.payload : item;
            });
        },
        [updateCartProduct.rejected]: (state, action) => {},

        //delete coins product all
        [deleteCartProductAllApi.pending]: (state, action) => {},
        [deleteCartProductAllApi.fulfilled]: (state, action) => {
            state.cartProducts = state.cartProducts.filter(
                (ar) => !action.payload.find((rm) => rm.id === ar.id),
            );
        },
        [deleteCartProductAllApi.rejected]: (state, action) => {},
    },
});

const cartProductsReducer = cartProductsSlice.reducer;

export const cartProductsSelector = (state) =>
    state.cartProductsReducer.cartProducts;

export const { handleAmountProduct } = cartProductsSlice.actions;

export default cartProductsReducer;
