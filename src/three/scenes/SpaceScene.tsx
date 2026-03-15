import { Environment, ContactShadows } from "@react-three/drei";
import LaptopModel from "../models/LaptopModel";

export default function SpaceScene() {
  return (
    <>
      <Environment preset="city" />
      
      <group position={[0, 0, 0]} rotation={[0.2, -0.4, 0]}>
        <LaptopModel />
      </group>

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}
