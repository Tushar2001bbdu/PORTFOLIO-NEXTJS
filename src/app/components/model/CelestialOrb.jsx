'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CelestialHeroOrb = React.memo(function CelestialHeroOrb(props) {
  const orbRef = useRef();
  const orbitingRefs = useRef([]);
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (orbRef.current) {
      orbRef.current.rotation.y = t * 0.25;
      orbRef.current.position.y = Math.sin(t * 1.5) * 0.15;
    }

    if (ringRef1.current) ringRef1.current.rotation.z = t * 0.3;
    if (ringRef2.current) ringRef2.current.rotation.x = t * 0.4;

    orbitingRefs.current.forEach((ref, i) => {
      if (ref) {
        const angle = t + i * (Math.PI * 2 / orbitingRefs.current.length);
        const radius = 1.6;
        ref.position.x = Math.cos(angle) * radius;
        ref.position.z = Math.sin(angle) * radius;
        ref.rotation.y = t;
      }
    });
  });

  return (
    <group ref={orbRef} scale={[1.4, 1.4, 1.4]} {...props} dispose={null}>
      {/* Central celestial orb */}
      <mesh>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshStandardMaterial
          color="#99ccff"
          emissive="#66ccff"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.6}
          toneMapped={false}
        />
      </mesh>

      {/* Magical ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#aaffff"
          emissive="#66ffff"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Magical ring 2 */}
      <mesh ref={ringRef2} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#ffccff"
          emissive="#ff99ff"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Orbiting moons/stars */}
      {["#ffe066", "#aaffaa", "#ffaaee"].map((color, index) => (
        <mesh
          key={index}
          ref={(el) => (orbitingRefs.current[index] = el)}
          position={[0, 0, 0]}
        >
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
});

export default CelestialHeroOrb;
