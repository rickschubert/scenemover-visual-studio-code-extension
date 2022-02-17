import * as React from "react";
import { getScenes } from "./api/getScenes";
import Main from "./container/Main";

class App extends React.Component {
  public render() {
    return (
      <Main />
    );
  }

  async componentDidMount() {
    const scenes = await getScenes()
    console.warn({scenes})
  }
}

export default App;
