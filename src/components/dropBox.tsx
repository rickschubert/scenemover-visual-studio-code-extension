import React from "react"
import { useDrop } from "react-dnd"
import { useDispatch } from "react-redux"
import { setScenes } from "../store/reducers/UI"
import { transitionScene as transitionSceneViaAPI } from "../api/getScenes"
import { DRAGGABLE_ITEMTYPES } from "../container/constants"
import { IDraggedScene } from "./Scene"

export const DropBox = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch()

  const [{ isOver }, drop] = useDrop(
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
      collect: (monitor) => ({
        isOver: Boolean(monitor.isOver()),
      }),
    }),
    [index]
  )

  return (
    <div ref={drop}>
      {isOver && <div className="separation-line" />}
      {children}
      {isOver && <div className="separation-line" />}
    </div>
  )
}
