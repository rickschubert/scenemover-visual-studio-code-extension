import {
  createSlice,
  createSelector,
  PayloadAction,
  // createAsyncThunk
} from "@reduxjs/toolkit";
import { Scene } from "../../api/getScenes";
import { arrayMoveImmutable } from "array-move";

import { RootState } from "../configureStore";

export type UIState = {
  scenes: Scene[];
};

export const initialUIState: UIState = {
  scenes: [],
};

interface SceneTransition {
  newIndex: number;
  oldIndex: number;
}

const slice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    setScenes: (state, action: PayloadAction<Scene[]>) => {
      state.scenes = action.payload;
    },
    moveScene: (state, action: PayloadAction<SceneTransition>) => {
      const { newIndex, oldIndex } = action.payload;
      state.scenes = arrayMoveImmutable(state.scenes, oldIndex, newIndex);
    },
  },
});

export const { reducer } = slice;

export const { setScenes, moveScene } = slice.actions;

export const scenesSelector = createSelector(
  (state: RootState) => state.UI.scenes,
  (fullscreenMap) => fullscreenMap
);
