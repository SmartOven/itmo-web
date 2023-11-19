import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice.ts';
import appReducer from './appSlice.ts';

export const store = configureStore({
    reducer: {
        app: appReducer,
        theme: themeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;