import {
    createSlice,
    createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';
import { Scene } from '../../api/getScenes';

import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type UIState = {
    scenes?: Scene[];
};

export const initialUIState: UIState = {
    scenes: [],
};

const slice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        setScenes: (state, action: PayloadAction<Scene[]>) => {
            console.warn({actionPayload: action.payload})
            state.scenes = action.payload
        },
    },
});

const { reducer } = slice;

export const { setScenes } = slice.actions;

export const scenesSelector = createSelector(
    (state: RootState) => state.UI.scenes,
    (fullscreenMap) => fullscreenMap
);

export default reducer;
