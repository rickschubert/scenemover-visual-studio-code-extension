import React from "react"
import { useDrop } from "react-dnd"
import { useDispatch, useSelector } from "react-redux"
import { scenesSelector, setScenes, UIState } from "../store/reducers/UI"
import { transitionScene as transitionSceneViaAPI } from "../api/getScenes"
import { DRAGGABLE_ITEMTYPES } from "../container/constants"
import { IDraggedScene } from "./Scene"

export const DropBox = ({
  sceneIndex,
  children,
}: {
  sceneIndex: number;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch()
  const scenes: UIState["scenes"] = useSelector(scenesSelector)

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DRAGGABLE_ITEMTYPES.SCENE,
      // eslint-disable-next-line no-unused-vars
      drop: async (item: IDraggedScene, monitor) => {
        const fileToMove = scenes[item.index].file
        const newScenes = await transitionSceneViaAPI({
          newIndex: sceneIndex,
          fileToMove,
        })
        dispatch(setScenes(newScenes))
      },
      collect: (monitor) => ({
        isOver: Boolean(monitor.isOver()),
      }),
    }),
    [sceneIndex, scenes]
  )

  return (
    <div ref={drop}>
      {isOver && <div className="separation-line" />}
      {children}
      {isOver && <div className="separation-line" />}
    </div>
  )
}
