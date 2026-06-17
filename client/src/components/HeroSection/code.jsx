import React, { useEffect } from "react";
import "./code.css";

function CodeAnimation() {
 useEffect(() => {
  document
    .querySelectorAll(".glow-path1, .glow-path2")
    .forEach((path) => {
      const length = path.getTotalLength();

      path.style.setProperty("--length", length);
    });
}, []);
  return (
    
    <svg
      
      width="300"
      height="300"
      viewBox="0 0 250 250"
      className="code-svg "
    >
      {/* Left < */}
      <path
        className="base-path"
        d="M90 70 L40 125 L90 180"
      />
      <path
        className="glow-path1 glow-path"
        d="M90 70 L40 125 L90 180"
      />

      {/* Slash / */}
      <path
        className="base-path"
        d="M145 60 L115 190"
      />
      <path
        className="glow-path "
        d="M145 60 L115 190"
      />

      {/* Right > */}
      <path
        className="base-path"
        d="M160 70 L210 125 L160 180"
      />
      <path
        className="glow-path glow-path2"
        d="M160 70 L210 125 L160 180"
      />
    </svg>
    
  );
}

export default CodeAnimation;