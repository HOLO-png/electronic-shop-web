import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCommentsUserApi = createAsyncThunk(
    'commentsUser/commentsUserFetch',
    async (productId) => {
        const response = await axios.get(
            `http://localhost:3000/comments_user?id_product=${productId}`,
        );
        return response.data;
    },
);

export const insertCmt = createAsyncThunk(
    'commentsUser/commentsUserInsert',
    async (obj) => {
        const newCommentsUser = {
            id: nanoid(),
            ...obj,
        };
        await axios.post(
            'http://localhost:3000/comments_user',
            newCommentsUser,
        );
        return newCommentsUser;
    },
);

export const updateCmtItem = createAsyncThunk(
    'commentsUser/commentsUserUpdate',
    async (obj) => {
        const newCommentsUser = {
            ...obj,
        };
        await axios.put(
            `http://localhost:3000/comments_user/${obj.id}`,
            newCommentsUser,
        );
        return newCommentsUser;
    },
);

const commentsUserSlice = createSlice({
    name: 'commentsUser',
    initialState: {
        comments: [],
    },
    reducers: {},
    extraReducers: {
        // get cmts
        [getCommentsUserApi.pending]: (state, action) => {},
        [getCommentsUserApi.fulfilled]: (state, action) => {
            state.comments = action.payload;
        },
        [getCommentsUserApi.rejected]: (state, action) => {},
        // insert cmt
        [insertCmt.pending]: (state, action) => {},
        [insertCmt.fulfilled]: (state, action) => {
            state.comments.push(action.payload);
        },
        [insertCmt.rejected]: (state, action) => {},
        // update cmt
        [updateCmtItem.pending]: (state, action) => {},
        [updateCmtItem.fulfilled]: (state, action) => {
            state.comments = state.comments.map(function (item) {
                return item.id_user === action.payload.id_user &&
                    item.id_product === action.payload.id_product
                    ? action.payload
                    : item;
            });
        },
        [updateCmtItem.rejected]: (state, action) => {},
    },
});

const commentsUserReducer = commentsUserSlice.reducer;

export const commentsUserSelector = (state) =>
    state.commentsUserReducer.comments;

// export const { handleInsertCmt } = commentsUserSlice.actions;

export default commentsUserReducer;
