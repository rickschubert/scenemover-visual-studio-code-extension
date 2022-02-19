import React from "react";
import Topbar from "../components/Topbar";
import MainContextWrapper from "./MainContext";
import Scene from "../components/Scene";

export const Main = () => {
  return (
    <MainContextWrapper>
        <Topbar />
        <Scene heading="this-is-the-scene-heading" />
    </MainContextWrapper>
  );
}
