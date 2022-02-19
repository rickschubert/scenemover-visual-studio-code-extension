import React from "react";
import { useDispatch } from 'react-redux';
import Topbar from "../components/Topbar";
import Scene from "../components/Scene";
import { getScenes } from "../api/getScenes";
import {
  setScenes,
} from '../store/reducers/UI';

export const Main = () => {

  const dispatch = useDispatch();

  const getScenesAsync = async () => {
    getScenes().then((loadedScenes) => {
      dispatch(setScenes());
    })
  }

  React.useEffect(() => {
    getScenesAsync()
  }, [])

  return (
    <>
        <Topbar />
        <Scene heading="this-is-the-scene-heading" />
    </>
  );
}
