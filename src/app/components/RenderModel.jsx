'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';


export default function RenderModel({ children }) {
  return (
    <div className="h-screen w-full relative">
      <Canvas>
        <Suspense fallback={null}>
          {children}
        </Suspense></Canvas>
    </div>
  );
}
