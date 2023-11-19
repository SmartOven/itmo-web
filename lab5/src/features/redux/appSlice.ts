import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
    activePageHref: string;
}

const initialState: AppState = {
    activePageHref: window.location.pathname,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveHref(state, action: PayloadAction<string>) {
            state.activePageHref = action.payload;
        },
    }
});

export const {setActiveHref} = appSlice.actions;
export default appSlice.reducer;
