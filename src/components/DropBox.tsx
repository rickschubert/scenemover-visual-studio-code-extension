import React from "react"
import { useDrop } from "react-dnd"
import { useDispatch } from "react-redux"
import { setScenes } from "../store/reducers/UI"
import { transitionScene as transitionSceneViaAPI } from "../api/getScenes"
import { DRAGGABLE_ITEMTYPES } from "../container/constants"
import { IDraggedScene } from "./Scene"
import "../styles/dropBox.scss"

/* eslint-disable complexity */

export const DropBox = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch()

  const [{ isOver, isMovingForwards, canDrop }, drop] = useDrop(
    () => ({
      accept: DRAGGABLE_ITEMTYPES.SCENE,
      // eslint-disable-next-line no-unused-vars
      drop: async (item: IDraggedScene, monitor) => {
        const fileToMove = item.file
        const newScenes = await transitionSceneViaAPI({
          newIndex: index,
          fileToMove,
        })
        dispatch(setScenes(newScenes))
      },
      canDrop: (item: IDraggedScene) => {
        return item.index !== index
      },
      collect: (monitor) => ({
        isOver: Boolean(monitor.isOver()),
        isMovingForwards: monitor.getItem() && monitor.getItem().index > index,
        canDrop: Boolean(monitor.canDrop()),
      }),
    }),
    [index]
  )

  return (
    <div ref={drop}>
      {isOver && canDrop && isMovingForwards && isOver && (
        <div className="will-move" />
      )}
      {children}
      {isOver && canDrop && !isMovingForwards && <div className="will-move" />}
    </div>
  )
}
