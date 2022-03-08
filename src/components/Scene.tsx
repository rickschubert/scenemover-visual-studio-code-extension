import React from "react"
import { useDrag } from "react-dnd"
import { DRAGGABLE_ITEMTYPES } from "../container/constants"
import "../styles/scene.scss"

export interface IDraggedScene {
  index: number;
  file: string;
}

export const Scene = ({
  title,
  body,
  file,
  index,
}: {
  title: string;
  body: string;
  file: string;
  index: number;
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DRAGGABLE_ITEMTYPES.SCENE,
      item: { file, index } as IDraggedScene,
      collect: (monitor) => ({
        isDragging: Boolean(monitor.isDragging()),
      }),
    }),
    [file, index]
  )

  return (
    <div className="scene" ref={drag}>
      <p className="scene-heading">{title}</p>
      <p className="scene-content">{body}</p>
      {isDragging && <p>I am being dragged! </p>}
    </div>
  )
}
