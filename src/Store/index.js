import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import mobilesReducer from './Reducer/mobile_api';
import laptopsReducer from './Reducer/laptop_api';
import productItemReducer from './Reducer/product';
import imgImportReducer from './Reducer/handleImgPrd';
import commentsUserReducer from './Reducer/comments_user';
import currentProductReducer from './Reducer/current_product';
import storage from 'redux-persist/lib/storage';
import tabletsReducer from './Reducer/tablet_api';
import cartProductsReducer from './Reducer/cart';
import totalProductsReducer from './Reducer/totalProduct';
import searchItemReducer from './Reducer/searchItem';
import addressApiReducer from './Reducer/apiAddress';
import userApiReducer from './Reducer/userApi';
import addressUserApiReducer from './Reducer/addressUserApi';
import themeReducer from './Reducer/setTheme';
import searchSimilarReducer from './Reducer/searchSimilar';
import userItemApiReducer from './Reducer/getUserItemApi';

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    productStatus: currentProductReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: {
        mobilesReducer,
        laptopsReducer,
        tabletsReducer,
        productItemReducer,
        imgImportReducer,
        commentsUserReducer,
        cartProductsReducer,
        totalProductsReducer,
        persistedReducer,
        searchItemReducer,
        addressApiReducer,
        userApiReducer,
        addressUserApiReducer,
        themeReducer,
        searchSimilarReducer,
        userItemApiReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});
export const persistor = persistStore(store);
export default store;
