// src/components/BackgroundShader.js
"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function BlogBackground() {
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
        fov={45}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={0}
          uSpeed={0.22}
          uStrength={0.4}
          uDensity={1.1}
          uFrequency={5.5}
          uAmplitude={1.4}
          positionX={0}
          positionY={-0.15}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          color1="#000000"
          color2="#595959"
          color3="#000000"
          reflection={0.1}
          // View (camera) props
          cAzimuthAngle={60}
          cPolarAngle={90}
          cDistance={7.1}
          cameraZoom={15.3}
          // Effect props
          lightType="3d"
          brightness={1.5}
          envPreset="dawn"
          grain="off"
          // Tool props
          toggleAxis={undefined}
          zoomOut={undefined}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>{" "}
    </div>
  );
}
