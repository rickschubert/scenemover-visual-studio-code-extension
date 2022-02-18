import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  fullscreenMapSelector,
  isFullscreenMapToggled,
} from '../store/reducers/UI';

export default function Scene({heading = ""}: {heading?: string}) {
  const dispatch = useDispatch();
  const fullscreenMap = useSelector(fullscreenMapSelector);
  console.log({fullscreenMap})
  console.log({fullscreenMap})
  return (
    <div className="scene">
        <button name="change it" onClick={()=>dispatch(isFullscreenMapToggled())}></button>
        {!fullscreenMap ? 'Active' : 'Not active'}
        <p className="scene-heading"> Scene heading {heading}</p>
    </div>
  );
}
