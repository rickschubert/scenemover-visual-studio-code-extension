import {
  createSlice,
  createSelector,
  PayloadAction,
  // createAsyncThunk
} from "@reduxjs/toolkit";
import { Scene, SceneAfterTransition } from "../../api/getScenes";

import { RootState } from "../configureStore";

export type UIState = {
  scenes: Scene[] | SceneAfterTransition[];
};

export const initialUIState: UIState = {
  scenes: [],
};

/* Reducers */
const setScenesReducer = (state: UIState, action: PayloadAction<Scene[] | SceneAfterTransition[]>) => {
  state.scenes = action.payload;
};

/* Root reducer */
const slice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    setScenes: setScenesReducer,
  },
});

export const { reducer } = slice;

export const { setScenes } = slice.actions;

export const scenesSelector = createSelector(
  (state: RootState) => state.UI.scenes,
  (fullscreenMap) => fullscreenMap
);
