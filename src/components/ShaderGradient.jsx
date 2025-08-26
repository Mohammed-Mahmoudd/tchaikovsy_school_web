// src/components/BackgroundShader.js
"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function BackgroundShader() {
  return (
    <div
      style={{
        position: "fixed", // ثابتة
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // تخليها في الخلفية ورا أي content
      }}
    >
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
        }}
        lazyLoad={undefined}
        fov={87}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={0}
          uSpeed={0.1}
          uStrength={1}
          uDensity={1.1}
          uFrequency={5.5}
          uAmplitude={1.4}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          color1="#000000"
          color2="#a3a3a3"
          color3="#000000"
          reflection={0.1}
          // View (camera) props
          cAzimuthAngle={0}
          cPolarAngle={140}
          cDistance={7.1}
          cameraZoom={17.3}
          // Effect props
          lightType="3d"
          brightness={1.1}
          envPreset="city"
          grain="off"
          // Tool props
          toggleAxis={undefined}
          zoomOut={undefined}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
