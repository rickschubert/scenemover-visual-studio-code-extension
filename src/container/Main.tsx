import React from "react";
import Topbar from "../components/Topbar";
import MainContextWrapper from "./MainContext";

export default function Main() {
  return (
    <MainContextWrapper>
        <Topbar />
    </MainContextWrapper>
  );
}
