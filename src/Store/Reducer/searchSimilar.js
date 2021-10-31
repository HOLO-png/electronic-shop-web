import { createSlice } from '@reduxjs/toolkit';

const searchSimilarSlice = createSlice({
    name: 'searchSimilar', // ten cua action
    initialState: {
        searchSimilar: [],
    }, // gia tri ban dau cua state
    reducers: {
        handleSearchSimilar: (state, action) => {
            const { dataSearch, dataSearchToObj } = action.payload;
            console.log(dataSearch, dataSearchToObj);

            state.searchSimilar = dataSearch.filter((item) => {
                return item.description.trademark === dataSearchToObj.trademark;
            });
        },
    },
});

const searchSimilarReducer = searchSimilarSlice.reducer;

export const searchSimilarSelector = (state) =>
    state.searchSimilarReducer.searchSimilar;

export const { handleSearchSimilar } = searchSimilarSlice.actions;

export default searchSimilarReducer;
