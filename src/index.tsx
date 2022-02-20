import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureAppStore, getPreloadedState } from "./store/configureStore";
import { AppContextProvider } from "./contexts/AppContextProvider";

import { Main } from "./container/Main";
import "./index.css";

const preloadedState = getPreloadedState();
const appComponent = (
  <React.StrictMode>
    <ReduxProvider store={configureAppStore(preloadedState)}>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </ReduxProvider>
  </React.StrictMode>
);
ReactDOM.render(appComponent, document.getElementById("root") as HTMLElement);
