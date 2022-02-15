import React from "react";

export default function Scene({heading = ""}: {heading?: string}) {
  return (
    <div className="scene">
        <p className="scene-heading">Scene heading {heading}</p>
    </div>
  );
}
