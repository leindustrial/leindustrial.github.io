import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { gradientPresets } from "../lib/gradientPresets.js"

export default function GradientBG({
  height = "80vh",
  preset = "jellyfish",
}) {
  const config = gradientPresets[preset] ?? gradientPresets.jellyfish
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: "0",
        zIndex: -1,
        height,
        width: "100%",
      }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient {...config} />
    </ShaderGradientCanvas>
  );
}
