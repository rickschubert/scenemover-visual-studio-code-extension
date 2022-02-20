import { PartialRootState } from "./configureStore";

import { initialUIState, UIState } from "../store/reducers/UI";

const getPreloadedUIState = (): UIState => {
  return {
    ...initialUIState,
  };
};

export const getPreloadedState = (): PartialRootState => {
  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    UI: getPreloadedUIState(),
  };
};
