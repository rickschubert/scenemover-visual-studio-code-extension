import React from "react";
import { useDrop } from 'react-dnd'
import { DRAGGABLE_ITEMTYPES } from "../container/constants";

export default function DropBox() {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: DRAGGABLE_ITEMTYPES.SCENE,
        drop: () => console.error("I was dropped!"),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), [])

  return (
    <div ref={drop}>
        dropBox
        {isOver && <p>isOver()===true</p>}
    </div>
  );
}
