import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function GradientBG() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: "0",
        zIndex: -1,
        height: "70vh",
        width: "100%",
      }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        brightness={3}
        cAzimuthAngle={180}
        cDistance={6.39}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#5452d7"
        color2="#a57bc3"
        color3="#ffc2e2"
        destination="onCanvas"
        embedMode="off"
        envPreset="dawn"
        format="gif"
        fov={60}
        frameRate={10}
        gizmoHelper="hide"
        grain="on"
        lightType="env"
        pixelDensity={1}
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.6}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="waterPlane"
        uAmplitude={2.9}
        uDensity={2.1}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}

