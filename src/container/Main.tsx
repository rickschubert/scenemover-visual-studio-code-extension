import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Topbar from "../components/Topbar";
import Scene from "../components/Scene";
import { getScenes } from "../api/getScenes";
import {
  setScenes,
  scenesSelector,
} from '../store/reducers/UI';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TutorialApp } from "../components/TutorialApp";

export const Main = () => {

  const dispatch = useDispatch();

  const getScenesAsync = async () => {
    getScenes().then((loadedScenes) => {
      dispatch(setScenes(loadedScenes));
    })
  }

  React.useEffect(() => {
    getScenesAsync()
  }, [])

  const scenes = useSelector(scenesSelector);

  return (
    <>
        <Topbar />
        <DndProvider backend={HTML5Backend}>
          <TutorialApp />
          {/* {scenes && scenes.map((scene) => ( <Scene key={Math.random()} {...scene} />))} */}
        </DndProvider>
    </>
  );
}
