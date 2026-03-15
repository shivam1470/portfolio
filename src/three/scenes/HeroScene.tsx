import { Environment, ContactShadows } from "@react-three/drei";
import SkillShapes from "../models/SkillShapes";

export default function HeroScene() {
  return (
    <>
      <Environment preset="city" />
      
      <group position={[0, 0, 0]} scale={1.2}>
        <SkillShapes />
      </group>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.3}
        scale={10}
        blur={3}
        far={4.5}
      />
    </>
  );
}