import React from "react"
import { useDrag } from "react-dnd"
import { DRAGGABLE_ITEMTYPES } from "../container/constants"

export interface IDraggedScene {
  index: number;
}

export const Scene = ({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DRAGGABLE_ITEMTYPES.SCENE,
    item: { index } as IDraggedScene,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    }),
  }))

  return (
    <div className="scene" ref={drag}>
      <p className="scene-heading">{title}</p>
      <p className="scene-content">{content}</p>
      {isDragging && <p>I am being dragged! </p>}
    </div>
  )
}
