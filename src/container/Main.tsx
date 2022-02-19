import React from "react";
import Topbar from "../components/Topbar";
import Scene from "../components/Scene";
import { getScenes } from "../api/getScenes";

export const Main = () => {

  const getScenesAsync = async () => {
    getScenes().then((loadedScenes) => {
      console.log({loadedScenes})
    })
  }

  React.useEffect(() => {
    getScenesAsync()
  })

  return (
    <>
        <Topbar />
        <Scene heading="this-is-the-scene-heading" />
    </>
  );
}
