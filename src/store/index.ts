import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import filterReducer from './features/filter/filterSlice';
import productsReducer from './features/products/productsSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        products: productsReducer,
    },
});
setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

