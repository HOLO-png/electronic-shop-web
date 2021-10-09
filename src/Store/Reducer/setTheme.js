import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme', // ten cua action
    initialState: {
        theme: {
            statusLogo: false,
            bgr_main: '#f8f8f8',
            bgr_product: '#fff',
            text_color: '#000',
            text_hover: '#4267b2',
        },
    }, // gia tri ban dau cua state
    reducers: {
        handleUpdateTheme: (state, action) => {
            if (action.payload) {
                state.theme = {
                    statusLogo: true,
                    bgr_main: 'rgb(8 11 46)',
                    bgr_product: '#616f97',
                    text_color: '#fff',
                    text_hover: '#fff',
                };
            } else {
                state.theme = {
                    statusLogo: false,
                    bgr_main: '#f8f8f8',
                    bgr_product: '#fff',
                    text_color: '#000',
                    text_hover: '#4267b2',
                };
            }
        },
    },
});

const themeReducer = themeSlice.reducer;

export const themeSelector = (state) => state.themeReducer.theme;

export const { handleUpdateTheme } = themeSlice.actions;

export default themeReducer;
