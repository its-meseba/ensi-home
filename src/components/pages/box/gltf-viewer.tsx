'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GLTFViewerProps {
  modelUrl: string;
}

const Model = React.memo(
  ({ url, isRotating }: { url: string; isRotating: boolean }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>();

    useFrame((state, delta) => {
      if (isRotating && modelRef.current) {
        modelRef.current.rotation.y += delta * 0.5; // Adjust rotation speed here
      }
    });

    return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} />;
  }
);

Model.displayName = 'Model';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white' }}>Loading... {Math.round(progress)}%</div>
    </Html>
  );
}

export default function GLTFViewer({ modelUrl }: GLTFViewerProps) {
  const [isRotating, setIsRotating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    setIsRotating(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsRotating(true);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{ height: '50vh', width: '50vh', overflow: 'hidden' }}
      onClick={handleInteraction}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 5, 0]} intensity={2.5} />
        <pointLight position={[-5, 5, 5]} intensity={2.0} />
        <pointLight position={[5, -5, 5]} intensity={2.0} />
        <pointLight position={[5, 5, -5]} intensity={2.0} />
        <directionalLight position={[0, 10, 5]} intensity={2.5} />
        <directionalLight position={[-10, 10, 10]} intensity={2.5} />

        <Suspense fallback={<Loader />}>
          <Model url={modelUrl} isRotating={isRotating} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          minDistance={0.1875}
          maxDistance={0.1875}
          enableRotate={!isRotating}
        />
      </Canvas>
    </div>
  );
}

GLTFViewer.displayName = 'GLTFViewer';
