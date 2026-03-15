import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function RocketModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <group ref={groupRef}>
      <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.8, 2.5, 32]} />
          <meshStandardMaterial color="#f3f4f6" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Nose Cone */}
        <mesh position={[0, 1.75, 0]}>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Window */}
        <mesh position={[0, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.2, 0.05, 16, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0, 0.5, 0.45]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
        </mesh>

        {/* Fins */}
        {[0, Math.PI * 0.66, Math.PI * 1.33].map((angle, i) => (
          <group key={i} rotation={[0, angle, 0]}>
            <mesh position={[0.7, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.1, 0.8, 0.5]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
          </group>
        ))}

        {/* Engine Glow */}
        <group position={[0, -1.3, 0]}>
          <mesh rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.4, 0.5, 32]} />
            <meshStandardMaterial color="#374151" />
          </mesh>
          
          {/* Flame/Exhaust */}
          <Sphere args={[0.4, 16, 16]} position={[0, -0.4, 0]}>
            <MeshDistortMaterial
              color="#f59e0b"
              emissive="#f59e0b"
              emissiveIntensity={2}
              speed={5}
              distort={0.6}
            />
          </Sphere>
        </group>
      </Float>

      {/* Particle trail (simplified) */}
      {[...Array(10)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[(Math.random() - 0.5) * 1, -2 - Math.random() * 2, (Math.random() - 0.5) * 1]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#fbbf24" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
