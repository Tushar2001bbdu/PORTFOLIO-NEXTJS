'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AboutHeroOrb = React.memo(function AboutHeroOrb(props) {
  const orbRef = useRef();
  const orbitingRefs = useRef([]);
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (orbRef.current) {
      orbRef.current.rotation.y = t * 0.3;
      orbRef.current.position.y = Math.sin(t) * 0.1;
    }

    if (ringRef1.current) ringRef1.current.rotation.y = t * 0.5;
    if (ringRef2.current) ringRef2.current.rotation.x = t * 0.5;

    orbitingRefs.current.forEach((ref, i) => {
      if (ref) {
        const angle = t + i * (Math.PI * 2 / 3);
        const radius = 1.5;
        ref.position.x = Math.cos(angle) * radius;
        ref.position.z = Math.sin(angle) * radius;
      }
    });
  });

  return (
    <group ref={orbRef} scale={[1.2, 1.2, 1.2]} {...props} dispose={null}>
      {/* Central glowing orb */}
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.5}
          toneMapped={false}
        />
      </mesh>

      {/* Glowing ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Glowing ring 2 */}
      <mesh ref={ringRef2} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Orbiting tech cubes */}
      {["#e34c26", "#264de4", "#f0db4f"].map((color, index) => (
        <mesh
          key={index}
          ref={(el) => (orbitingRefs.current[index] = el)}
          position={[0, 0, 0]}
          rotation={[Math.PI / 4, Math.PI / 4, 0]}
        >
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
});

export default AboutHeroOrb;
