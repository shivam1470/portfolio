import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

export default function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Base */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2, 0.1, 1.4]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Screen/Lid */}
        <group position={[0, 0, -0.7]} rotation={[-Math.PI / 10, 0, 0]}>
          <mesh position={[0, 0.7, 0]}>
            <boxGeometry args={[2, 1.4, 0.05]} />
            <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Inner Screen */}
          <mesh position={[0, 0.7, 0.03]}>
            <planeGeometry args={[1.9, 1.3]} />
            <meshStandardMaterial color="#000" emissive="#1e1b4b" emissiveIntensity={0.5} />
            
            {/* Screen Content Overlay */}
            <Html
              transform
              distanceFactor={1.2}
              position={[0, 0, 0.01]}
              className="pointer-events-none select-none"
            >
              <div className="w-[190px] h-[130px] bg-indigo-900/40 flex flex-col items-center justify-center border border-indigo-500/30 overflow-hidden p-4 text-center">
                <div className="text-[12px] font-bold text-white mb-1 uppercase tracking-wider">
                  Shivam Mishra
                </div>
                <div className="text-[8px] font-mono text-indigo-300 opacity-80 uppercase tracking-tighter">
                  Senior Software Engineer
                </div>
                <div className="mt-3 flex gap-1">
                  <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-75" />
                  <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-150" />
                </div>
              </div>
            </Html>
          </mesh>
        </group>

        {/* Keyboard/Trackpad Detail */}
        <mesh position={[0, 0.01, 0]}>
          <boxGeometry args={[1.6, 0.01, 0.7]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      </Float>
    </group>
  );
}
