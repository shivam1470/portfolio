import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import SceneLights from "../lights/SceneLights";

type Props = {
  children: React.ReactNode;
};

export default function CanvasContainer({ children }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      className="w-full h-full"
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneLights />
        {children}
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
