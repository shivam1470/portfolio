import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial, Sphere, Box, Octahedron } from "@react-three/drei";
import * as THREE from "three";

const rawSkills = [
  "ANTD", "AWS", "AWS Amplify", "Axios", "Cucumber", "Data Structures", "Docker", 
  "E2E", "Formik", "Git", "GitHub", "Google Maps", "Google Maps API", "HTML", 
  "JavaScript", "Jest", "JWT", "MongoDB", "Material UI", "NestJS", "PostgreSQL", 
  "React", "Redux", "REST", "Sequelize", "TypeScript", "TypeORM", "GitHub Actions", 
  "Redux Toolkit", "Node.js", "Express.js", "Microservices"
];

const getCategoryColor = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes("react") || s.includes("redux") || s.includes("antd") || s.includes("material") || s.includes("html") || s.includes("formik")) return "#61dafb"; // Frontend - Blue
  if (s.includes("node") || s.includes("express") || s.includes("nest") || s.includes("micro") || s.includes("rest") || s.includes("jwt")) return "#339933"; // Backend - Green
  if (s.includes("mongo") || s.includes("postgre") || s.includes("sequel") || s.includes("typeorm")) return "#3178c6"; // DB - Dark Blue
  if (s.includes("aws") || s.includes("docker") || s.includes("git")) return "#ff9900"; // DevOps - Orange
  if (s.includes("jest") || s.includes("cucumber") || s.includes("e2e")) return "#c21325"; // Testing - Red
  return "#ffffff"; // Default
};

function SkillItem({ name, color, shape, pos, size }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={pos}>
      <group>
        {shape === "sphere" && (
          <Sphere ref={meshRef} args={[size, 16, 16]}>
            <MeshDistortMaterial color={color} speed={2} distort={0.2} radius={1} />
          </Sphere>
        )}
        {shape === "box" && (
          <Box ref={meshRef} args={[size * 1.2, size * 1.2, size * 1.2]}>
            <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
          </Box>
        )}
        {shape === "octahedron" && (
          <Octahedron ref={meshRef} args={[size * 1.2, 0]}>
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
          </Octahedron>
        )}
        
        <Text
          position={[0, size + 0.2, 0]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1}
          textAlign="center"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

export default function SkillShapes() {
  const groupRef = useRef<THREE.Group>(null);

  const skills = useMemo(() => {
    return rawSkills.map((name, i) => {
      // Fibonacci sphere distribution for even spacing
      const phi = Math.acos(-1 + (2 * i) / rawSkills.length);
      const theta = Math.sqrt(rawSkills.length * Math.PI) * phi;
      const radius = 2.2;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const shapes = ["sphere", "box", "octahedron"];
      return {
        name,
        color: getCategoryColor(name),
        shape: shapes[i % 3],
        pos: [x, y, z] as [number, number, number],
        size: 0.15 + Math.random() * 0.1
      };
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}

      {/* Aesthetic atmosphere */}
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial color="#4f46e5" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  );
}
