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
        setScenes: (state) => {
            state.scenes = [{
                title: "lalala",
                content: "something else"
            }];
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
