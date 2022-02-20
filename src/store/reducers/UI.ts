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
    draggedFile: string
    droppedFile: string
}

const slice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        setScenes: (state, action: PayloadAction<Scene[]>) => {
            state.scenes = action.payload
        },
        moveScene: (state, action: PayloadAction<SceneTransition>) => {
            const { draggedFile, droppedFile } = action.payload;
            const dragged = state.scenes.findIndex(scene => scene.file === draggedFile);
            const dropped = state.scenes.findIndex(scene => scene.file === droppedFile);
            state.scenes = arrayMoveImmutable(state.scenes, dragged, dropped);
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
