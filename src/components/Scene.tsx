import React from "react";

export default function Scene({title = "", content = ""}: {title: string, content: string}) {
  return (
    <div className="scene">
        {/* @ts-ignore */}
        <p className="scene-heading">{title}</p>
        <p className="scene-content">{content}</p>
    </div>
  );
}
