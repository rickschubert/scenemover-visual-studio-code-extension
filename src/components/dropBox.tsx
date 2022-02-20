import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { DRAGGABLE_ITEMTYPES } from "../container/constants";
import { moveScene } from "../store/reducers/UI";

export const DropBox = ({ sceneIndex, children }: any) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DRAGGABLE_ITEMTYPES.SCENE,
      drop: (item: any, monitor) => {
        console.info("I was dropped!", {
          item,
          monitor,
          dropResult: monitor.getDropResult(),
          getItem: monitor.getItem(),
        });
        console.info("This is where I was dropped AT", { sceneIndex });
        dispatch(moveScene({ newIndex: sceneIndex, oldIndex: item.index }));
      },
      collect: (monitor) => ({
        isOver: Boolean(monitor.isOver()),
      }),
    }),
    [sceneIndex]
  );

  return (
    <div ref={drop}>
      {isOver && <p>isOver()===true</p>}
      {children}
    </div>
  );
};
