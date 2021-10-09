import { createSlice } from '@reduxjs/toolkit';

const searchSimilarSlice = createSlice({
    name: 'searchSimilar', // ten cua action
    initialState: {
        searchSimilar: [],
    }, // gia tri ban dau cua state
    reducers: {
        handleSearchMobileSimilar: (state, action) => {
            const { mobile_api, dataSearchToObj } = action.payload;
            state.searchSimilar = mobile_api.filter((item) => {
                return item.description.trademark === dataSearchToObj.trademark;
            });
        },
        handleSearchLaptopSimilar: (state, action) => {
            const { laptop_api, dataSearchToObj } = action.payload;
            state.searchSimilar = laptop_api.filter((item) => {
                return item.description.trademark === dataSearchToObj.trademark;
            });
        },
        handleSearchTabletSimilar: (state, action) => {
            const { tablet_api, dataSearchToObj } = action.payload;
            state.searchSimilar = tablet_api.filter((item) => {
                return item.description.trademark === dataSearchToObj.trademark;
            });
        },
    },
});

const searchSimilarReducer = searchSimilarSlice.reducer;

export const searchSimilarSelector = (state) =>
    state.searchSimilarReducer.searchSimilar;

export const {
    handleSearchMobileSimilar,
    handleSearchLaptopSimilar,
    handleSearchTabletSimilar,
} = searchSimilarSlice.actions;

export default searchSimilarReducer;
