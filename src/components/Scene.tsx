import React from "react"
import { useDrag } from "react-dnd"
import { DRAGGABLE_ITEMTYPES } from "../container/constants"
import "../styles/scene.scss"

export interface IDraggedScene {
  index: number;
  file: string,
}

export const Scene = ({
  title,
  content,
  file,
}: {
  title: string;
  content: string;
  file: string;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DRAGGABLE_ITEMTYPES.SCENE,
    item: { file } as IDraggedScene,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    }),
  }), [file])

  return (
    <div className="scene" ref={drag}>
      <p className="scene-heading">{title}</p>
      <p className="scene-content">{content}</p>
      {isDragging && <p>I am being dragged! </p>}
    </div>
  )
}
