import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

window.addEventListener('message', event => {

    const message = event.data; // The JSON data our extension sent

    switch (message.command) {
        case 'sendSceneList':
            ReactDOM.render(<h1>something happend</h1>, document.getElementById("root") as HTMLElement);
            break;
    }
})

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
