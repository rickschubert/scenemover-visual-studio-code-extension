import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { scenesSelector, setScenes, UIState } from "../store/reducers/UI";
import { transitionScene as transitionSceneViaAPI } from "../api/getScenes";
import { DRAGGABLE_ITEMTYPES } from "../container/constants";
import { IDraggedScene } from "./Scene";

export const DropBox = ({ sceneIndex, children }: {sceneIndex: number, children: React.ReactNode}) => {
  const dispatch = useDispatch();
  const scenes: UIState["scenes"] = useSelector(scenesSelector);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DRAGGABLE_ITEMTYPES.SCENE,
      drop: async (item: IDraggedScene, monitor) => {
        console.info("I was dropped!", {
          item,
          monitor,
          dropResult: monitor.getDropResult(),
          getItem: monitor.getItem(),
        });
        console.info({react_store_in_drop: scenes})
        console.info("This is where I was dropped AT", { sceneIndex });
        console.info("The file that should be moved", scenes[item.index].file);
        const fileToMove = scenes[item.index].file;
        const newScenes = await transitionSceneViaAPI({newIndex: sceneIndex, fileToMove});
        console.warn("newScenes inside drop", newScenes);
        dispatch(setScenes(newScenes));
      },
      collect: (monitor) => ({
        isOver: Boolean(monitor.isOver()),
      }),
    }),
    [sceneIndex, scenes]
  );

  return (
    <div ref={drop}>
      {isOver && <div className="separation-line" />}
      {children}
      {isOver && <div className="separation-line" />}
    </div>
  );
};
