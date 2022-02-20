import {
    createSlice,
    createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';
import { Scene } from '../../api/getScenes';
import {arrayMoveImmutable} from 'array-move';

import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type UIState = {
    scenes: Scene[];
};

export const initialUIState: UIState = {
    scenes: [],
};

interface SceneTransition {
    newIndex: number;
    file: string;
}

const slice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        setScenes: (state, action: PayloadAction<Scene[]>) => {
            state.scenes = action.payload
        },
        moveScene: (state, action: PayloadAction<SceneTransition>) => {
            const { newIndex, file } = action.payload;
            const sceneThatMoves = state.scenes.findIndex(scene => scene.file === file);
            state.scenes = arrayMoveImmutable(state.scenes, sceneThatMoves, newIndex);
        }
    },
});

const { reducer } = slice;

export const { setScenes, moveScene } = slice.actions;

export const scenesSelector = createSelector(
    (state: RootState) => state.UI.scenes,
    (fullscreenMap) => fullscreenMap
);

export default reducer;
