"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const DevStaff = React.memo(function DevStaff(props) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.003;
    }
  });

  return (
    <group ref={ref} {...props} dispose={null} scale={[0.6, 0.6, 0.6]}>
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3, 32]} />
        <meshStandardMaterial color="#555" metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh position={[0, 3.2, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.7}
          toneMapped={false}
        />
      </mesh>
      {["#e34c26", "#264de4", "#f0db4f"].map((color, index) => (
        <mesh
          key={color}
          position={[0, 0.4 + index * 0.4, 0]}
          rotation={[Math.PI / 4, Math.PI / 4, 0]}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
});

export default DevStaff;
