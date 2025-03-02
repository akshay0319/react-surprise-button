import React, { useState } from "react";

const SurpriseButton: React.FC = () => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const moveButtonOnApproach = (event: React.MouseEvent<HTMLDivElement>) => {
    const button = event.currentTarget.querySelector("button");
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const buffer = window.innerWidth < 600 ? 30 : 50; // Adjust margin for mobile
    if (
      mouseX > rect.left - buffer &&
      mouseX < rect.right + buffer &&
      mouseY > rect.top - buffer &&
      mouseY < rect.bottom + buffer
    ) {
      const randomTop = Math.floor(Math.random() * 70) + 15 + "%";
      const randomLeft = Math.floor(Math.random() * 70) + 15 + "%";
      setPosition({ top: randomTop, left: randomLeft });
    }
  };

  return (
    <div
      onMouseMove={moveButtonOnApproach}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#ff4757",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          transition: "top 0.3s ease, left 0.3s ease",
        }}
      >
        Surprise Me!
      </button>
    </div>
  );
};

export default SurpriseButton;
