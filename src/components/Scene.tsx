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
        {/* @ts-ignore */}
        <p className="scene-heading"> Scene heading {JSON.stringify(scenes)}</p>
    </div>
  );
}
