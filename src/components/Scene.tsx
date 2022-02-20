import React from "react";
import { useDrag } from 'react-dnd'
import { DRAGGABLE_ITEMTYPES } from "../container/constants";

export default function Scene({title, content, file}: {title: string, content: string, file: string}) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: DRAGGABLE_ITEMTYPES.SCENE,
    item: {file},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div className="scene" ref={drag}>
        {/* @ts-ignore */}
        <p className="scene-heading">{title}</p>
        <p className="scene-content">{content}</p>
        {isDragging && <p>I am being dragged! </p>}
    </div>
  );
}
