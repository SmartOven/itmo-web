import {createSlice} from '@reduxjs/toolkit';
import {localStorageGetBoolean} from "../constants.ts";

// TODO Убрать лишнее
interface AppState {
    asideHeaderCompact: boolean;
}

const initialState: AppState = {
    asideHeaderCompact: localStorageGetBoolean("asideHeaderCompact"),
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        switchCompact(state) {
            const value = !state.asideHeaderCompact
            state.asideHeaderCompact = value
            localStorage.setItem("asideHeaderCompact", String(value))
        },
    }
});

export const {switchCompact} = appSlice.actions;
export default appSlice.reducer;
