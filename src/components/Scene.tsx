import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  scenesSelector,
  setScenes,
} from '../store/reducers/UI';

export default function Scene({heading = ""}: {heading?: string}) {
  const dispatch = useDispatch();
  const scenes = useSelector(scenesSelector);
  console.log({scenes})
  return (
    <div className="scene">
        <button name="change it" onClick={()=>dispatch(setScenes())}></button>
        {/* @ts-ignore */}
        <p className="scene-heading"> Scene heading {JSON.stringify(scenes[0])}</p>
    </div>
  );
}
