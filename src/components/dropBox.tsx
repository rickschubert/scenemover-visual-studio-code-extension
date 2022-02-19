import React from "react";
import { useDrop } from 'react-dnd'
import { DRAGGABLE_ITEMTYPES } from "../container/constants";

export default function DropBox({children}: any) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: DRAGGABLE_ITEMTYPES.SCENE,
        drop: (item, monitor) => console.error("I was dropped!", {item, monitor}),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), [])

  return (
    <div ref={drop}>
        {isOver && <p>isOver()===true</p>}
        {children}
    </div>
  );
}
