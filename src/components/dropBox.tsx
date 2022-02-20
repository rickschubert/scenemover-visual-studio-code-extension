import React from "react";
import { useDrop } from 'react-dnd'
import { DRAGGABLE_ITEMTYPES } from "../container/constants";

export default function DropBox({title, content, file, children}: any) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: DRAGGABLE_ITEMTYPES.SCENE,
        drop: (item, monitor) => {
          console.info("I was dropped!", {item, monitor, dropResult: monitor.getDropResult(), getItem: monitor.getItem()})
          console.info("This is where I was dropped AT", {title, content, file})
          return {
            a: "b"
          }
        },
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), [title, content, file])

  return (
    <div ref={drop}>
        {isOver && <p>isOver()===true</p>}
        {children}
    </div>
  );
}
