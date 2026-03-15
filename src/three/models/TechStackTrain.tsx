import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const stacks = [
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#339933" },
  { name: "TS", color: "#3178c6" },
  { name: "Three.js", color: "#ffffff" },
];

function TrainCar({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  return (
    <group position={position}>
      {/* Chassis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.4, 0.8]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1, 0.6, 0.7]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 0.4, 0.36]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>

      {/* Wheels */}
      {[-0.4, 0.4].map((x, i) => (
        <group key={i}>
          <mesh position={[x, -0.2, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
          <mesh position={[x, -0.2, -0.4]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function TechStackTrain() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow circular movement
    const t = state.clock.getElapsedTime() * 0.2;
    groupRef.current.rotation.y = Math.sin(t) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Locomotive (Engine) */}
        <group position={[1.5, 0, 0]}>
          {/* Main Body */}
          <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
            <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Cab */}
          <mesh position={[-0.4, 0.6, 0]}>
            <boxGeometry args={[0.6, 0.8, 0.8]} />
            <meshStandardMaterial color="#374151" />
          </mesh>

          {/* Chimney */}
          <mesh position={[0.3, 0.8, 0]}>
            <cylinderGeometry args={[0.1, 0.15, 0.4, 16]} />
            <meshStandardMaterial color="#111827" />
          </mesh>

          {/* Text on Engine */}
          <Text
            position={[-0.4, 0.6, 0.41]}
            fontSize={0.2}
            color="#6366f1"
            anchorX="center"
            anchorY="middle"
          >
            JS
          </Text>

          {/* Smoke Particles */}
          {[...Array(3)].map((_, i) => (
            <Float key={i} speed={3} floatIntensity={1} position={[0.3, 1.2 + i * 0.3, 0]}>
              <mesh>
                <sphereGeometry args={[0.1 + i * 0.05, 8, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.3 - i * 0.1} />
              </mesh>
            </Float>
          ))}
        </group>

        {/* Train Cars */}
        {stacks.map((stack, index) => (
          <TrainCar 
            key={stack.name} 
            position={[-(index * 1.5), 0, 0]} 
            color={stack.color} 
            label={stack.name} 
          />
        ))}

        {/* Couplings (Simplified) */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[0.75 - i * 1.5, 0, 0]}>
            <boxGeometry args={[0.4, 0.05, 0.1]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
        ))}
      </Float>
    </group>
  );
}
