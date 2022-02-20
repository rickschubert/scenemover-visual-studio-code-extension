import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Topbar } from "../components/Topbar";
import { Scene } from "../components/Scene";
import { getScenes } from "../api/getScenes";
import { setScenes, scenesSelector, UIState } from "../store/reducers/UI";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropBox } from "../components/dropBox";

export const Main = () => {
  const dispatch = useDispatch();

  const getScenesAsync = async () => {
    const loadedScenes = await getScenes();
    dispatch(setScenes(loadedScenes));
  };

  React.useEffect(() => {
    getScenesAsync();
  }, []);

  const scenes: UIState["scenes"] = useSelector(scenesSelector);

  return (
    <>
      <Topbar />
      <DndProvider backend={HTML5Backend}>
        {scenes &&
          scenes.map((scene, index) => (
            <DropBox key={index} sceneIndex={index}>
              <Scene key={index} {...scene} index={index} />
            </DropBox>
          ))}
      </DndProvider>
    </>
  );
};
