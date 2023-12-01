import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TableData} from "../../components/table/TableForm.tsx";

const loadLastSavedTable = () => {
    const lastSavedTableString = localStorage.getItem('lastSavedTable');
    if (!lastSavedTableString) {
        return null
    }
    return JSON.parse(lastSavedTableString);
}

interface AppState {
    activePageHref: string;
    lastSavedTable: TableData | null;
}

const initialState: AppState = {
    activePageHref: window.location.pathname,
    lastSavedTable: loadLastSavedTable(),
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveHref(state, action: PayloadAction<string>) {
            state.activePageHref = action.payload;
        },
        setLastSavedTable(state, action: PayloadAction<TableData>) {
            state.lastSavedTable = action.payload;
            localStorage.setItem('lastSavedTable', JSON.stringify(action.payload));
        },
    }
});

export const {setActiveHref, setLastSavedTable} = appSlice.actions;
export default appSlice.reducer;
